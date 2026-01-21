import './styles/globals.css'

export const metadata = {
  title: 'Restaurant App',
  description: 'Find and filter restaurants',
}

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <body>
        <header style={{padding: '1rem', background: '#333', color: 'white', marginBottom: '2rem'}}>
          <h1>Restaurant Finder</h1>
        </header>
        <main style={{ padding: '0 1rem' }}>
          {children}
        </main>
      </body>
    </html>
  )
}