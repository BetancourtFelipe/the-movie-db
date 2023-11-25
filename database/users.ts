import { cache } from 'react';
import { sql } from './connect';

/*
export const users = [
  { id: 1, user_name: 'user1', password: 'userpwd1' },
  { id: 2, user_name: 'user2', password: 'userpwd2' },
  { id: 3, user_name: 'user3', password: 'userpwd3' },
  { id: 4, user_name: 'user4', password: 'userpwd4' },
  { id: 5, user_name: 'user5', password: 'userpwd5' },
];

export function getUserById1(id: number) {
  return users.find((user) => user.id === id);
}
*/

export type User = {
  id: number;
  username: string;
};

export const createUser = cache(
  async (username: string, password_hash: string) => {
    const [user] = await sql<User[]>`
      INSERT INTO
        users (
          username,
          password_hash
        )
      VALUES
        (
          ${username},
          ${password_hash}
        ) RETURNING id,
        username
    `;
    return user;
  },
);

export const getUsers = cache(async () => {
  const users = await sql<User[]>`
    SELECT
      id,
      username
    FROM
      users
  `;
  return users;
});

export const getUserByUsername = cache(async (username: string) => {
  const [user] = await sql<User[]>`
    SELECT
      id,
      username
    FROM
      users
    WHERE
      users.username = ${username}
  `;
  return user;
});

export type UserWithPasswordHash = {
  id: number;
  username: string;
  password_hash: string;
};

export const createUserWithPasswordHash = cache(
  async (username: string, password_hash: string) => {
    const [user] = await sql<UserWithPasswordHash[]>`
      INSERT INTO
        users (
          username,
          password_hash
        )
      VALUES
        (
          ${username},
          ${password_hash}
        ) RETURNING id,
        username
    `;
    return user;
  },
);

export const getUsersWithPasswordHash = cache(async () => {
  const [user] = await sql<UserWithPasswordHash[]>`
    SELECT
      *
    FROM
      users
  `;
  return user;
});

export const getUserWithPasswordHashByUsername = cache(
  async (username: string) => {
    const users = await sql<UserWithPasswordHash[]>`
      SELECT
        *
      FROM
        users
      WHERE
        users.username = ${username}
    `;
    return users;
  },
);

/*
export const getUserById2 = cache(async (id: number) => {
  const [user] = await sql<User[]>`
    SELECT
      *
    FROM
      users
    WHERE
      id = ${id}
  `;
  return user;
});
*/
