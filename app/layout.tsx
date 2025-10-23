export const metadata = {
  title: 'LearnAI Platform - FFT Cognitive Foundation',
  description: 'Plateforme éducationnelle avec agent IA personnalisé pour accompagnement apprentissage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
