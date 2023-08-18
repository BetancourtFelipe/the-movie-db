import MovieById from './MovieById';
import Movies from './NowPlaying';
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <main className={styles.main}>
      <section>
        <div>
          <div>
            <h1>Welcome to The Movie Database</h1>
            <p>
              Millions of Movies, TV shows, and people to discover. Explore now.
            </p>
            <div>
              <input placeholder="Search" />
              <button>Search</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Movies />
      </section>
      <section>
        <MovieById />
      </section>
    </main>
  );
}
