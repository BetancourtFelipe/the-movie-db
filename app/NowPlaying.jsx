'use client';

// import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from './NowPlaying.module.scss';

export default function NowPlaying() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const url =
      'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE}`,
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setMovieData(json.results))
      .catch((err) => console.error('error:', err));
  }, []);

  return (
    <main>
      <section>
        <div>
          <div className={styles.movieBox}>
            {movieData.map((movie) => (
              <div key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={movie.title}
                  width={200}
                  height={300}
                  className={styles.NowPlayingImage}
                />
                <p className={styles.voteField}>
                  {movie.vote_average.toFixed(1)}
                </p>
                <h3>{movie.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
