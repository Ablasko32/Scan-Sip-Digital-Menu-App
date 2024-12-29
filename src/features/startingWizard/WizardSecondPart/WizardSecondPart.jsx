import styles from "../../../pages/StartingWizard/StartingWizard.module.css";
import FormError from "../../../ui/FormError/FormError";
import { useFormContext } from "react-hook-form";

function WizardSecondPart() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      {" "}
      <div className={styles.inputContainer}>
        <label className={styles.fileLabel} htmlFor="workHours">
          Your work hours
        </label>
        <input
          autoFocus
          id="workHours"
          type="text"
          placeholder="MON-FRI 8-23, SAT-10-03, SUN-CLOSED"
          {...register("workingHours", { required: "Work Hours are required" })}
        />
        {errors?.workingHours && (
          <FormError errMessage={errors.workingHours.message} />
        )}
      </div>
      <div className={styles.inputContainer}>
        <label className={styles.fileLabel} htmlFor="address">
          Your addres
        </label>
        <input
          id="address"
          type="text"
          placeholder="Addres example"
          {...register("address", { required: "Address is required" })}
        />
        {errors?.address && <FormError errMessage={errors.address.message} />}
      </div>
      <div className={styles.inputContainer}>
        <label className={styles.fileLabel} htmlFor="description">
          Your location description
        </label>
        <input
          id="description"
          type="text"
          placeholder="A fresh new place in town...etc"
          {...register("description", { required: "Description is required" })}
        />
        {errors?.description && (
          <FormError errMessage={errors.description.message} />
        )}
      </div>
    </>
  );
}

export default WizardSecondPart;