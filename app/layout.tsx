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
                <div className={styles.dropDown}>
                  Movies
                  <div className={styles.dropDownContent}>
                    <a>1</a>
                    <a>2</a>
                    <Link href="/rated" />
                  </div>
                </div>
                <Link className={styles.navLink} href="/tv-shows">
                  TV-Shows
                </Link>
                <Link className={styles.navLink} href="/people">
                  People
                </Link>
                <Link className={styles.navLink} href="/login">
                  Login
                </Link>
                <Link className={styles.navLink} href="/register">
                  Register
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
