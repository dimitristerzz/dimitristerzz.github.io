import "../globals.css";

export const metadata = {
  title: 'Terms of Service - GrooveShare',
  description: 'Review the terms and conditions governing the use of GrooveShare.',
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
