import useThemePicker from "../../../pages/Menus/useThemePicker";
import styles from "./MenuFooter.module.css";
import Modal from "../../../ui/modal/Modal";
import { useState } from "react";

function MenuFooter() {
  const [isModalOpen, setModalOpen] = useState(false);

  function handleOpen() {
    setModalOpen((prev) => !prev);
  }

  const themeStyles = useThemePicker();

  const scansipUrl = import.meta.env.VITE_SCAN_SIP_POINTER;

  return (
    <footer className={styles.menuFooter}>
      <p onClick={handleOpen} className={styles.footerDisclaimer}>
        Disclaimer VAT
      </p>
      <p>
        Powered by{" "}
        <span className={styles.menuLogo}>
          <a href={scansipUrl || ""}>Scan&Sip</a>
        </span>
      </p>
      {isModalOpen && (
        <Modal themeStyle={themeStyles} onClose={handleOpen}>
          <p className={themeStyles.disclaimer}>
            <span
              style={{
                color: "var(--brand-color-1)",
                fontSize: "1.6rem",
                fontWeight: "600",
              }}
            >
              Scan&Sip
            </span>{" "}
            provides tools for creating and sharing QR code menus. The accuracy
            of menu items, prices, descriptions, and applicable VAT/PDV is the
            sole responsibility of the business or individual managing the menu.
            Scan&Sip is not liable for any errors, omissions, or discrepancies
            in the information provided by menu owners. Please confirm all
            details directly with the respective business.
          </p>
        </Modal>
      )}
    </footer>
  );
}

export default MenuFooter;
