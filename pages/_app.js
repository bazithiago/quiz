import { createGlobalStyle, ThemeProvider } from 'styled-components'
import db from '../db.json'


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    list-style: none;
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
  }

  body {
    color: ${({ theme }) => theme.colors.contrastText};
    background-color: ${({ theme }) => theme.colors.bg};
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
