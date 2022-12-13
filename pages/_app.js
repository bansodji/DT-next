import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/main.scss"
import 'semantic-ui-css/semantic.min.css'
import { createTheme, NextUIProvider, Spacer } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import Header from '../components/Header3'
import Footer from '../components/Footer';

const lightTheme = createTheme({
  type: 'light',
})

const darkTheme = createTheme({
  type: 'dark',
})

function MyApp({ Component, pageProps }) {

  return (
    <>
      <NextThemesProvider
        defaultTheme='light'
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className
        }}
      >
        <NextUIProvider>
          <Header />
          <Spacer y={1} />
          <Component {...pageProps} />
          <Footer />
        </NextUIProvider>
      </NextThemesProvider>

      <div className='hdn-fields'>
        <input type='hidden' id="hdn-session"/>
      </div>
    </>
  )
}

export default MyApp