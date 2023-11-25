import Link from 'next/link';
import LogInForm from './LoginForm';
import styles from './page.module.scss';

export default function LoginPage() {
  return (
    <main className={styles.mainLogin}>
      <section className={styles.loginCard}>
        <div>
          <h1>LogIn</h1>
        </div>
        <div>
          <LogInForm />
        </div>
      </section>
      <section>
        <div>
          <Link href="/register">
            <p>register</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
