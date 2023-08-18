'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from './page.module.scss';

export default function MovieById() {
  const [movieById, setMovieById] = useState([]);
  const [credits, setCredits] = useState({ cast: [] });

  useEffect(() => {
    async function fetchMovieData() {
      const url = 'https://api.themoviedb.org/3/movie/976573';

      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE}`,
        },
      };

      try {
        const response = await fetch(url, options);
        const json = await response.json();
        setMovieById(json); // Store the entire response object
      } catch (error) {
        console.error('Error:', error);
      }
    }

    async function fetchCredits() {
      const url = 'https://api.themoviedb.org/3/movie/976573/credits';

      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmRiNDYzZDA3YmFmOGYxOWU5ZmIyODZlYmJlYWQ1MCIsInN1YiI6IjY0ZGNmNzFlYTNiNWU2MDBlMjljMTFlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e_GZfJFnUS3Q8gBpMoEI8LrVNgEwGZVemW_w3NYUEqE',
        },
      };

      try {
        const response = await fetch(url, options);
        const json = await response.json();
        setCredits(json); // Store the entire response object
      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchMovieData();
    fetchCredits();
  }, []);

  console.log('rrrrrr', credits);

  return (
    <main className={styles.main}>
      <section>
        <h2>Movie By Id</h2>
        <div>
          <div>
            <h3>{movieById.original_title}</h3>
            <p>{movieById.overview}</p>
            <p>{movieById.cast}</p>
            <Image
              src={`https://image.tmdb.org/t/p/original/${movieById.poster_path}`}
              alt={movieById.title}
              width={300}
              height={300}
            />
          </div>
        </div>
      </section>
      <section>
        <div>
          <div>
            {credits.cast.map((cast) => (
              <div key={cast.id}>
                <h3>{cast.name}</h3>
                <p>Character: {cast.character}</p>
                <Image
                  src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
                  alt={credits.name}
                  width={300}
                  height={300}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
