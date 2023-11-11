
//have a basic layout for the apps

import '../globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
          <div className='w-screen h-screen bg-white text-slate-900'>
                  {children}
          </div>
  )
}
