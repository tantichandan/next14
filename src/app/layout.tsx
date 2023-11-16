import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NextAuthProvider from './providers/next-auth-provider'
import NextThemeProvider from './providers/theme-provider'
import GlobalState from './context'
import Header from './components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

/* Need to check the video at 24.51 */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-black">
        <NextThemeProvider>
          <NextAuthProvider>
            <GlobalState>
              <Header/>
              {children}
            </GlobalState>
          </NextAuthProvider>
        </NextThemeProvider>

      </body>
    </html>
  )
}
