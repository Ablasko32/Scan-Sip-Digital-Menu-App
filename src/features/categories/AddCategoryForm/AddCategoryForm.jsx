import useUserLocationAndCategories from "../useUserLocationAndCategories";
import FormError from "../../../ui/FormError/FormError";
import useAddNewCategory from "../useAddNewCategory";
import useUpdateCategory from "../useUpdateCategory";
import styles from "./AddCategoryForm.module.css";
import useGetUser from "../../auth/useGetUser";
import { useForm } from "react-hook-form";

function AddCategoryForm({ onClose, item = null }) {
  // CHECK IS EDIT SESSION OR ADD SESSION
  const isEditSession = item !== null; //if edit true
  // console.log(isEditSession, item);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { userID } = useGetUser();
  const { data: locationData } = useUserLocationAndCategories(userID);
  const { isCreatingCategory, createCategory } = useAddNewCategory(
    locationData.id,
  );

  // if edit session is going zo be used
  const { isUpdatingCategory, updateCategoryMutation } = useUpdateCategory();

  function onSubmit(data) {
    if (!data) return;
    if (errors.length) {
      console.error(errors);
    }
    // console.log(data);
    // IF NOT EDIT
    if (!isEditSession) {
      createCategory(data);
    } else {
      updateCategoryMutation({ data: data, categoryID: item.id });
    }

    onClose();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.header}>
        <h2>Add new category</h2>
      </div>

      <input
        defaultValue={item?.name}
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
        disabled={isCreatingCategory || isUpdatingCategory}
        type="submit"
        className={styles.submit}
      >
        Save
      </button>
    </form>
  );
}

export default AddCategoryForm;
