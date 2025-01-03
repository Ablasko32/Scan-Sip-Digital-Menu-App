import useThemePicker from "../../../pages/Menus/useThemePicker.js";
import clampDescription from "../../../utils/clampDescription.js";
import LoaderError from "../../../ui/LoaderError/LoaderError";
import useItems from "../../items/ItemsList/useItems.js";
import formatPrice from "../../../utils/formatPrice.js";
import Loader from "../../../ui/Loader/Loader";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

CategoryItemsList.propTypes = {
  onOpen: PropTypes.func,
};

function CategoryItemsList({ onOpen }) {
  const { category: categoryId } = useParams();

  const { itemsData, itemsError, isLoadingItems } = useItems(categoryId);

  const styles = useThemePicker();
  // console.log(styles);

  if (isLoadingItems) return <Loader />;

  if (itemsError) return <LoaderError ErrMessage={itemsError.message} />;

  if (itemsData.length === 0)
    return <LoaderError ErrMessage="No items in this category!" />;

  return (
    <>
      <ul className={styles.categoryItemsList}>
        {itemsData.map((item) => {
          return (
            <li onClick={() => onOpen(item)} key={item.id}>
              <div>
                <h3>{item.name}</h3>
                <p className={styles.items}>
                  {" "}
                  {clampDescription(item.description)}
                </p>
                <p className={styles.itemPrice}>{formatPrice(item.price)}</p>
              </div>
              {item.image ? (
                <img
                  className={styles.itemImg}
                  src={item.image}
                  alt="Image of item that can be ordered"
                />
              ) : (
                <div></div>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default CategoryItemsList;
