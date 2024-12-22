import styles from "../../categories/AddCategoryForm/AddCategoryForm.module.css";
import FormError from "../../../ui/FormError/FormError";
import addItemStyles from "./AddItemForm.module.css";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import useSaveItems from "../useSaveItem";

function AddItemForm({ onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // category id from url params
  const { id } = useParams();

  const { isAddingItem, addNewItem } = useSaveItems();

  function onSubmit(data) {
    if (!data) return;
    const createdItem = { ...data, categoryId: id, image: data.image[0] };
    // console.log(createdItem.image[0]);
    addNewItem(createdItem);
    onClose();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.header}>
        <h2>Add new item</h2>
      </div>

      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Item name"
          {...register("name", { required: "Name is required" })}
        />
        {errors?.name && <FormError errMessage={errors.name.message} />}
      </div>
      <div className={styles.inputContainer}>
        <input
          className={addItemStyles.description}
          type="text"
          placeholder="Item description"
          {...register("description", {
            maxLength: { value: 70, message: "Description is to long" },
          })}
        />
        {errors?.description && (
          <FormError errMessage={errors.description.message} />
        )}
      </div>
      <div className={styles.inputContainer}>
        <input
          type="decimal"
          placeholder="Item price"
          {...register("price", {
            required: "Price is required",
            validate: (value) => {
              if (value <= 0.1) return "Value must be bigger than 0.1€";
              return true;
            },
          })}
        />
        {errors?.price && <FormError errMessage={errors.price.message} />}
      </div>
      <label className={styles.fileLabel} htmlFor="fileImage">
        Upload image
      </label>
      <input
        id="fileImage"
        type="file"
        accept="image/*"
        placeholder="Category name"
        {...register("image")}
      />

      <button disabled={isAddingItem} className={styles.submit} type="submit">
        Save
      </button>
    </form>
  );
}

export default AddItemForm;
