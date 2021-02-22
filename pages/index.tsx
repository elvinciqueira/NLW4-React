import React from 'react'
import Head from 'next/head'
import GlobalStyle from '../src/theme/GlobalStyle'
import ExperienceBar from '../src/components/ExperienceBar'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;
`

export default function Home(): JSX.Element {
  return (
    <React.Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <GlobalStyle />
      <Container>
        <ExperienceBar />
      </Container>
    </React.Fragment>
  )
}
