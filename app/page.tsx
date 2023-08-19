// import MovieById from './MovieById';
import NowPlaying from './NowPlaying';
import styles from './page.module.scss';
import PersonList from './PersonList';

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
        <h2>Now Playing</h2>
        <div>
          <NowPlaying />
        </div>
      </section>
      <section>
        <div>
          <PersonList />
        </div>
      </section>
      <section>{/* <MovieById /> */}</section>
    </main>
  );
}
