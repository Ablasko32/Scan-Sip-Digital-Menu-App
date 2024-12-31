import controlStyles from "../Controls/Controls.module.css";
import { HiOutlineQrCode } from "react-icons/hi2";
import PropTypes from "prop-types";
import QRCode from "qrcode";

QrCodeButton.propTypes = {
  id: PropTypes.number,
};
function QrCodeButton({ id }) {
  const currentUrl = window.location.href.split("/categories")[0];
  // console.log(currentUrl);

  async function generateQrCode() {
    const userAgrees = window.confirm(
      "You are about to generate a QR code,do you want to continiue?",
    );
    if (userAgrees) {
      try {
        const qrCodeData = await QRCode.toDataURL(
          `${currentUrl}/menus/location/${id}`,
        );
        if (!qrCodeData) {
          throw new Error("Error generating QR Code");
        }

        const tempLink = document.createElement("a");
        tempLink.href = qrCodeData;
        tempLink.download = "scan&sip.png";
        tempLink.click();
      } catch (err) {
        console.error(err.message);
      }
    }
  }

  return (
    <button onClick={generateQrCode} className={controlStyles.icon}>
      <HiOutlineQrCode color="#fff" size={30} />
    </button>
  );
}

export default QrCodeButton;
