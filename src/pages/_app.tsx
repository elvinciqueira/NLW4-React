import {AppProps} from 'next/dist/next-server/lib/router/router'
import Head from 'next/head'
import React, {Fragment} from 'react'
import GlobalStyle from '../theme/GlobalStyle'
import {ChallengesProvider} from '../context/ChallengesContext'

export default function App({Component, pageProps}: AppProps): JSX.Element {
  return (
    <Fragment>
      <Head>
        <link rel="shortcut icon" href="favicon.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />

      <ChallengesProvider>
        <Component {...pageProps} />
      </ChallengesProvider>
    </Fragment>
  )
}
