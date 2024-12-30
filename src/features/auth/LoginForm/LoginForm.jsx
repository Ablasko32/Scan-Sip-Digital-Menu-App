import {
  LiaCocktailSolid,
  LiaCoffeeSolid,
  LiaPizzaSliceSolid,
} from "react-icons/lia";
import FormError from "../../../ui/FormError/FormError";
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
          <LiaCocktailSolid className={styles.iconSvg} />
          <CiBeerMugFull className={styles.iconSvg} />
          <LiaCoffeeSolid className={styles.iconSvg} />
          <LiaPizzaSliceSolid className={styles.iconSvg} />
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

          <button
            type="submit"
            disabled={isLoggingIn}
            className={styles.submit}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
