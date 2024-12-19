import styles from "./AppLayout.module.css";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function AppLayout() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.outlet}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
