import Head from 'next/head'
import { Navigation } from '../src/components/Navigation'
import { Hero } from '../src/components/Hero'
import { Features } from '../src/components/Features'
import { Gallery } from '../src/components/Gallery'
import { CTA } from '../src/components/CTA'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mintari - Mint Your Moments ✨</title>
        <meta name="description" content="Transform your precious photos into beautiful AI-generated storybooks and custom frames. Turn memories into masterpieces." />
        <meta name="keywords" content="AI, storybook, photo, memories, custom frames, mint moments" />
        <meta property="og:title" content="Mintari - Mint Your Moments ✨" />
        <meta property="og:description" content="Transform your precious photos into beautiful AI-generated storybooks and custom frames. Turn memories into masterpieces." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mintari - Mint Your Moments ✨" />
        <meta name="twitter:description" content="Transform your precious photos into beautiful AI-generated storybooks and custom frames. Turn memories into masterpieces." />
      </Head>
      
      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <div id="features">
          <Features />
        </div>
        <div id="gallery">
          <Gallery />
        </div>
        <CTA />
      </div>
    </>
  )
}

