import useThemePicker from "../../../pages/Menus/useThemePicker.js";
import formatPrice from "../../../utils/formatPrice.js";
import PropTypes from "prop-types";
// import styles from "./MenuItemView.module.css";

MenuItemView.propTypes = {
  item: PropTypes.object,
};
function MenuItemView({ item }) {
  // console.log(item);

  const styles = useThemePicker();

  return (
    <div className={styles.itemViewContainer}>
      {item.image ? (
        <img
          className={styles.itemViewImage}
          src={item.image}
          alt="Zoomed in photo of the item"
        />
      ) : (
        <div className={styles.filler}></div>
      )}

      <div>
        {" "}
        <h3>{item.name}</h3>
        <p className={styles.itemViewDescription}>{item.description}</p>
        <p className={styles.itemViewPrice}>{formatPrice(item.price)}</p>
      </div>
    </div>
  );
}

export default MenuItemView;
