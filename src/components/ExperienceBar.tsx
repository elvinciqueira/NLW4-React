import styled from 'styled-components'
import {useChallengesContenxt} from '../context/ChallengesContext'

const StyledBar = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 1rem;
  }

  > div {
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background-color: var(--gray-line);
    margin: 0 1.5rem;
    position: relative;

    div {
      height: 4px;
      border-radius: 4px;
      background-color: var(--green);
    }

    span {
      position: absolute;
      top: 12px;
      transform: translateX(-50%);
    }
  }
`

export default function ExperienceBar() {
  const {currentExperience, experienceToNextLevel} = useChallengesContenxt()

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel

  return (
    <StyledBar>
      <span>{currentExperience} px</span>
      <div>
        <div style={{width: `${percentToNextLevel}%`}} />

        <span style={{left: `${percentToNextLevel}%`}}>
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} px</span>
    </StyledBar>
  )
}
