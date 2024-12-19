import styles from "./ProfileMenu.module.css";

function ProfileMenu() {
  return (
    <ul className={styles.profileMenu}>
      <li>View menu</li>
      <li>Edit Location</li>
      <li>Logout</li>
      <li className={styles.delete}>Delete</li>
    </ul>
  );
}

export default ProfileMenu;
