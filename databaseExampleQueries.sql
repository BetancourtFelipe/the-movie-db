
-- This file is only my notes, changing
-- this file doesn't change anything in
-- the database

-- Create users table
CREATE TABLE users (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user_name varchar(50) NOT NULL,
  password varchar(50) NOT NULL
);

-- Insert some users (C in CRUD - Create)
INSERT INTO users
  (user_name, password)
VALUES
  ( 'user1', 'userpwd1' ),
  ( 'user2', 'userpwd2' ),
  ( 'user3', 'userpwd3' ),
  ( 'user4', 'userpwd4' ),
  ( 'user5', 'userpwd5' );

-- Read some users (R in CRUD - Read)
SELECT * FROM users;
