export default function LogInForm() {
  return (
    <div>
      <div>
        <label>
          username:
          <br />
          <input
          // onChange={(event) => setUsername(event.currentTarget.value)}
          />
        </label>
        <br />
        <label>
          password:
          <br />
          <input
            type="password"
            // onChange={(event) => setPassword(event.currentTarget.value)}
          />
        </label>
        <br />
        <br />
        <button>Login</button>
      </div>
    </div>
  );
}
