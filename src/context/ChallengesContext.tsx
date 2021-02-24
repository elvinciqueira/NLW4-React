import {createContext, ReactNode, useContext, useState} from 'react'
import challenges from '../../challenges.json'

interface Challenge {
  type: string
  description: string
  amount: number
}

interface ChallengesProviderProps {
  children: ReactNode
}

interface ChallengesContextData {
  level: number
  currentExperience: number
  challengesCompleted: number
  experienceToNextLevel: number
  activeChallenge: Challenge | null
  levelUp: () => void
  startNewChallenges: () => void
  resetChallenge: () => void
}

const ChallengesContext = createContext({} as ChallengesContextData)

function ChallengesProvider({children}: ChallengesProviderProps) {
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperiense] = useState(0)
  const [challengesCompleted, setChallengesCompleted] = useState(0)
  const [activeChallenge, setActiveChallenge] = useState<Challenge | null>(null)

  const levelUp = () => setLevel(level + 1)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  const startNewChallenges = () => {
    const randomChanllengesIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChanllengesIndex]

    setActiveChallenge(challenge)
  }

  const resetChallenge = () => setActiveChallenge(null)

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        activeChallenge,
        experienceToNextLevel,
        levelUp,
        startNewChallenges,
        resetChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  )
}

function useChallengesContenxt() {
  const context = useContext(ChallengesContext)

  return context
}

export {ChallengesProvider, useChallengesContenxt}
