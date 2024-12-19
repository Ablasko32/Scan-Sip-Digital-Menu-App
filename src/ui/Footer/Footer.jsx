import styles from "./Footer.module.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className={styles.footer}>
      Copyright &copy;{year} Antonio Blašković
    </div>
  );
}

export default Footer;
