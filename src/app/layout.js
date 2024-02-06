import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aarya Chopkar',
  description: 'Portfolio Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name='keywords' content='Code, developer, JavaScript, typescript, web, web developer, web development, coding, developing, next, HTML, CSS, tailwind' />
        <meta property='og:title' content='Aarya Chopkar' />
        <meta property='og:description' content='Web Developer working on NextJS. Open Source buff who also loves python.' />
        <meta property='og:url' content='https://aaryachopkar.vercel.app/' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='https://raw.githubusercontent.com/accodes21/my-portfolio/master/preview.png' />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property='twitter:title' content='Aarya Chopkar' />
        <meta property='twitter:description' content='Web Developer working on NextJS. Open Source buff who also loves python.' />
        <meta property='twitter:image' content='https://raw.githubusercontent.com/accodes21/my-portfolio/master/preview.png' />
        <meta property='twitter:url' content='https://aaryachopkar.vercel.app/' />
      </head>
      <body className={inter.className}>{children} <Analytics /></body>
    </html>
  )
}
