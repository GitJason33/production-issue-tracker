import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from "@/app/NavBar";
import { Theme } from "@radix-ui/themes"
import './globals.css';
import '@radix-ui/themes/styles.css';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Issue Tracker',
  description: 'create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          <NavBar/>

          <main className='p-5'>
            {children}
          </main>
        </Theme>
      </body>
    </html>
  )
}
