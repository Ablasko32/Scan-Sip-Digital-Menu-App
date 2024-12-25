import styles from "../../../pages/StartingWizard/StartingWizard.module.css";

function WizardSecondPart({ register }) {
  return (
    <>
      {" "}
      <div className={styles.inputContainer}>
        <label className={styles.fileLabel} htmlFor="workHours">
          Your work hours
        </label>
        <input
          id="workHours"
          type="text"
          placeholder="MON-FRI 8-23, SAT-10-03, SUN-CLOSED"
          {...register("workingHours", { required: "Work Hours are required" })}
        />
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
      </div>
    </>
  );
}

export default WizardSecondPart;
