import styles from "../../categories/AddCategoryForm/AddCategoryForm.module.css";
import useSaveLocationSettings from "../useSaveLocationSettings";
import FormError from "../../../ui/FormError/FormError";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

// import styles from "./LocationSettings.module.css";

LocationSettings.propTypes = {
  locationData: PropTypes.object,
  onClose: PropTypes.func,
};

function LocationSettings({ locationData, onClose }) {
  const {
    name,
    description,
    workingHours,
    address,
    wifiPassword = null,
    contact = null,
    socialLink = null,
    id: locationID,
  } = locationData;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name,
      description,
      workingHours,
      address,
      wifiPassword,
      contact,
      socialLink,
    },
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
        <div className={styles.inputContainer}>
          <label htmlFor="name" className={styles.label}>
            Location name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Category name"
            {...register("name", { required: "Name is required" })}
          />
          {errors?.name && <FormError errMessage={errors.name.message} />}
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="address" className={styles.label}>
            Your address
          </label>
          <input
            id="address"
            type="text"
            placeholder="Address"
            {...register("address", { required: "Address is required" })}
          />
          {errors?.address && <FormError errMessage={errors.address.message} />}
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="description" className={styles.label}>
            Description
          </label>
          <textarea
            id="description"
            rows={4}
            placeholder="Description"
            {...register("description", {
              required: "Description is required",
            })}
          />
          {errors?.description && (
            <FormError errMessage={errors.description.message} />
          )}
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="workHours" className={styles.label}>
            Working hours
          </label>
          <input
            id="workHours"
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
          <label htmlFor="description" className={styles.label}>
            Pick a menu theme
          </label>
          <select {...register("theme")}>
            <option value="neonPurple">Neon purple</option>
            <option value="whiteMinimalism">White minimalism</option>
          </select>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="wifi" className={styles.label}>
            Wifi password?
          </label>
          <input
            id="wifi"
            type="text"
            placeholder="Wifi"
            {...register("wifiPassword")}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="contact" className={styles.label}>
            Contact info? (email or phone)
          </label>
          <input
            id="contact"
            type="text"
            placeholder="+3859978xx841"
            {...register("contact")}
          />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="socialLink" className={styles.label}>
            Socials link?
          </label>
          <input
            id="socialLink"
            type="text"
            placeholder="https://xxxxx"
            {...register("socialLink")}
          />
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
