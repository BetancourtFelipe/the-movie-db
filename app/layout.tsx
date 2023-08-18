// import './globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import styles from './layout.module.scss';

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
        <header>
          <div className={styles.wrapperStyles}>
            <div className={styles.topNavigationStyles}>
              <nav className={styles.navigationMenuStyles}>
                <Link className={styles.navLink} href="/">
                  TMDB
                </Link>
                <Link className={styles.navLink} href="/movies">
                  Movies
                </Link>
                <Link className={styles.navLink} href="/tv-shows">
                  TV-Shows
                </Link>
                <Link className={styles.navLink} href="/people">
                  People
                </Link>
              </nav>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
