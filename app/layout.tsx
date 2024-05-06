import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Connection from '@/components/Connection'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AutoDrive',
  description: 'website for tracking activity of automatic car',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`$${inter.className} ` }>
        <Navbar/>
        <main className='flex  items-center justify-center' >
          <Connection/>
          <div>
          {children}
          </div>
          </main>
      </body>
    </html>
  )
}
