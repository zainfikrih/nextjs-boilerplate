import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme, useToast } from '@chakra-ui/react'
import { theme as chakraTheme } from '@chakra-ui/react'
import { RecoilRoot } from 'recoil'
import { SWRConfig } from 'swr'
import { RecoilEnv } from 'recoil'

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false

const theme = extendTheme({
  colors: {
    goBean: "#7C7551",
    tana: "#D8D3B9",
    blackOlive: "#313318",
    greenSpring: "#B1B7B1",
    tanaLight: "#ede9df"
  },
  fonts: {
    ...chakraTheme.fonts,
    dancing: 'Dancing Script'
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    "3": ".75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem",
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
});

export default function App({ Component, pageProps }: AppProps) {

  const fetcher = (url: string, data: any) => {
    const options: RequestInit = {
      headers: new Headers({
        'Content-Type': 'application/json',
        // token: session.access_token,
      }),
      credentials: 'same-origin',
    }
    if (data) {
      options.method = 'POST'
      options.body = JSON.stringify(data)
    }
    return fetch(url, options).then((res) => {
      if (!res.ok) {
        const error = new Error('An error occurred while fetching the data.')

        error.cause = res.json()
        error.name = res.status.toString()

        throw error;
      }
      return res.json()
    })
  }


  return (
    <SWRConfig value={{ fetcher }}>
      <RecoilRoot>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </RecoilRoot>
    </SWRConfig>
  )
}
