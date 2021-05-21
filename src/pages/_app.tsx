// Modules Import
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'

// CSS Import
import 'library/css/main.css'
import 'library/css/base.css'
import 'library/css/components.css'
import 'library/css/utilities.css'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <DefaultSeo titleTemplate={router.route === '/' ? 'My Application' : '%s | My Application'} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
