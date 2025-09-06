export const metadata = {
  
  icons: {
    icon: '/assets/favicon.svg',
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