import LoaderError from "../../../ui/LoaderError/LoaderError";
import CategoryItem from "../CategoryItem/CategoryItem";
import styles from "./CategoriesList.module.css";
import Loader from "../../../ui/Loader/Loader";
import useCategories from "./useCategories.js";

function CategoriesList() {
  const { categories, categoriesError, isLoadingCategories } = useCategories();

  if (isLoadingCategories) return <Loader />;

  if (categoriesError)
    return <LoaderError ErrMessage={categoriesError.message} />;
  console.log(categories);

  return (
    <ul className={styles.categoryList}>
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
    </ul>
  );
}

export default CategoriesList;
