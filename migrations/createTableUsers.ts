import { Sql } from 'postgres';

export type User = {
  id: number;
  username: string;
  // Omit passwordHash for security
};
