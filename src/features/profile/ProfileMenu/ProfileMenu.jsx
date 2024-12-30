import useUserLocationAndCategories from "../../categories/useUserLocationAndCategories";
import {
  MdOutlineModeEditOutline,
  MdOutlineRemoveRedEye,
} from "react-icons/md";
import LocationSettings from "../LocationSettings/LocationSettings";
import useGetUser from "../../auth/useGetUser";
import styles from "./ProfileMenu.module.css";
import Logout from "../../auth/Logout/Logout";
import Modal from "../../../ui/modal/Modal";
// import { CiTrash } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useState } from "react";

function ProfileMenu() {
  const { userID } = useGetUser();

  const { data: locationData } = useUserLocationAndCategories(userID);

  return (
    <ul className={styles.profileMenu}>
      <li>
        <Link to={`/menus/location/${locationData?.id || "1"}`}>
          <MdOutlineRemoveRedEye size={20} color="rgba(255, 255, 255, 0.87)" />
          <span>Menu</span>
        </Link>
      </li>
      {/* <li >
        <MdOutlineModeEditOutline size={20} color="#fff" />
        <span>Location</span>
      </li> */}
      <Logout />
      {/* <li className={styles.delete}>
        <CiTrash />
        <span>Delete</span>
      </li> */}
    </ul>
  );
}

export default ProfileMenu;
