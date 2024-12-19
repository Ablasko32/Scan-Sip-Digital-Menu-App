import categoryStyles from "../../categories/CategoriesList/CategoriesList.module.css";
import { HiDotsVertical } from "react-icons/hi";
import Item from "../Item/Item";

function ItemsList() {
  return (
    <ul className={categoryStyles.categoryList}>
      <Item />
      <Item />
      <Item />
    </ul>
  );
}

export default ItemsList;
