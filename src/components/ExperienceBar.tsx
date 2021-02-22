import styled from 'styled-components'

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
  return (
    <StyledBar>
      <span>0 px</span>
      <div>
        <div style={{width: '50%'}} />

        <span style={{left: '50%'}}>300xp</span>
      </div>
      <span>600 px</span>
    </StyledBar>
  )
}
