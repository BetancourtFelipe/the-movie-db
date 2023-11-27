import { cache } from 'react';
import { sql } from './connect';

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
