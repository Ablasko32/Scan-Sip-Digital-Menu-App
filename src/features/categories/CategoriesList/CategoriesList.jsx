import LoaderError from "../../../ui/LoaderError/LoaderError";
import { useAuthContext } from "../../auth/AuthContext.jsx";
import CategoryItem from "../CategoryItem/CategoryItem";
import styles from "./CategoriesList.module.css";
import Loader from "../../../ui/Loader/Loader";
import useCategories from "./useCategories.js";

function CategoriesList() {
  const { userID } = useAuthContext();
  console.log(userID);

  const { categories, categoriesError, isLoadingCategories } = useCategories();

  if (isLoadingCategories) return <Loader />;

  if (categoriesError)
    return <LoaderError ErrMessage={categoriesError.message} />;
  // console.log(categories);

  return (
    <ul className={styles.categoryList}>
      {categories.map((category) => {
        return <CategoryItem key={category.id} item={category} />;
      })}
    </ul>
  );
}

export default CategoriesList;
