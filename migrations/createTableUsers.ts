import { Sql } from 'postgres';

export type User = {
  id: number;
  username: string;
  // Omit passwordHash for security
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE
      users (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        username VARCHAR(100) NOT NULL,
        password_hash VARCHAR(100) NOT NULL
      )
  `;
}
