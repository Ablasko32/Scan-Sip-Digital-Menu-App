import formatPrice from "../../../utils/formatPrice.js";
import styles from "./MenuItemView.module.css";

function MenuItemView({ item }) {
  console.log(item);
  return (
    <div className={styles.container}>
      {item.image ? (
        <img className={styles.image} src={item.image} />
      ) : (
        <img
          className={styles.image}
          src="https://images.unsplash.com/photo-1629022194335-b2eca031e320?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ></img>
      )}

      <div>
        {" "}
        <h3>{item.name}</h3>
        <p className={styles.description}>{item.description}</p>
        <p className={styles.price}>{formatPrice(item.price)}</p>
      </div>
    </div>
  );
}

export default MenuItemView;
