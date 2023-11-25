'use client';

import { useState } from 'react';

export default function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <div>
        <label>
          username <br />
          <input
            value={username}
            onChange={(event) => setUsername(event.currentTarget.value)}
          />
        </label>
        <br />
        <label>
          password: <br />
          <input
            value={password}
            type="password"
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
        </label>
        <br />
        <br />
        <button
          onClick={async () => {
            await fetch('/api/register', {
              method: 'POST',
              body: JSON.stringify({ username: username, password: password }),
            });
          }}
        >
          Register
        </button>
      </div>
    </form>
  );
}
