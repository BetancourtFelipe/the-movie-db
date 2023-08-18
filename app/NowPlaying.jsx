'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from './page.module.scss';

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

  console.log(movieData);

  return (
    <main className={styles.main}>
      <section>
        <h2>Now Playing</h2>
        <div>
          {movieData.map((movie) => (
            <div key={movie.id}>
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
              <p>{movie.vote_average}</p>
              <Image
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
                width={300}
                height={300}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
