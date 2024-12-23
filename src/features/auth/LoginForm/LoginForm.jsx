import { PiCoffeeThin, PiPizzaThin } from "react-icons/pi";
import FormError from "../../../ui/FormError/FormError";
import { LiaCocktailSolid } from "react-icons/lia";
import { CiBeerMugFull } from "react-icons/ci";
import styles from "./LoginForm.module.css";
import { useForm } from "react-hook-form";
import useLogin from "../useLogin";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { isLoggingIn, login } = useLogin();

  function onSubmit(data) {
    // console.log(data);
    // console.log(data);
    login(data);
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <h3>Scan&Sip</h3>
        <p>Welcome to new menu experience</p>
        <div className={styles.icons}>
          <LiaCocktailSolid size={15} />
          <CiBeerMugFull size={15} />
          <PiCoffeeThin size={15} />
          <PiPizzaThin size={15} />
        </div>
      </div>
      <div className={styles.cardBottom}>
        <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputContainer}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              autoComplete="email"
              {...register("email", { required: "Email is required" })}
            />
            {errors?.email && <FormError errMessage={errors.email.message} />}
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              {...register("password", { required: "Password is required" })}
            />
            {errors?.password && (
              <FormError errMessage={errors.password.message} />
            )}
          </div>

          <button disabled={isLoggingIn} className={styles.submit}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
