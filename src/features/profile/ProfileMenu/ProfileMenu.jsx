import {
  MdOutlineModeEditOutline,
  MdOutlineRemoveRedEye,
} from "react-icons/md";
import { CiLogout, CiTrash } from "react-icons/ci";
import styles from "./ProfileMenu.module.css";
import Logout from "../../auth/Logout/Logout";

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
      <Logout />
      <li className={styles.delete}>
        <CiTrash />
        <span>Delete</span>
      </li>
    </ul>
  );
}

export default ProfileMenu;
