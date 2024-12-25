import styles from "../../../pages/StartingWizard/StartingWizard.module.css";

function WizardFirstPart({ register }) {
  return (
    <>
      {" "}
      <div className={styles.inputContainer}>
        <label className={styles.fileLabel} htmlFor="name">
          Start by giving us location name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Coffe Example"
          {...register("name")}
        />
      </div>
      <label className={styles.imageLabel} htmlFor="fileImage">
        Upload image
      </label>
      <input
        style={{ display: "none" }}
        id="fileImage"
        type="file"
        accept="image/*"
        placeholder="Category name"
        {...register("image", { required: "Cover photo is required" })}
      />
    </>
  );
}

export default WizardFirstPart;
