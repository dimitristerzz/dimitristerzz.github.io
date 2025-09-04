import './globals.css'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: 'no',
}

export const metadata = {
  title: 'GrooveShare: Your Daily Groove Companion',
  description: 'Embrace the unexpected and share your musical journey with GrooveShare.',
  openGraph: {
    type: 'website',
    images: [
      {
        url: 'https://groooveshare.com/assets/logo.png',
      },
    ],
  },
  icons: {
    icon: 'https://groooveshare.com/assets/favicon.ico',
    apple: 'https://groooveshare.com/assets/favicon.ico',
  },
  other: {
    'http-equiv': 'X-UA-Compatible',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}