import useUserLocationAndCategories from "../useUserLocationAndCategories";
import FormError from "../../../ui/FormError/FormError";
import { useAuthContext } from "../../auth/AuthContext";
import useAddNewCategory from "../useAddNewCategory";
import styles from "./AddCategoryForm.module.css";
import { useForm } from "react-hook-form";

function AddCategoryForm({ onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { userID } = useAuthContext();
  const { data: locationData } = useUserLocationAndCategories(userID);
  const { isCreatingCategory, createCategory } = useAddNewCategory(
    locationData.id,
  );

  function onSubmit(data) {
    if (!data) return;
    if (errors.length) {
      console.error(errors);
    }
    // console.log(data);
    createCategory(data);
    onClose();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.header}>
        <h2>Add new category</h2>
      </div>

      <input
        type="text"
        placeholder="Category name"
        {...register("name", {
          required: "The name is required",
          validate: (value) => {
            if (value.length < 3) return "Name must be atleast 3 characters";
          },
        })}
      />
      {errors?.name && <FormError errMessage={errors.name.message} />}
      {/* <input type="file" accept="image/*" placeholder="Category name" /> */}

      <button
        disabled={isCreatingCategory}
        type="submit"
        className={styles.submit}
      >
        Save
      </button>
    </form>
  );
}

export default AddCategoryForm;
