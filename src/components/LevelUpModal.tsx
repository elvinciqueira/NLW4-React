import styled from 'styled-components'
import {useChallengesContenxt} from '../context/ChallengesContext'

const Overlay = styled.div`
  background-color: rgba(242, 243, 245, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
  background-color: var(--white);
  width: 100%;
  max-width: 400px;
  padding: 2rem 3rem;
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  text-align: center;
  position: relative;

  header {
    font-size: 8.75rem;
    font-weight: 600;
    color: var(--blue);
    background-image: url('/icons/levelup.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  strong {
    font-size: 2.25rem;
    color: var(--title);
  }

  p {
    font-size: 1.25rem;
    color: var(--text);
    margin-top: 0.25rem;
  }

  button {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    background: transparent;
    border: 0;
    font-size: 0;
  }
`

export function LevelUpModal() {
  const {level, closeLevelUpModal} = useChallengesContenxt()

  return (
    <Overlay>
      <Container>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="icons/close.svg" alt="Fechar Modal" />
        </button>
      </Container>
    </Overlay>
  )
}
