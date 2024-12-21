import LoaderError from "../../../ui/LoaderError/LoaderError";
import useItems from "../../items/ItemsList/useItems.js";
import styles from "./CategoryItemsList.module.css";
import Loader from "../../../ui/Loader/Loader";
import { useParams } from "react-router-dom";

// import { IoChevronUp } from "react-icons/io5";

function CategoryItemsList({ handleScroll, onOpen }) {
  const { category: categoryId } = useParams();

  const { itemsData, itemsError, isLoadingItems } = useItems(categoryId);

  if (isLoadingItems) return <Loader />;

  if (itemsError) return <LoaderError ErrMessage={itemsError.message} />;

  if (itemsData.length === 0)
    return <LoaderError ErrMessage="No items in this category!" />;

  return (
    <>
      <ul className={styles.itemsList}>
        {itemsData.map((item) => {
          return (
            <li onClick={() => onOpen(item)} key={item.id}>
              <div>
                <h3>{item.name}</h3>
                <p className={styles.items}>{item.description}</p>
                <p className={styles.itemPrice}>{item.price}€</p>
              </div>
              {item.image ? (
                <img className={styles.itemImg} src={item.image} />
              ) : (
                <div></div>
              )}
            </li>
          );
        })}
        {/* <li>
          <div>
            <h3>Name of Product</h3>
            <p>Quantity or description of product</p>
            <p className={styles.itemPrice}>6.46€</p>
          </div>

          <img
            className={styles.itemImg}
            src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </li>
        <li>
          <div>
            <h3>Name of Product</h3>
            <p>Quantity or description of product</p>
            <p className={styles.itemPrice}>6.46€</p>
          </div>

          <img
            className={styles.itemImg}
            src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </li>
        <li>
          <div>
            <h3>Name of Product</h3>
            <p>Quantity or description of product</p>
            <p className={styles.itemPrice}>6.46€</p>
          </div>

          <img
            className={styles.itemImg}
            src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </li>
        <li>
          <div>
            <h3>Name of Product</h3>
            <p>Quantity or description of product</p>
            <p className={styles.itemPrice}>6.46€</p>
          </div>

          <img
            className={styles.itemImg}
            src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </li>
        <li>
          <div>
            <h3>Name of Product</h3>
            <p>Quantity or description of product</p>
            <p className={styles.itemPrice}>6.46€</p>
          </div>

          <img
            className={styles.itemImg}
            src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </li>
        <li>
          <div>
            <h3>Name of Product</h3>
            <p>Quantity or description of product</p>
            <p className={styles.itemPrice}>6.46€</p>
          </div>

          <img
            className={styles.itemImg}
            src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </li>
        <li>
          <div>
            <h3>Name of Product</h3>
            <p>Quantity or description of product</p>
            <p className={styles.itemPrice}>6.46€</p>
          </div>

          <img
            className={styles.itemImg}
            src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </li>
        <li>
          <div>
            <h3>Name of Product</h3>
            <p>Quantity or description of product</p>
            <p className={styles.itemPrice}>6.46€</p>
          </div>

          <img
            className={styles.itemImg}
            src="https://images.unsplash.com/photo-1446321423766-c339f030bd0a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </li>
        <li>
          <div>
            <h3>Name of Product</h3>
            <p>Quantity or description of product</p>
            <p className={styles.itemPrice}>6.46€</p>
          </div>

          <img
            className={styles.itemImg}
            src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </li>
        <li>
          <div>
            <h3>Name of Product</h3>
            <p>Quantity or description of product</p>
            <p className={styles.itemPrice}>6.46€</p>
          </div>

          <img
            className={styles.itemImg}
            src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </li>
        <li>
          <div>
            <h3>Name of Product</h3>
            <p>Quantity or description of product</p>
            <p className={styles.itemPrice}>6.46€</p>
          </div>

          <img
            className={styles.itemImg}
            src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </li> */}
      </ul>
      {/* <button onClick={handleScroll} className={styles.goToTop}>
        <span>Back to Top</span> <IoChevronUp />
      </button> */}
    </>
  );
}

export default CategoryItemsList;
