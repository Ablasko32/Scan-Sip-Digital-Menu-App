import styles from "../../../pages/StartingWizard/StartingWizard.module.css";
import FormError from "../../../ui/FormError/FormError";
import { useFormContext } from "react-hook-form";

function WizardFirstPart() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      {" "}
      <div className={styles.inputContainer}>
        <label className={styles.fileLabel} htmlFor="name">
          Start by giving us location name
        </label>
        <input
          autoFocus
          id="name"
          type="text"
          placeholder="Coffe Example"
          {...register("name", {
            required: "Name is required",
            maxLength: { value: 37, message: "Max lenght of name is 37" },
          })}
        />
        {errors?.name && <FormError errMessage={errors.name.message} />}
        {errors?.image && <FormError errMessage={errors.image.message} />}
      </div>
      <div>
        {" "}
        <div>
          <label className={styles.imageLabel} htmlFor="fileImage">
            Upload image
          </label>
        </div>
        <input
          style={{ display: "none" }}
          id="fileImage"
          type="file"
          accept="image/*"
          placeholder="Category name"
          {...register("image", {
            validate: (file) => {
              if (file.length === 0) return "Image is required";
            },
          })}
        />
      </div>
    </>
  );
}

export default WizardFirstPart;
