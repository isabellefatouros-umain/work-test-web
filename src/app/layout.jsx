export const metadata = {
  title: 'Min Restaurang App',
  description: 'Restaurang webbsida',
}

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  )
}
