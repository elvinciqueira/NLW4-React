import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f2f3f5;
    --white: #fff;
    --gray-line: #DCDDE0;
    --text: #666;
    --text-highlight: #b3b9ff;
    --title: #2e384d;
    --red: #e83f5d;
    --green: #4cd62b;
    --blue: #5965e0;
    --blueDark: #4953b8;
    --blue-twitter: #2aa9e0;
  }

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
  }

  body {
    background-color: var(--background);
    color: var(--text);
  }

  body, input, textarea, button {
    font: 400 1rem 'Inter', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
export default GlobalStyle