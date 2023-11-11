import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'


/* import Sidebar1 from './components/sidebar1';
import Sidebar2 from './components/sidebar2'; */

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'App1',
  description: 'Organize different divs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
          {/* <Sidebar1 className="sidebar1" /> */}

          <div className='container1'>
                  {children}
          </div>

          {/* <Sidebar2 className="sidebar2" /> */}

      </body>
    </html>
  )
}
