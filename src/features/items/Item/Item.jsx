import categoryStyles from "../../categories/CategoryItem/CategoryItem.module.css";
import { HiDotsVertical } from "react-icons/hi";

function Item() {
  return (
    <li className={categoryStyles.listItem}>
      <div>
        <img
          className={categoryStyles.categoryImg}
          src="https://images.unsplash.com/photo-1634473115508-4291d758cf03?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>

      <p>Coffe2</p>
      <p>0,2</p>
      <p>2€</p>
      <p>
        <HiDotsVertical />
      </p>
    </li>
  );
}

export default Item;
