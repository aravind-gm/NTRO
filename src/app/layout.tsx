import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI/ML Engineer & Full Stack Developer | Portfolio',
  description:
    'Premium portfolio of an AI/ML engineer and full-stack developer. Specializing in Python, FastAPI, React, Next.js, and cloud technologies.',
  keywords: [
    'AI/ML Engineer',
    'Full Stack Developer',
    'Python',
    'React',
    'Next.js',
    'Machine Learning',
    'Portfolio',
  ],
  openGraph: {
    title: 'AI/ML Engineer & Full Stack Developer | Portfolio',
    description: 'Premium portfolio showcasing AI/ML and full-stack development projects',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' fill='%2300d9ff'>&lt;/&gt;</text></svg>" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
