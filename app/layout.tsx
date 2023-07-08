import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'] })

const monaSans = localFont({
  src: './Mona-Sans.woff2',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Fuse Network Wallet',
  description: 'Fuse Network Wallet Web Application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
