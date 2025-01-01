import styles from "./NotFound.module.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.notFound}>
        <h3>
          <span>404</span> Not Found!
        </h3>
        <Link to="/">Go back?</Link>
      </div>
    </div>
  );
}

export default NotFound;
