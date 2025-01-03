import categoryStyle from "../Categories/Categories.module.css";
import { IoChevronBack } from "react-icons/io5";

import AddItemForm from "../../features/items/AddItemForm/AddItemForm";
import ItemsList from "../../features/items/ItemsList/ItemsList";
import { useNavigate } from "react-router-dom";
import Modal from "../../ui/modal/Modal";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";

function Items() {
  const [isAddOpen, setAddOpen] = useState(false);

  function handleAddOpen() {
    setAddOpen((prev) => !prev);
  }

  const navigate = useNavigate();

  return (
    <div className={categoryStyle.categories}>
      <div className={categoryStyle.headerContainer}>
        <button onClick={() => navigate(-1)}>
          {/* Go back */}
          <IoChevronBack size={25} color="rgba(255, 255, 255, 0.87)" />
        </button>
        <h2 className={categoryStyle.header}>Items</h2>
        <button onClick={handleAddOpen} className={categoryStyle.addIcon}>
          <FiPlus color="#fff" size={20} />
        </button>
      </div>

      <ItemsList />
      {isAddOpen && (
        <Modal onClose={handleAddOpen}>
          <AddItemForm />
        </Modal>
      )}
    </div>
  );
}

export default Items;
