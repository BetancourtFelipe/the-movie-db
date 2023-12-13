import styles from './LoginForm.module.scss';

export default function LoginForm() {
  return (
    <form>
      <div>
        <label>
          <br />
          <input
            className={styles.loginFormInput}
            placeholder="username"
            type="username"
            // onChange={(event) => setUsername(event.currentTarget.value)}
          />
        </label>
        <br />
        <label>
          <br />
          <input
            className={styles.loginFormInput}
            placeholder="password"
            type="password"
            // onChange={(event) => setPassword(event.currentTarget.value)}
          />
        </label>
        <br />
        <br />
        <button className={styles.loginButton}>Login</button>
      </div>
    </form>
  );
}
