import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../src/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Mintari - Mint Your Moments ✨</title>
        <meta name="description" content="Transform your precious photos into beautiful AI-generated storybooks and custom frames. Turn memories into masterpieces." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

