import styles from "./MenuFooter.module.css";

function MenuFooter() {
  return (
    <footer className={styles.menuFooter}>
      <p className={styles.footerDisclaimer}>Disclaimer PDV</p>
      <p>
        Powered by <span className={styles.menuLogo}>Scan&Sip</span>
      </p>
    </footer>
  );
}

export default MenuFooter;
