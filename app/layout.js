import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const poppins = Poppins({ 
  weight: ["500", "700", "900"],
  subsets: ['latin'] 
})

export const metadata = {
  title: 'Mi Rutina',
  description: 'Rutinas Personalizadas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />  
      </body>
    </html>
  )
}
