import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { SEO } from '../../next-seo.config'
import NextNprogress from 'nextjs-progressbar'

import GlobalStyles from '@common/styles/global'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/assets/icon-logo.png" />
        <link rel="apple-touch-icon" href="/assets/icon-logo.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <DefaultSeo {...SEO} />
      <NextNprogress
        color="#56B280"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
