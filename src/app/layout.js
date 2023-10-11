import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vitamin C | Reward Token on Core',
  description: 'Vitamin C is a reward token that offers an enticing incentive structure with multiple P2E games. By holding $VITA, users can unlock a host of rewarding experiences and opportunities within the ecosystem. Vitamin C prioritizes the strength of its community. Focused on transparency, collaboration, and shared success, the project aims to cultivate a strong bond among community members, creating an environment where everyone can thrive.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
