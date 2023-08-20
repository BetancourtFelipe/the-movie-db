'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from './nowPlaying.module.scss';

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
                <h3>{movie.title}</h3>
                <Image
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={movie.title}
                  width={300}
                  height={300}
                />
                <p>{movie.vote_average}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
