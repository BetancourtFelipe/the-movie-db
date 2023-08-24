'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

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
    <main>
      <section>
        <h1>Popular Movies</h1>
        <div>
          <div>
            {popularMovies.map((movie) => (
              <div key={`movie-${movie.id}`}>
                <p>{movie.title}</p>
                <p>{movie.overview}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div>
          <h1>Top Rated Movies</h1>

          {topRatedMovies.map((movie) => (
            <div key={`movie-${movie.id}`}>{movie.title}</div>
          ))}
        </div>
      </section>
      <section>
        <div>
          <h1>Upcoming Movies</h1>
          {upcomingMovies.map((movie) => (
            <div key={`movie-${movie.id}`}>{movie.title}</div>
          ))}
        </div>
      </section>
    </main>
  );
}