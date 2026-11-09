import { Html, Head, Main, NextScript } from 'next/document'

// Google Analytics 4 (property "Ngoni Maphosa portfolio") and Cloudflare Web Analytics.
// GA4 enhanced measurement records client-side route changes, so one config call is enough.
const GA_ID = 'G-7L07JY68ET'
const CF_TOKEN = 'ac59eaf9bdfa4690a8dcbed11e300692'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon={`{"token": "${CF_TOKEN}"}`}
        />
      </body>
    </Html>
  )
}
