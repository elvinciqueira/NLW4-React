import {createContext, ReactNode, useContext, useEffect, useState} from 'react'
import {useChallengesContenxt} from './ChallengesContext'

interface CountdownContextData {
  time: number
  isActive: boolean
  hasFinished: boolean
  minutes: number
  seconds: number
  startCountdown: () => void
  resetCountdown: () => void
}

interface CountDownProviderProps {
  children: ReactNode
}

const CountdownContext = createContext({} as CountdownContextData)

let countdownTimeout: NodeJS.Timeout

function CountdownProvider({children}: CountDownProviderProps) {
  const {startNewChallenges} = useChallengesContenxt()
  const [time, setTime] = useState(0.1 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const startCountdown = () => setIsActive(true)

  const resetCountdown = () => {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setTime(25 * 60)
    setHasFinished(false)
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
    <CountdownContext.Provider
      value={{
        time,
        isActive,
        hasFinished,
        minutes,
        seconds,
        startCountdown,
        resetCountdown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  )
}

function useCountdownContext() {
  const context = useContext(CountdownContext)

  return context
}

export {useCountdownContext, CountdownProvider}
