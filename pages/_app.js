import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/main.scss"
import 'semantic-ui-css/semantic.min.css'
import { createTheme, NextUIProvider, Spacer } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import Header from '../components/Header3'
import Footer from '../components/Footer';
import Router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

function MyApp({ Component, pageProps }) {

  return (
    <>
      <NextUIProvider>
        <Header />
        <Spacer y={1} />
        <Component {...pageProps} />
        <Footer />
      </NextUIProvider>
    </>
  )
}

export default MyApp