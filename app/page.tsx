// import MovieById from './MovieById';
import NowPlaying from './NowPlaying';
import styles from './page.module.scss';
import PersonList from './PersonList';

export default function HomePage() {
  return (
    <main className={styles.main}>
      <section className={styles.sectionHeader}>
        <div>
          <div>
            <h1 className={styles.landingHeader}>
              Welcome to The Movie Database
            </h1>
            <br />
            <p className={styles.introHeader}>
              Millions of Movies, TV shows and people to discover. <br />
              Explore now.
            </p>
          </div>
          <div className={styles.searchSection}>
            <input className={styles.searchInput} placeholder="Search" />
            <button className={styles.searchButton}>Search</button>
          </div>
        </div>
      </section>
      <section className={styles.nowPlayingField}>
        <h2>Now Playing</h2>
        <div>
          <NowPlaying />
        </div>
      </section>
      <section className={styles.personField}>
        <div>
          <h2>Actors</h2>
          <PersonList />
        </div>
      </section>
      <section>{/* <MovieById /> */}</section>
    </main>
  );
}
