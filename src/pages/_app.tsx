import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
