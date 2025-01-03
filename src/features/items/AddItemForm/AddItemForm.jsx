import styles from "../../categories/AddCategoryForm/AddCategoryForm.module.css";
import FormError from "../../../ui/FormError/FormError";
import addItemStyles from "./AddItemForm.module.css";
import { useParams } from "react-router-dom";
import useUpdateItem from "../useUpdateItem";
import { useForm } from "react-hook-form";
import useSaveItems from "../useSaveItem";
import PropTypes from "prop-types";

AddItemForm.propTypes = {
  onClose: PropTypes.func,
  item: PropTypes.object,
};
function AddItemForm({ onClose, item = null }) {
  // IS EDIT OR ADDING SESSION
  const isEditSession = item !== null; //true if edit

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // category id from url params
  const { id } = useParams();

  const { isAddingItem, addNewItem } = useSaveItems();
  const { isUpdatingItem, updateItemMutation } = useUpdateItem();

  function onSubmit(data) {
    if (!data) return;
    const createdItem = { ...data, categoryId: id };
    // console.log(createdItem.image[0]);
    if (!isEditSession) {
      addNewItem(createdItem);
    } else {
      updateItemMutation({ data: data, itemID: item.id });
    }

    onClose();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.header}>
        <h2>{isEditSession ? "Edit item data" : "Add new item"}</h2>
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <input
          id="name"
          defaultValue={item?.name}
          type="text"
          placeholder="Name Example"
          {...register("name", {
            required: "Name is required",
            maxLength: {
              value: 30,
              message: "Max lenght of name is 30",
            },
            minLength: {
              value: 3,
              message: "Name must be atleast 3 characters",
            },
          })}
        />
        {errors?.name && <FormError errMessage={errors.name.message} />}
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="description" className={styles.label}>
          Description
        </label>
        <textarea
          id="description"
          rows={2}
          defaultValue={item?.description}
          className={addItemStyles.description}
          type="text"
          placeholder="0.33, Italian"
          {...register("description", {
            maxLength: { value: 70, message: "Description is to long" },
          })}
        />
        {errors?.description && (
          <FormError errMessage={errors.description.message} />
        )}
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="price" className={styles.label}>
          Price
        </label>
        <input
          id="price"
          defaultValue={item?.price}
          type="decimal"
          placeholder="4.99"
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
      {isEditSession && (
        <div className={styles.inputContainer}>
          <label htmlFor="isSold" className={styles.label}>
            Is item sold out?
          </label>
          <select defaultValue={false} id="isSold" {...register("isSold")}>
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </select>
        </div>
      )}
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

      <button
        disabled={isAddingItem || isUpdatingItem}
        className={styles.submit}
        type="submit"
      >
        Save
      </button>
    </form>
  );
}

export default AddItemForm;
