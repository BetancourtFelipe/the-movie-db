'use client';

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
        <div>
          <h1>Popular Movies</h1>
          <ul>
            {popularMovies.map((movie) => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        </div>
      </section>
      <section>
        <div>
          <h1>Top Rated Movies</h1>
          <ul>
            {topRatedMovies.map((movie) => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        </div>
      </section>
      <section>
        <div>
          <h1>Upcoming Movies</h1>
          <ul>
            {upcomingMovies.map((movie) => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
