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
          {...register("workingHours", {
            required: "Work Hours are required",
            maxLength: {
              value: 35,
              message: "Max lenght of working hours is 35",
            },
          })}
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
          {...register("address", {
            required: "Address is required",
            maxLength: {
              value: 40,
              message: "Max lenght of address is 40",
            },
            minLength: {
              value: 5,
              message: "Addres too short",
            },
          })}
        />
        {errors?.address && <FormError errMessage={errors.address.message} />}
      </div>
      <div className={styles.inputContainer}>
        <label className={styles.fileLabel} htmlFor="description">
          Your location description
        </label>
        <textarea
          rows={3}
          id="description"
          type="text"
          placeholder="A fresh new place in town...etc"
          {...register("description", {
            required: "Description is required",
            maxLength: {
              value: 130,
              message: "Max lenght of description is 130",
            },
            minLength: {
              value: 15,
              message: "Description too short",
            },
          })}
        />
        {errors?.description && (
          <FormError errMessage={errors.description.message} />
        )}
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="wifi" className={styles.fileLabel}>
          Wifi password?
        </label>
        <input
          id="wifi"
          type="text"
          placeholder="Wifi"
          {...register("wifiPassword", {
            maxLength: {
              value: 30,
              message: "Max lenght of wifi password is 30",
            },
          })}
        />
        {errors?.wifiPassword && (
          <FormError errMessage={errors.wifiPassword.message} />
        )}
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="contact" className={styles.fileLabel}>
          Contact info? (email or phone)
        </label>
        <input
          id="contact"
          type="text"
          placeholder="+3859978xx841"
          {...register("contact", {
            maxLength: {
              value: 50,
              message: "Max lenght of contact info is 50",
            },
          })}
        />
        {errors?.contact && <FormError errMessage={errors.contact.message} />}
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="socialLink" className={styles.fileLabel}>
          Socials link?
        </label>
        <input
          id="socialLink"
          type="text"
          placeholder="https://xxxxx"
          {...register("socialLink")}
        />
      </div>
    </>
  );
}

export default WizardSecondPart;
