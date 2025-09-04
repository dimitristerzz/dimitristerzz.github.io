import "../globals.css";

export const metadata = {
  title: 'Contact - GrooveShare',
  description: 'Have questions? We’re here to help — get in touch anytime!',
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
