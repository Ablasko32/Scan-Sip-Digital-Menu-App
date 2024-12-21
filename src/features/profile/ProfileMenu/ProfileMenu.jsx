import {
  MdOutlineModeEditOutline,
  MdOutlineRemoveRedEye,
} from "react-icons/md";
import { CiLogout, CiTrash } from "react-icons/ci";
import styles from "./ProfileMenu.module.css";

function ProfileMenu() {
  return (
    <ul className={styles.profileMenu}>
      <li>
        {" "}
        <MdOutlineRemoveRedEye size={20} color="#fff" />
        <span>Menu</span>
      </li>
      <li>
        <MdOutlineModeEditOutline size={20} color="#fff" />
        <span>Location</span>
      </li>
      <li>
        <CiLogout size={20} color="#fff" />
        <span>Logout</span>
      </li>
      <li className={styles.delete}>
        <CiTrash />
        <span>Delete</span>
      </li>
    </ul>
  );
}

export default ProfileMenu;
