import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';
import Navbar from '@/src/shared/Navbar';
import Footer from '@/src/shared/Footer';
import Providers from '@/src/provider/Provider';
import { Toaster } from 'react-hot-toast';

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Kick',
  description: 'Kicks website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.className} antialiased`}>
        <Providers>
          <Toaster position="top-center" />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
