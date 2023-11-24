'use client';

// import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from './PersonList.module.scss';

export default function PersonList() {
  const [personList, setPersonList] = useState([]);

  useEffect(() => {
    const url = 'https://api.themoviedb.org/3/person/popular';

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE}`,
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setPersonList(json.results))
      .catch((err) => console.error('error:', err));
  }, []);

  useEffect(() => {
    const url = 'https://api.themoviedb.org/3/trending/person/day';

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE}`,
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setPersonList(json.results))
      .catch((err) => console.error('error:', err));
  }, []);

  console.log(personList);

  return (
    <main>
      <section>
        <div>
          <div className={styles.personListBox}>
            {personList.map((person) => (
              <div key={person.id}>
                <img
                  src={`https://image.tmdb.org/t/p/original${person.profile_path}`}
                  alt={person.title}
                  width={200}
                  height={300}
                />
                <h3>{person.name}</h3>
                <p className={styles.popularityField}>
                  {person.popularity.toFixed(1)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
