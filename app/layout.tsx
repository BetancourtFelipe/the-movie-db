import './globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Movie DataBase',
  description: 'The Movie Data Base',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {' '}
        <header>
          <nav>
            <Link href="/">TMDB</Link>
            <Link href="/movies">Movies</Link>
            <Link href="/tv-shows">TV-Shows</Link>
            <Link href="/people">People</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
