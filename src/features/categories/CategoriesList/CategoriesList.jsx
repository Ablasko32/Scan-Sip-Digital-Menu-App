import useUserLocationAndCategories from "../useUserLocationAndCategories.js";
import LoaderError from "../../../ui/LoaderError/LoaderError";
import CategoryItem from "../CategoryItem/CategoryItem";
import useGetUser from "../../auth/useGetUser.js";
import styles from "./CategoriesList.module.css";
import Loader from "../../../ui/Loader/Loader";

function CategoriesList() {
  const { userID } = useGetUser();
  // console.log(userID);

  // moram dobiti lokaciju

  const {
    data: locationData,
    isPending: isLoadingLocation,
    error: locationError,
  } = useUserLocationAndCategories(userID);

  // console.log(locationData);

  // const {
  //   data: locationData,
  //   error: locationError,
  //   isPending: isLoadingLocation,
  // } = useQuery({
  //   queryKey: ["userLocation"],
  //   queryFn: async () => await getLocationDataForUser(userID),
  // });
  // console.log(locationData, locationError, isLoadingLocation);

  // const locationId = locationData?.id;

  // kategorije na temelju lokacije dobivam
  // const { categories, categoriesError, isLoadingCategories } =
  //   useCategories(locationId);

  if (isLoadingLocation) return <Loader />;

  if (!locationData)
    return <LoaderError ErrMessage="Start by creating your location" />;

  if (locationError) return <LoaderError ErrMessage={locationError.message} />;
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
