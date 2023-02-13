import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const APP_NAME = 'NextJS 13'
  const APP_DESCRIPTION = 'NextJS Boilerplate'
  return (
    <Html lang="en" className='sr'>
      <Head>
        <meta name='application-name' content={APP_NAME} />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content={APP_NAME} />
        <meta name='description' content={APP_DESCRIPTION} />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <link rel="manifest" href="/manifest.webmanifest.json" />
        <link rel="apple-touch-icon" href="/favicon.ico"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
