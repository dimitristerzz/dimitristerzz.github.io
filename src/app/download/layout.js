import "../globals.css";

export const metadata = {
  title: 'Get GrooveShare - GrooveShare',
  description: 'Download the GrooveShare app for your device and start sharing music today.',
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
