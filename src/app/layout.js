import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aarya Chopkar',
  description: 'Portfolio Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/pf.png" type="image/png" sizes='any' />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
