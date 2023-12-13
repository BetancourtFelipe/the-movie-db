'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from './page.module.scss';

export default function Movies() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    async function fetchPopularMovies() {
      const url = 'https://api.themoviedb.org/3/movie/popular';

      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE}`,
        },
      };

      console.log('111', popularMovies);

      try {
        const response = await fetch(url, options);
        const json = await response.json();
        setPopularMovies(json.results); // Store the array of movies, assuming "results" contains the movies
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    }

    async function fetchTopRatedMovies() {
      const url = 'https://api.themoviedb.org/3/movie/top_rated';

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
        setTopRatedMovies(json.results); // Store the array of movies
      } catch (error) {
        console.error('Error fetching top-rated movies:', error);
      }
    }

    async function fetchUpcomingMovies() {
      const url = 'https://api.themoviedb.org/3/movie/upcoming';

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
        setUpcomingMovies(json.results); // Store the array of movies
      } catch (error) {
        console.error('Error fetching upcoming movies:', error);
      }
    }

    fetchPopularMovies();
    fetchTopRatedMovies();
    fetchUpcomingMovies();
  }, []);

  return (
    <main className={styles.mainMovies}>
      <section className={styles.popularMovies}>
        <h2>Popular Movies</h2>
        <div>
          <div className={styles.popularMoviesCard}>
            {popularMovies.map((movie) => (
              <div key={`movie-${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={movie.title}
                  width={200}
                  height={300}
                />
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.topRatedMovies}>
        <div className={styles.topRatedMoviesCard}>
          <h2>Top Rated Movies</h2>
          {topRatedMovies.map((movie) => (
            <div key={`movie-${movie.id}`}>
              <h2>{movie.title}</h2>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
                width={200}
                height={300}
              />
            </div>
          ))}
        </div>
      </section>
      <section className={styles.upcommingMovies}>
        <div className={styles.upcomingMoviesCard}>
          <h2>Upcoming Movies</h2>
          {upcomingMovies.map((movie) => (
            <div key={`movie-${movie.id}`}>
              <h2>{movie.title}</h2>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
                width={200}
                height={300}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
