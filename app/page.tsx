import styles from './page.module.scss';

export default function HomeLandingPage() {
  return (
    <main className={styles.main}>
      <section>
        <div>
          <div>
            <h1>Welcome to The Movie Data Base</h1>
            <p>
              Millions of Movies, TV shows and people to discover. Explore now.
            </p>
            <div>
              <input value="search" placeholder="Search" />
              <button>Search</button>
            </div>
          </div>
        </div>
      </section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
    </main>
  );
}
