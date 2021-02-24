import React from 'react'
import {useState, useEffect} from 'react'
import styled, {css} from 'styled-components'
import {useChallengesContenxt} from '../context/ChallengesContext'

const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Rajdhani';
  font-weight: 600;
  color: var(--title);

  > div {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background-color: var(--white);
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;

    span {
      flex: 1;
    }

    span:first-child {
      border-right: 1px solid #f0f1f3;
    }

    span:last-child {
      border-left: 1px solid #f0f1f3;
    }
  }

  > span {
    font-size: 6.5rem;
    margin: 0 0.5rem;
  }
`

interface ButtonProps {
  active: boolean
}

const Button = styled.button<ButtonProps>`
  width: 100%;
  height: 5rem;

  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  background-color: var(--blue);
  color: var(--white);

  font-size: 1.25rem;
  font-weight: 600;

  transition: background-color 0.3s;

  &:not(:disabled):hover {
    background-color: var(--blue-dark);
  }

  &:disabled {
    background-color: var(--white);
    color: var(--text);
    border-bottom: 6px solid var(--green);
    cursor: not-allowed;
  }

  ${(props) => {
    if (props.active) {
      return css`
        background-color: var(--white);
        color: var(--title);

        &:not(:disabled):hover {
          background-color: var(--red);
          color: var(--white);
        }
      `
    }
  }}
`

let countdownTimeout: NodeJS.Timeout

export default function Countdown() {
  const {startNewChallenges} = useChallengesContenxt()
  const [time, setTime] = useState(0.1 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  const startCountdown = () => setIsActive(true)

  const resetCountdown = () => {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setTime(25 * 60)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false)
      startNewChallenges()
    }
  }, [isActive, time])

  return (
    <>
      <Container>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </Container>

      {hasFinished ? (
        <Button active={isActive} disabled>
          Ciclo encerrado
        </Button>
      ) : (
        <>
          {isActive ? (
            <Button type="button" active={isActive} onClick={resetCountdown}>
              Abandonar Ciclo
            </Button>
          ) : (
            <Button type="button" active={isActive} onClick={startCountdown}>
              Iniciar Ciclo
            </Button>
          )}
        </>
      )}
    </>
  )
}
