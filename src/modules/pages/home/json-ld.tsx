import {
  PHONE_TEL,
  PHONE_DISPLAY,
  WHATSAPP_URL,
  INSTAGRAM_URL,
  ADDRESS,
  NAV_LINKS,
} from './site-data'

const SITE_URL = 'https://moflescartagena.com'
const LOGO_URL = `${SITE_URL}/images/logo.webp`
const STOREFRONT_URL = `${SITE_URL}/images/storefront.webp`

const BUSINESS_HOURS = [
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '07:00',
    closes: '17:00',
  },
]

const FAQS = [
  {
    q: '¿El diagnóstico realmente es gratis?',
    a: 'Sí. Revisamos tu sistema de escape sin ningún costo y te damos un presupuesto claro antes de hacer cualquier trabajo.',
  },
  {
    q: '¿Cuánto tardan en reparar mi vehículo?',
    a: 'La mayoría de reparaciones de silenciadores y flexibles se resuelven el mismo día. Trabajos más grandes te los cotizamos con tiempo estimado.',
  },
  {
    q: '¿Los repuestos tienen garantía?',
    a: 'Instalamos repuestos de calidad y ofrecemos garantía sobre el trabajo realizado. Te explicamos las condiciones en el momento de la cotización.',
  },
  {
    q: '¿Necesito cita previa?',
    a: 'No es obligatorio, pero puedes escribirnos por WhatsApp para coordinar tu visita y evitar esperas.',
  },
  {
    q: '¿Cómo pido una cotización?',
    a: `Escríbenos por WhatsApp al ${PHONE_DISPLAY} con la marca y modelo de tu vehículo y el problema que presenta. Te respondemos rápido.`,
  },
]

const SERVICES = [
  {
    name: 'Silenciadores',
    description:
      'Reparación y cambio de silenciadores y pre silenciadores para un escape sin ruidos.',
  },
  {
    name: 'Catalizadores',
    description:
      'Diagnóstico y reemplazo de catalizadores para cumplir con la emisión de gases.',
  },
  {
    name: 'Flexibles',
    description:
      'Reemplazo de flexibles rotos que eliminan fugas y vibraciones en el sistema de escape.',
  },
  {
    name: 'Instalación de tubería',
    description:
      'Fabricación e instalación de tubería de escape a la medida de tu vehículo.',
  },
  {
    name: 'Empaques y soportes',
    description:
      'Instalación de empaques y soportes que sellan y fijan correctamente el escape.',
  },
  {
    name: 'Diagnóstico gratuito',
    description:
      'Revisamos tu sistema de escape sin costo y te decimos exactamente qué necesita.',
  },
]

const REVIEW_SNIPPETS = [
  {
    author: 'Felipe Andres Martinez Plaza',
    text: 'Excelente atención, excelente servicio y ni hablar de la calidad del trabajo. El sr Boris su propietario un gran anfitrión, 200% recomendado.',
  },
  {
    author: 'Federico Gallego',
    text: 'Buen taller, con gente amable y profesional. Me informaron qué daño tenía el carro y cuál iba a ser el arreglo. Lo recomiendo.',
  },
  {
    author: 'Jesus D Martinez',
    text: 'Excelente servicio, 100% recomendado, el personal es capacitado y los precios son justos.',
  },
  {
    author: 'Jesahel Zakzuk alcazar',
    text: 'Excelente servicio, recomendado 100%, su personal es muy calificado y honesto, trabajo perfecto y garantizado.',
  },
  {
    author: 'Oliver Anaya',
    text: 'Muy buen trabajo, rápido, te plantean el problema y de forma sencilla te explican mostrando la situación, honestidad es clave.',
  },
  {
    author: 'Samir Cano',
    text: 'La atención fue buena, me hicieron un cambio de mofle en menos de 1 hora, me hicieron un descuento y además me dan 3 meses de garantía.',
  },
  {
    author: 'Carlos Mario Galan',
    text: 'Excelente servicio y muy amable atención.',
  },
]

function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutomotiveRepairShop',
    '@id': `${SITE_URL}/#business`,
    name: 'Mofles Cartagena',
    alternateName: 'Mofles Cartagena Taller de Escapes',
    description:
      'Taller especializado en sistemas de escape en Cartagena. Silenciadores, flexibles, catalizadores, empaques, instalación de tubería de escape y diagnóstico gratuito.',
    url: SITE_URL,
    logo: LOGO_URL,
    image: STOREFRONT_URL,
    telephone: PHONE_TEL,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Cra. 14 #35-138',
      addressLocality: 'Cartagena de Indias',
      addressRegion: 'Bolívar',
      addressCountry: 'CO',
      neighborhood: 'Torices',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 10.427455,
      longitude: -75.538193,
    },
    openingHoursSpecification: BUSINESS_HOURS,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: PHONE_TEL,
        contactType: 'customer service',
        contactOption: 'TollFree',
        availableLanguage: ['Spanish'],
        areaServed: {
          '@type': 'City',
          name: 'Cartagena de Indias',
        },
      },
      {
        '@type': 'ContactPoint',
        telephone: PHONE_TEL,
        contactType: 'sales',
        url: WHATSAPP_URL,
        availableLanguage: ['Spanish'],
      },
    ],
    sameAs: [INSTAGRAM_URL],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de escape',
      itemListElement: SERVICES.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.name,
          description: s.description,
          serviceType: 'Reparación de sistema de escape',
          provider: { '@id': `${SITE_URL}/#business` },
          areaServed: {
            '@type': 'City',
            name: 'Cartagena de Indias',
          },
        },
      })),
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: String(REVIEW_SNIPPETS.length),
      bestRating: '5',
      worstRating: '1',
    },
    review: REVIEW_SNIPPETS.map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.author },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      reviewBody: r.text,
    })),
  }
}

function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'Mofles Cartagena',
    inLanguage: 'es-CO',
    publisher: { '@id': `${SITE_URL}/#business` },
  }
}

function faqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${SITE_URL}/#faq`,
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  }
}

function breadcrumbSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: SITE_URL,
      },
      ...NAV_LINKS.map((link, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: link.label,
        item: `${SITE_URL}/${link.href.replace('#', '')}`,
      })),
    ],
  }
}

export function JsonLd() {
  const schemas = [
    organizationSchema(),
    websiteSchema(),
    faqSchema(),
    breadcrumbSchema(),
  ]

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
