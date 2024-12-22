import LoginForm from "../../features/auth/LoginForm/LoginForm";
import styles from "./Login.module.css";

function Login() {
  return (
    <div className={styles.loginContainer}>
      <LoginForm />
    </div>
  );
}

export default Login;
