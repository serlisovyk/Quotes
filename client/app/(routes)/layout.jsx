import localFont from 'next/font/local'
import { ThemeProvider } from 'next-themes'
import { ToastContainer } from 'react-toastify'
import Header from '@components/Header'
import QueryProvider from './query-provider'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata = {
  title: 'Quotes app',
  description: 'Frontend app for working with quotes API',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
          />
          <Header />
          <QueryProvider>
            <main className="container mx-auto p-4">{children}</main>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
