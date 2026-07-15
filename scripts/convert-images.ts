#!/usr/bin/env bun
/**
 * Convierte todas las imágenes de /public/images a WebP al 75% de calidad.
 *
 * Uso:  bun run scripts/convert-images.ts            (convierte, conserva originales)
 *       bun run scripts/convert-images.ts --delete    (borra los originales tras convertir)
 *
 * Implementación: usa la API built-in `Bun.Image` de Bun 1.3.14+ (sin dependencias).
 */
import { readdir, unlink } from "node:fs/promises"
import { join, extname, basename, resolve } from "node:path"

const PUBLIC_DIR = resolve(import.meta.dir, "..", "public", "images")
const QUALITY = 75
const SUPPORTED_EXT = new Set([".png", ".jpg", ".jpeg"])
const shouldDelete = process.argv.includes("--delete")

interface ConvertedFile {
  original: string
  webp: string
  originalBytes: number
  webpBytes: number
}

async function listImages(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true })
  return entries
    .filter((e) => e.isFile() && SUPPORTED_EXT.has(extname(e.name).toLowerCase()))
    .map((e) => join(dir, e.name))
    .sort()
}

async function convertToWebp(inputPath: string): Promise<ConvertedFile> {
  const file = Bun.file(inputPath)
  const originalBytes = file.size

  // .webp() espera un objeto de opciones, no un número suelto.
  // .bytes() es un método terminal asíncrono: hay que awaitearlo,
  // el pipeline no corre hasta ese punto.
  const webpBytes = await file.image().webp({ quality: QUALITY }).bytes()

  const outputPath = join(PUBLIC_DIR, `${basename(inputPath, extname(inputPath))}.webp`)
  await Bun.write(outputPath, webpBytes)

  return {
    original: inputPath,
    webp: outputPath,
    originalBytes,
    webpBytes: webpBytes.byteLength,
  }
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

function pct(a: number, b: number): string {
  if (a === 0) return "0%"
  const ratio = ((a - b) / a) * 100
  const sign = ratio >= 0 ? "-" : "+"
  return `${sign}${Math.abs(ratio).toFixed(1)}%`
}

const files = await listImages(PUBLIC_DIR)

if (files.length === 0) {
  console.log("No se encontraron imágenes en", PUBLIC_DIR)
  process.exit(0)
}

console.log(`Convirtiendo ${files.length} imágenes a WebP @ ${QUALITY}% …\n`)

const results: ConvertedFile[] = []
for (const file of files) {
  const r = await convertToWebp(file)
  results.push(r)
  console.log(
    `  ${basename(r.original).padEnd(28)} → ${basename(r.webp).padEnd(28)}  ` +
      `${formatBytes(r.originalBytes).padStart(9)} → ${formatBytes(r.webpBytes).padStart(9)}  ${pct(r.originalBytes, r.webpBytes)}`,
  )
}

const totalIn = results.reduce((a, r) => a + r.originalBytes, 0)
const totalOut = results.reduce((a, r) => a + r.webpBytes, 0)
console.log(
  `\nTotal: ${formatBytes(totalIn)} → ${formatBytes(totalOut)}  ${pct(totalIn, totalOut)}`,
)

if (shouldDelete) {
  console.log("\nBorrando originales…")
  for (const r of results) {
    await unlink(r.original)
    console.log(`  rm ${basename(r.original)}`)
  }
  console.log("\nListo. Originales borrados.")
} else {
  console.log("\nListo. Originales conservados. Pasá --delete para borrarlos.")
}
