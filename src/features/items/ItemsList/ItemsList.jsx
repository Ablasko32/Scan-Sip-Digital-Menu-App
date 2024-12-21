import categoryStyles from "../../categories/CategoriesList/CategoriesList.module.css";
import LoaderError from "../../../ui/LoaderError/LoaderError";
import Loader from "../../../ui/Loader/Loader";
import { useParams } from "react-router-dom";
import styles from "./ItemsList.module.css";
import useItems from "./useItems";
import Item from "../Item/Item";

function ItemsList() {
  const { id: categoryID = 0 } = useParams();
  // console.log(categoryID);

  const { itemsData, itemsError, isLoadingItems } = useItems(categoryID);

  if (isLoadingItems) return <Loader />;

  if (itemsError) return <LoaderError ErrMessage={itemsError.message} />;

  if (itemsData.length === 0) return <LoaderError ErrMessage="No items yet!" />;

  return (
    <ul className={`${categoryStyles.categoryList} ${styles.itemsList}`}>
      {itemsData.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </ul>
  );
}

export default ItemsList;
