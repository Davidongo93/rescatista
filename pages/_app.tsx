import type { AppProps } from 'next/app'
import { Inter, Bricolage_Grotesque } from 'next/font/google'
import '../styles/index.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} ${bricolage.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
