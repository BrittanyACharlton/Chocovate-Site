'use client'

import Head from 'next/head'
import Header from '@/app/components/header'
import Footer from '@/app/components/footer'

export default function SamplesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Chocovate Labs - Sample Request Form</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <script async src="https://tally.so/widgets/embed.js" />
      </Head>

      <Header />

      <main className="flex-grow relative overflow-hidden">
        <iframe
          src="https://tally.so/r/nGg2Ak?transparentBackground=1"
          title="Chocovate Labs - Sample Request Form"
          className="absolute top-0 left-0 w-full h-full border-0"
        />
      </main>

      <Footer />
    </div>
  )
}
