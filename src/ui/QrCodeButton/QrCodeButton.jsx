import controlStyles from "../Controls/Controls.module.css";
import { HiOutlineQrCode } from "react-icons/hi2";
import QRCode from "qrcode";

function QrCodeButton() {
  async function generateQrCode() {
    const userAgrees = window.confirm(
      "You are about to generate a QR code,do you want to continiue?",
    );
    if (userAgrees) {
      try {
        const qrCodeData = await QRCode.toDataURL(
          "http://192.168.0.17:5173/menus/location/1",
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
