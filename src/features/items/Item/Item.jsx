// import categoryStyles from "../../categories/CategoryItem/CategoryItem.module.css";
import { HiDotsVertical } from "react-icons/hi";
import styles from "./Item.module.css";

function Item({ item }) {
  return (
    <li className={` ${styles.listItem}`}>
      {item.image ? (
        <img className={styles.categoryImg} src={item.image} />
      ) : (
        <div></div>
      )}

      <div className={styles.itemData}>
        <p className={styles.itemName}>{item.name}</p>
        <p className={styles.itemDescription}>{item.description}</p>
        <p className={styles.itemPrice}>{item.price}€</p>
      </div>

      <p className={styles.itemMenu}>
        <HiDotsVertical />
      </p>
    </li>
  );
}

export default Item;
