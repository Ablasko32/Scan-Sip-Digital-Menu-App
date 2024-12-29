import styles from "../../../pages/StartingWizard/StartingWizard.module.css";
import { useFormContext } from "react-hook-form";

function WizardThirdPart() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={styles.inputContainer}>
      <label className={styles.fileLabel} htmlFor="workHours">
        Pick your menu theme
      </label>
      <select autoFocus {...register("theme")}>
        <option value="neonPurple">Neon purple</option>
        <option value="whiteMinimalism">White minimalism</option>
      </select>
    </div>
  );
}

export default WizardThirdPart;