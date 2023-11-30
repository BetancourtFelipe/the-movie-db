// import crypto from 'node:crypto';
// import { cookies } from 'next/headers';
// import { createSession } from '../../../../database/sessions';
// import { createUser, getUserByUsername } from '../../../../database/users';
// import { User } from '../../../../migrations/1687334782-createUsers';
// import { secureCookieOptions } from '../../../../util/cookies';

import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import {
  createUser,
  getUserByUsername,
  User,
} from '../../../../database/users';

type Error = {
  error: string;
};

export type RegisterResponseBodyPost =
  | {
      user: User;
    }
  | Error;

const userSchema = z.object({
  //zod checks min length
  username: z.string().min(5),
  password: z.string().min(5),
});

// 1. get the credentials from the body
export async function POST(
  request: NextRequest,
): Promise<NextResponse<RegisterResponseBodyPost>> {
  const body = await request.json();

  // console.log(body);

  const result = userSchema.safeParse(body);

  // 2. verify the user data and check that the name is not taken
  if (!result.success) {
    // zod sends details about the error
    // console.log(result.error);
    return NextResponse.json(
      {
        error:
          'username or password missing, username or password must contain at least 5 characters',
      },
      { status: 400 },
    );
  }

  console.log('query ', await getUserByUsername(result.data.username));

  if (await getUserByUsername(result.data.username)) {
    // zod sends details about the error
    // console.log(result.error);
    return NextResponse.json(
      {
        error: 'username is already taken, please choose a different username',
      },
      { status: 409 },
    );
  }

  // 3. hash the password
  const passwordHash = await bcrypt.hash(result.data.password, 10);

  // 4. store the credentials in the db
  const newUser = await createUser(result.data.username, passwordHash);

  if (!newUser) {
    // zod sends details about the error
    // console.log(result.error);
    return NextResponse.json(
      {
        error: 'Error creating the new user',
      },
      { status: 500 },
    );
  }

  return NextResponse.json({ user: newUser });
}

/*
  // console.log(result);

  // 5. Create a token
  const token = crypto.randomBytes(100).toString('base64');
  // 6. Create the session record

  const session = await createSession(token, newUser.id);

  if (!session) {
    return NextResponse.json(
      {
        error: 'Error creating the new session',
      },
      { status: 500 },
    );
  }

  // 7. Send the new cookie in the headers
  cookies().set({
    name: 'sessionToken',
    value: session.token,
    ...secureCookieOptions,
  });

  // 7. return the new user to the client
  return NextResponse.json({ user: newUser });
}
*/
