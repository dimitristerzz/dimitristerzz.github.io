import "../globals.css";

export const metadata = {
  title: 'Privacy Policy - GrooveShare',
  description: 'Learn how we protect your data and respects your privacy.',
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
