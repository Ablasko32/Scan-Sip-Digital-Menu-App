import styles from "../../categories/AddCategoryForm/AddCategoryForm.module.css";
import useSaveLocationSettings from "../useSaveLocationSettings";
import FormError from "../../../ui/FormError/FormError";
import { useForm } from "react-hook-form";

// import styles from "./LocationSettings.module.css";

function LocationSettings({ locationData, onClose }) {
  const {
    name,
    description,
    workingHours,
    address,
    id: locationID,
  } = locationData;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { name, description, workingHours, address },
  });

  const { isSavingSettings, saveSettings } = useSaveLocationSettings();

  function onSubmit(data) {
    // console.log("DATA HERE:", data);
    saveSettings({ id: locationID, data: data });
    onClose();
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.header}>
          <h2>Update location data</h2>
        </div>
        <div>
          {" "}
          <input
            type="text"
            placeholder="Category name"
            {...register("name", { required: "Name is required" })}
          />
          {errors?.name && <FormError errMessage={errors.name.message} />}
        </div>

        <input
          type="text"
          placeholder="Address"
          {...register("address", { required: "Address is required" })}
        />
        {errors?.address && <FormError errMessage={errors.address.message} />}
        {/* MUST GO TO TEXT AREA !!! */}
        <div>
          {" "}
          <input
            type="text"
            placeholder="Description"
            {...register("description", {
              required: "Description is required",
            })}
          />
          {errors?.description && (
            <FormError errMessage={errors.description.message} />
          )}
        </div>
        <div>
          {" "}
          <input
            type="text"
            placeholder="Working Hours"
            {...register("workingHours", {
              required: "Working hours are required",
            })}
          />
          {errors?.workingHours && (
            <FormError errMessage={errors.description.workingHours} />
          )}
        </div>
        {/* MENU THEME */}
        <div className={styles.inputContainer}>
          <select {...register("theme")}>
            <option value="neonPurple">Neon purple</option>
            <option value="whiteMinimalism">White minimalism</option>
          </select>
        </div>

        <label className={styles.fileLabel} htmlFor="fileImage">
          Upload image
        </label>
        <input
          {...register("image")}
          id="fileImage"
          type="file"
          accept="image/*"
        />

        <button
          disabled={isSavingSettings}
          className={styles.submit}
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default LocationSettings;
