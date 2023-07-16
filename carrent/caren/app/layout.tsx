import Navbar from '@/compoents/Navbar'
import './globals.css'
import Footer from '@/compoents/Footer'

export const metadata = {
  title: 'Car Rent',
  description: 'Great car rent Web app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar/>
        {children}
        <Footer/>
      
      </body>
    </html>
  )
}
