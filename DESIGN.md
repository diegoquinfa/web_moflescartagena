# Mofles Cartagena — Style Reference
> A yellow steel roll-door under the Caribbean sun

**Theme:** light

Mofles Cartagena renders a midday taller (workshop) aesthetic: a sun-bleached concrete canvas carries blocky, condensed signage type in the same shouting caps used on the shop's own painted storefront. Taller Yellow is the loud, functional brand color — the same gold that covers the building's wall and the exhaust-pipe badge — paired with Diesel Navy (the badge's ring color) and Asphalt Black (the roll-down door) for authority and contrast. Surfaces are flat and hard-edged, never glassy: cards sit on the page like enamel signs, lifted with a solid offset shadow instead of a soft blur, the way hand-painted shop signage and license plates cast a hard graphic shadow rather than a photographic one. A diagonal hazard stripe — yellow and black, borrowed from workshop floor markings and tow-truck livery — is the one decorative flourish, used sparingly to mark urgency (open now, free diagnostic, call today). The hero is a straight, confident announcement — big condensed type against yellow, the same way the sign over the gate reads from the street — not a soft product mockup.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Taller Yellow | `#F2B705` | `--color-taller-yellow` | Primary brand fill — hero background, primary CTA, badge rings, the dominant color lifted straight from the shop's painted wall and sign |
| Sunbleached Gold | `#E8B923` | `--color-sunbleached-gold` | Secondary yellow for depth — gradient shading inside the logo badge, hover state on yellow surfaces, warm card backgrounds |
| Diesel Navy | `#16233F` | `--color-diesel-navy` | Headline text on light/yellow backgrounds, logo-badge ring, secondary CTA outline — the "MOFLES CARTAGENA" wordmark color |
| Asphalt Black | `#1A1A1A` | `--color-asphalt-black` | Primary body text, roll-door panels, footer background, highest-contrast surface |
| Chrome Steel | `#9AA1AA` | `--color-chrome-steel` | Muted icon line-art (exhaust pipe illustrations), dividers, disabled states, metallic accents |
| Cartagena Sand | `#FBF6EA` | `--color-cartagena-sand` | Page background — warm off-white like sun-bleached concrete, never pure white |
| Caribbean Sky | `#3E8FC4` | `--color-caribbean-sky` | Secondary accent for trust/informational elements — map links, hours badge, diagnostic icon fill |
| Signal Red | `#D6412C` | `--color-signal-red` | Sparingly for urgency only — "abierto ahora" dot, warning/leak-detection callouts; never a CTA color |
| Pure White | `#FFFFFF` | `--color-pure-white` | Button text on navy/black fills, card surfaces, input backgrounds |
| Hazard Stripe | `repeating-linear-gradient(45deg, #F2B705 0 20px, #1A1A1A 20px 40px)` | `--pattern-hazard-stripe` | The system's one decorative motif — diagonal yellow/black stripe used as a thin accent border on urgency elements (open-now bar, CTA edge, sticky contact bar top) |

## Tokens — Typography

### Bebas Neue — Hero headline, section headers, big numbers, prices — condensed all-caps shouting type lifted straight from the painted shop sign · `--font-bebas-neue`
- **Substitute:** Oswald
- **Weights:** 400
- **Sizes:** 32px, 40px, 56px, 72px
- **Line height:** 1.0, 1.05, 1.1
- **Letter spacing:** 0.01em
- **Role:** Hero headline, section headers, big numbers/prices, the primary "voice" of the brand — every headline reads like it's painted on a wall

### Archivo — Body, UI, buttons, navigation, service descriptions — a wide, sturdy grotesk that reads as workshop-tool utilitarian rather than corporate-soft · `--font-archivo`
- **Substitute:** Work Sans
- **Weights:** 400, 500, 600, 700
- **Sizes:** 14px, 16px, 18px, 20px
- **Line height:** 1.3, 1.4, 1.5
- **Letter spacing:** normal
- **Role:** Body copy, UI labels, buttons, navigation, service card descriptions — the working typeface for everything functional

### Space Mono — Plate-style codes, phone number display, eyebrow labels ('DIAGNÓSTICO GRATIS', 'PISTA 2') — stamped, license-plate character that echoes the shop's part codes and bay numbers · `--font-space-mono`
- **Substitute:** JetBrains Mono
- **Weights:** 400, 700
- **Sizes:** 12px, 13px, 15px
- **Line height:** 1.2
- **Letter spacing:** 0.08em
- **OpenType features:** `"tnum" on`
- **Role:** All-caps eyebrow labels, service SKU/bay tags, phone number and hours display — the stamped, mechanical counterpoint to the shouting display type

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|-----------------|-------|
| caption | 12px | 1.2 | 0.08em | `--text-caption` |
| body-sm | 14px | 1.4 | — | `--text-body-sm` |
| body | 16px | 1.5 | — | `--text-body` |
| subheading | 18px | 1.4 | — | `--text-subheading` |
| heading-sm | 24px | 1.1 | 0.01em | `--text-heading-sm` |
| heading | 32px | 1.05 | 0.01em | `--text-heading` |
| heading-lg | 56px | 1.0 | 0.01em | `--text-heading-lg` |
| display | 72px | 1.0 | 0.01em | `--text-display` |

## Tokens — Spacing & Shapes

**Base unit:** 8px

**Density:** bold — generous around the hero and CTAs, tight and stacked inside service cards, like parts lined up on a bay shelf

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 24 | 24px | `--spacing-24` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 64 | 64px | `--spacing-64` |
| 96 | 96px | `--spacing-96` |
| 120 | 120px | `--spacing-120` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 4px |
| badges | 2px |
| inputs | 4px |
| modals | 8px |
| buttons | 4px |
| iconContainers | 9999px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| sign-sm | `rgba(26, 26, 26, 1) 3px 3px 0px 0px` | `--shadow-sign-sm` |
| sign-md | `rgba(26, 26, 26, 1) 5px 5px 0px 0px` | `--shadow-sign-md` |
| sign-lg | `rgba(26, 26, 26, 1) 8px 8px 0px 0px` | `--shadow-sign-lg` |
| navy-offset | `rgba(22, 35, 63, 1) 4px 4px 0px 0px` | `--shadow-navy-offset` |
| lifted | `rgba(26, 26, 26, 0.18) 0px 8px 20px 0px` | `--shadow-lifted` |
| inset-hairline | `rgba(26, 26, 26, 0.12) 0px 0px 0px 1px inset` | `--shadow-inset-hairline` |

### Layout

- **Page max-width:** 1180px
- **Section gap:** 96px
- **Card padding:** 24px
- **Element gap:** 16px

## Components

### Primary Button (Yellow Solid)
**Role:** Main conversion action — 'Cotiza por WhatsApp', 'Llama ahora'

4px radius, background `--color-taller-yellow`, text `--color-asphalt-black`, weight 700 Archivo, padding 14px 28px. Hard offset shadow `--shadow-sign-sm` (solid, no blur) that shifts to `--shadow-sign-md` and translates -2px/-2px on hover, like a sticker lifting off the surface. No gradient, no glow — the flat solid fill does the work.

### Secondary Button (Navy Outline)
**Role:** Secondary actions — 'Ver servicios', 'Cómo llegar'

4px radius, transparent fill, 2px solid border `--color-diesel-navy`, text `--color-diesel-navy`, weight 600. On hover, fills solid navy with white text — a deliberate flip rather than a soft tint change.

### Pipe Divider
**Role:** Signature section-break element — echoes the twin exhaust pipes in the logo

Two parallel horizontal bars (6px tall, `--color-chrome-steel`, rounded caps), 8px apart, spanning up to 120px, centered between sections. A small circular navy ring sits at the divider's midpoint, mirroring the badge's pipe-cross-section motif. Used only at major section transitions, never inside cards.

### Hazard Stripe Bar
**Role:** Urgency marker — 'Abierto ahora', sticky contact bar top edge, limited-time offers

8px tall strip filled with `--pattern-hazard-stripe` (45° repeating yellow/black, 20px band width). Appears as a thin top border on the sticky WhatsApp bar and as a full-width band directly under the hero. This is the system's single decorative flourish — never used more than once per screen.

### Service Panel (Corrugated Card)
**Role:** Service grid items — Silenciadores, Flexibles, Catalizadores, Empaques, Instalación, Diagnóstico

Cartagena Sand background, 4px radius, `--shadow-sign-sm` offset shadow, 2px solid `--color-asphalt-black` border. Top edge carries a thin repeating vertical-line texture (6 lines, `--color-chrome-steel` at 20% opacity, 4px apart) suggesting corrugated metal siding. Icon tile (circular, navy fill, white line-art glyph) sits top-left; service name in Bebas Neue 24px below.

### Plate Tag
**Role:** Phone number, Instagram handle, bay/service codes — 'PISTA 2', '@mofles_cartagena', '321 889 5253'

Rectangular chip, 2px radius (deliberately sharper than other elements — reads as a stamped plate), background `--color-diesel-navy`, text `--color-pure-white` in Space Mono 13px letter-spacing 0.08em, padding 6px 12px. A single thin yellow rule sits along the left edge like a plate's mounting bolt.

### Diagnostic Ribbon Badge
**Role:** 'Diagnóstico Gratis' callout — the shop's key differentiator, folded into hero and service grid

Folded-ribbon shape (CSS clip-path or two overlapping rectangles), `--color-signal-red` fill, white Space Mono caps text, small drop shadow `--shadow-sign-sm` at reduced offset (2px). Pinned at the top corner of the diagnostic service card and repeated once in the hero as a standalone badge.

### Shop Snapshot Frame
**Role:** Real photography of the taller — storefront, cars mid-service, the bay

Photo sits inside a hard-edged frame: 4px radius, 6px solid white border, `--shadow-sign-lg` offset shadow behind it, rotated -1.5deg to +1.5deg at random per image — like photos taped up in the shop office rather than a polished gallery grid.

### Sticky Contact Bar
**Role:** Persistent bottom bar — phone + WhatsApp click-to-call, always visible on scroll

Full-width, `--color-asphalt-black` background, hazard-stripe top edge (8px), two Plate Tags (Call / WhatsApp) right-aligned with icon-first Primary Buttons, Diesel Navy text label 'Diagnóstico gratis' left-aligned in Space Mono.

### Logo Badge Lockup
**Role:** Header wordmark, favicon source, footer mark

Circular badge, navy outer ring (6px stroke), yellow fill, centered chrome exhaust-pipe line-art icon, 'MOFLES' arced along the top and 'CARTAGENA' arced along the bottom in Archivo Black-weight caps — matches the client's existing logo exactly; do not redraw, only resize.

## Do's and Don'ts

### Do
- Use hard, solid offset shadows (`--shadow-sign-sm/md/lg`) on every elevated surface — no blur, no soft glow; elevation should read like a sticker or enamel sign lifted off the wall.
- Set every headline in Bebas Neue, all-caps, tight leading (1.0–1.1) — the type should read the way the shop's own painted sign reads from the street.
- Reserve the hazard stripe pattern for exactly one urgency element per screen; overuse turns a confident accent into visual noise.
- Keep the base page background warm off-white (`--color-cartagena-sand`), never pure white — it should feel like sun-bleached concrete, not a sterile SaaS canvas.
- Use Space Mono only for stamped, code-like content (phone numbers, bay numbers, handles, eyebrow labels) — never for body paragraphs.
- Rotate shop photography slightly (-1.5° to 1.5°) inside hard white-bordered frames rather than presenting a perfectly aligned photo grid.
- Let Diesel Navy carry authority in text and outlines; let Taller Yellow carry energy in fills — don't swap their roles.

### Don't
- Do not use soft blurred drop-shadows or glassmorphism — this is a flat, printed, industrial system, not a glass one.
- Do not round corners past 8px anywhere except the circular logo badge and icon tiles — the brand is blocky and signage-like, not soft.
- Do not introduce additional accent hues beyond Signal Red (urgency only) and Caribbean Sky (informational only) — the palette stays yellow/navy/black with two disciplined exceptions.
- Do not stretch the hazard stripe across large background areas; it is a thin marking device, not a wallpaper.
- Do not set body copy in Bebas Neue — it is illegible below display sizes and exists only for shouting headlines.
- Do not use stock automotive photography; real photos of this specific shop, bay, and vehicles are the only imagery that belongs on the page.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Cartagena Sand | `#FBF6EA` | Full-bleed page background |
| 1 | Pure White | `#FFFFFF` | Card and input surfaces sitting above the sand background |
| 2 | Taller Yellow | `#F2B705` | Hero background, primary CTA fills, badge surfaces |
| 3 | Asphalt Black | `#1A1A1A` | Footer, sticky contact bar, roll-door imagery panels |

## Elevation

- **Service panel:** `3px 3px 0px 0px rgba(26, 26, 26, 1)`
- **Primary button (rest → hover):** `3px 3px 0px 0px rgba(26, 26, 26, 1)` → `5px 5px 0px 0px rgba(26, 26, 26, 1)` with a -2px/-2px translate
- **Shop snapshot frame:** `8px 8px 0px 0px rgba(26, 26, 26, 1)`
- **Diagnostic ribbon:** `2px 2px 0px 0px rgba(26, 26, 26, 1)`

## Imagery

Photography is real and specific to this shop: the yellow-and-black storefront with the roll-down gate, cars mid-service inside the bay, the navy exhaust-pipe badge on the sign, the striped awning out front. No stock automotive imagery, no generic mechanic stock photos. Icon work is limited to simple line-art (1.5–2px stroke) in Chrome Steel or Diesel Navy — muffler cross-sections, wrench, gauge dial, calendar — kept mono and unfilled to match the badge's own line-art muffler illustration. Photos are framed hard-edged with white borders and offset shadows, slightly rotated, as if pinned to a corkboard in the shop office.

## Layout

Warm sand canvas, 1180px max-width container. Hero is full-bleed Taller Yellow with a large Bebas Neue headline in Diesel Navy ('MOFLES CARTAGENA' or a service-led headline), a Space Mono eyebrow above it, and a hazard-stripe band directly beneath marking 'Abierto ahora' plus hours. A Primary Button and a phone Plate Tag sit side by side below the headline. Directly under the hero, a horizontal Pipe Divider introduces the services section: a 2–3 column grid of Corrugated Service Panels (Silenciadores, Flexibles, Catalizadores, Empaques y Soportes, Instalación de Tubería, Diagnóstico Gratis — the last carries the Diagnostic Ribbon Badge). A Shop Snapshot gallery follows — 3 rotated framed photos of the storefront and bay. A simple map/hours block uses Caribbean Sky accents. The page closes with a full-width Asphalt Black footer carrying the Logo Badge, Plate Tags for phone/Instagram, and address. A Sticky Contact Bar with the hazard-stripe top edge stays fixed at the bottom on scroll.

## Agent Prompt Guide

Quick Color Reference:
- canvas: #FBF6EA
- surface (card): #FFFFFF
- surface (hero/CTA fill): #F2B705
- surface (dark panel/footer): #1A1A1A
- text (headline on light): #16233F
- text (headline on yellow): #16233F
- text (body): #1A1A1A
- text (muted/metallic): #9AA1AA
- accent (informational): #3E8FC4
- accent (urgency only): #D6412C
- shadow (signature): solid offset, no blur — `Npx Npx 0px 0px rgba(26,26,26,1)`

Example Component Prompts:

1. Create a Primary Action Button: `#F2B705` background, `#1A1A1A` text, 4px radius, padding 14px 28px, weight 700 Archivo, hard offset shadow `3px 3px 0px rgba(26,26,26,1)` that grows to `5px 5px` with a -2px translate on hover. No blur, no gradient.

2. Section divider (Pipe Divider): two horizontal bars, 6px tall, `#9AA1AA`, rounded caps, 8px apart, max 120px wide, centered, with a small navy circular ring at the midpoint.

3. Service card: white background, 4px radius, 2px solid `#1A1A1A` border, offset shadow `3px 3px 0px rgba(26,26,26,1)`, thin corrugated-line texture along the top edge, circular navy icon tile top-left, Bebas Neue 24px title below.

4. Hazard stripe bar: 8px tall, `repeating-linear-gradient(45deg, #F2B705 0 20px, #1A1A1A 20px 40px)`, used as a single thin accent border — never a full background fill.

5. Plate tag: navy background `#16233F`, white Space Mono text at 13px with 0.08em tracking, 2px radius, padding 6px 12px, thin yellow rule along the left edge.

## Gradient System

The system deliberately avoids soft gradients — it is a flat, printed, signage system. The one exception is the Sunbleached Gold radial used only inside the circular Logo Badge (`radial-gradient(circle, #F2B705 60%, #E8B923 100%)`) to give the badge's yellow field a subtle painted-metal roundness, matching the client's existing logo art. No gradient is used on buttons, cards, or headline text; every other fill is a flat solid.

## Similar Brands

- **Local hand-painted shop signage across Cartagena/Barranquilla** — bold flat color fields, condensed all-caps lettering, high-contrast navy-on-yellow or black-on-yellow combinations
- **AutoZone / O'Reilly retail branding** — safety-yellow-and-black automotive retail palette with blocky sans display type
- **Tow-truck and road-safety livery** — the hazard-stripe motif and hard, graphic (non-photographic) shadow language
- **Field Notes / vintage hardware packaging** — stamped mono type for codes and part numbers paired with a bold display face for the product name
- **In-N-Out signage system** — flat yellow-and-red (here yellow-and-navy) palette, confident condensed caps, no gradients or soft shadows

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-taller-yellow: #F2B705;
  --color-sunbleached-gold: #E8B923;
  --color-diesel-navy: #16233F;
  --color-asphalt-black: #1A1A1A;
  --color-chrome-steel: #9AA1AA;
  --color-cartagena-sand: #FBF6EA;
  --color-caribbean-sky: #3E8FC4;
  --color-signal-red: #D6412C;
  --color-pure-white: #FFFFFF;
  --pattern-hazard-stripe: repeating-linear-gradient(45deg, #F2B705 0 20px, #1A1A1A 20px 40px);

  /* Typography — Font Families */
  --font-bebas-neue: 'Bebas Neue', 'Oswald', ui-sans-serif, system-ui, sans-serif;
  --font-archivo: 'Archivo', 'Work Sans', ui-sans-serif, system-ui, sans-serif;
  --font-space-mono: 'Space Mono', 'JetBrains Mono', ui-monospace, monospace;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.2;
  --tracking-caption: 0.08em;
  --text-body-sm: 14px;
  --leading-body-sm: 1.4;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 18px;
  --leading-subheading: 1.4;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.1;
  --text-heading: 32px;
  --leading-heading: 1.05;
  --text-heading-lg: 56px;
  --leading-heading-lg: 1.0;
  --text-display: 72px;
  --leading-display: 1.0;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-unit: 8px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-96: 96px;
  --spacing-120: 120px;

  /* Layout */
  --page-max-width: 1180px;
  --section-gap: 96px;
  --card-padding: 24px;
  --element-gap: 16px;

  /* Border Radius */
  --radius-cards: 4px;
  --radius-badges: 2px;
  --radius-inputs: 4px;
  --radius-modals: 8px;
  --radius-buttons: 4px;
  --radius-iconcontainers: 9999px;

  /* Shadows */
  --shadow-sign-sm: 3px 3px 0px 0px rgba(26, 26, 26, 1);
  --shadow-sign-md: 5px 5px 0px 0px rgba(26, 26, 26, 1);
  --shadow-sign-lg: 8px 8px 0px 0px rgba(26, 26, 26, 1);
  --shadow-navy-offset: 4px 4px 0px 0px rgba(22, 35, 63, 1);
  --shadow-lifted: 0px 8px 20px 0px rgba(26, 26, 26, 0.18);
  --shadow-inset-hairline: 0px 0px 0px 1px rgba(26, 26, 26, 0.12) inset;

  /* Surfaces */
  --surface-canvas: #FBF6EA;
  --surface-card: #FFFFFF;
  --surface-hero: #F2B705;
  --surface-footer: #1A1A1A;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-taller-yellow: #F2B705;
  --color-sunbleached-gold: #E8B923;
  --color-diesel-navy: #16233F;
  --color-asphalt-black: #1A1A1A;
  --color-chrome-steel: #9AA1AA;
  --color-cartagena-sand: #FBF6EA;
  --color-caribbean-sky: #3E8FC4;
  --color-signal-red: #D6412C;
  --color-pure-white: #FFFFFF;

  /* Typography */
  --font-bebas-neue: 'Bebas Neue', 'Oswald', ui-sans-serif, system-ui, sans-serif;
  --font-archivo: 'Archivo', 'Work Sans', ui-sans-serif, system-ui, sans-serif;
  --font-space-mono: 'Space Mono', 'JetBrains Mono', ui-monospace, monospace;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.2;
  --text-body-sm: 14px;
  --leading-body-sm: 1.4;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 18px;
  --leading-subheading: 1.4;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.1;
  --text-heading: 32px;
  --leading-heading: 1.05;
  --text-heading-lg: 56px;
  --leading-heading-lg: 1.0;
  --text-display: 72px;
  --leading-display: 1.0;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-96: 96px;
  --spacing-120: 120px;

  /* Border Radius */
  --radius-cards: 4px;
  --radius-badges: 2px;
  --radius-inputs: 4px;
  --radius-modals: 8px;
  --radius-buttons: 4px;
  --radius-iconcontainers: 9999px;

  /* Shadows */
  --shadow-sign-sm: 3px 3px 0px 0px rgba(26, 26, 26, 1);
  --shadow-sign-md: 5px 5px 0px 0px rgba(26, 26, 26, 1);
  --shadow-sign-lg: 8px 8px 0px 0px rgba(26, 26, 26, 1);
  --shadow-navy-offset: 4px 4px 0px 0px rgba(22, 35, 63, 1);
  --shadow-lifted: 0px 8px 20px 0px rgba(26, 26, 26, 0.18);
  --shadow-inset-hairline: 0px 0px 0px 1px rgba(26, 26, 26, 0.12) inset;
}
```
