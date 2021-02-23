import React from 'react'
import styled from 'styled-components'

import ExperienceBar from '../components/ExperienceBar'
import Profile from '../components/Profile'

const Container = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;

  section {
    flex: 1;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-content: center;
  }
`

export default function Home(): JSX.Element {
  return (
    <Container>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
        </div>
        <div></div>
      </section>
    </Container>
  )
}
