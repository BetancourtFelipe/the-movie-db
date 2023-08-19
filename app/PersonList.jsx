'use client';

// import Image from 'next/image';
import React, { useEffect, useState } from 'react';

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

  console.log(personList);

  return (
    <main>
      <section>
        <div>
          <div>
            {personList.map((person) => (
              <div key={person.id}>
                <h3>{person.name}</h3>
                {/* <Image
                  src={` https://api.themoviedb.org/3/person/976573/images`}
                  alt={person.title}
                  width={300}
                  height={300}
                /> */}
                <p>{person.popularity}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
