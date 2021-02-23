import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
  }

  div {
    margin-left: 1.5rem;

    strong {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--title);
    }

    p {
      img {
        width: 1rem;
        height: 1rem;
        margin-right: 0.5rem;
      }

      font-size: 1rem;
      margin-top: 0.5rem;
    }
  }
`

export default function Profile() {
  return (
    <Container>
      <img src="https://github.com/elvinciqueira.png" alt="Elvin Ciqueira" />

      <div>
        <strong>Elvin Ciqueira</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </Container>
  )
}
