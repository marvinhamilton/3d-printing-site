/* RootLayout.tsx */
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata = {
  title: '3d-Printing',
  description: 'Demo Printing Site',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </ html>
  )
}
