import styles from "../../categories/AddCategoryForm/AddCategoryForm.module.css";
import { updateLocation } from "../../../services/locationsApi";
import FormError from "../../../ui/FormError/FormError";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
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

  const { isPending, mutate } = useMutation({
    mutationFn: (locationID, locationData) =>
      updateLocation(locationID, locationData),
    onSuccess: () => {
      toast.success("Location updated");
      onClose();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  function onSubmit(data) {
    // console.log("DATA HERE:", data);
    mutate({ id: locationID, data: data });
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

        <input defaultValue={address} type="text" placeholder="Address" />
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

        <label className={styles.fileLabel} htmlFor="fileImage">
          Upload image
        </label>
        <input
          {...register("image")}
          id="fileImage"
          type="file"
          accept="image/*"
        />

        <button disabled={isPending} className={styles.submit} type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default LocationSettings;
