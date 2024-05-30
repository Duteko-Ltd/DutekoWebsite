import { Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: {
    template: '%s - Pocket',
    default: 'Duteko - Peer-to-Peer delivery platform',
  },
  description:
    'we\'re revolutionizing the way things move across Europe. We\'re a peer-to-peer delivery platform that connects everyday people with the need to send something to reliable individuals already making similar journeys.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={clsx('bg-gray-50 antialiased', inter.variable)}>
      <body>{children}</body>
    </html>
  )
}
