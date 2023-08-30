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
        <meta name='keywords' content='Code, developer, JavaScript, typescript, web, web developer, web development, coding, developing, next, HTML, CSS, tailwind' />
        <meta property='og:title' content='Aarya Chopkar' />
        <meta property='og:description' content='Web Developer working on NextJS. Open Source buff who also loves python.' />
        <meta property='og:url' content='https://aaryachopkar.vercel.app/' />
        <meta property='og:type' content='website' />
        <meta name="twitter:card" content="summary" />
        <meta property='og:image' content='https://github.com/accodes21/my-portfolio/blob/master/preview.png' />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
