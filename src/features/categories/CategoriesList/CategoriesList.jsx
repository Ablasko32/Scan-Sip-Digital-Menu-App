import useUserLocationAndCategories from "../useUserLocationAndCategories.js";
import LoaderError from "../../../ui/LoaderError/LoaderError";
import CategoryItem from "../CategoryItem/CategoryItem";
import useGetUser from "../../auth/useGetUser.js";
import styles from "./CategoriesList.module.css";
import Loader from "../../../ui/Loader/Loader";
import { Navigate } from "react-router-dom";

function CategoriesList() {
  const { userID } = useGetUser();
  // console.log(userID);
  // moram dobiti lokaciju

  const {
    data: locationData,
    isPending: isLoadingLocation,
    error: locationError,
  } = useUserLocationAndCategories(userID);

  if (isLoadingLocation) return <Loader />;

  if (locationData === null && !isLoadingLocation) {
    console.log("IM HERE", locationData, isLoadingLocation);
    return <Navigate to="/setup-wizard" />;
  }

  if (locationError) return <LoaderError ErrMessage={locationError.message} />;
  if (locationData.categories.length === 0)
    return <LoaderError ErrMessage="Start by creating your categories" />;
  // console.log(categories);

  return (
    <ul className={styles.categoryList}>
      {locationData.categories.map((category) => {
        return <CategoryItem key={category.id} item={category} />;
      })}
    </ul>
  );
}

export default CategoriesList;
