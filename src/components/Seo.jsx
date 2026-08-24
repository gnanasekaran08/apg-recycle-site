import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'APG Recycling Pte Ltd'
const SITE_URL = 'https://www.apgrecycling.com.sg'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.svg`

export default function Seo({ title, description, path = '/', jsonLd }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Metal Scrap Recycling Singapore`
  const canonical = `${SITE_URL}${path === '/' ? '' : path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={DEFAULT_IMAGE} />
      <meta property="og:locale" content="en_SG" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_IMAGE} />

      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  )
}
