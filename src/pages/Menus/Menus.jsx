import MenuFooter from "../../features/menus/MenuFooter/MenuFooter";
import MenuHeader from "../../features/menus/MenuHeader/MenuHeader";
import MenuList from "../../features/menus/MenuList/MenuList";
import LoaderError from "../../ui/LoaderError/LoaderError";
import Loader from "../../ui/Loader/Loader";

import { useParams } from "react-router-dom";
import styles from "./Menus.module.css";
import useLocation from "./useLocation";

function Menus() {
  const { id: locationID } = useParams();

  const {
    locationData = {},
    locationError,
    isLoadingLocation,
  } = useLocation(locationID);

  // potrebni drugi loaderi! modifakicja ovih!!!
  if (isLoadingLocation) return <Loader fullScreen={true} />;
  if (locationError)
    return <LoaderError fullScreen={true} ErrMessage={locationError.message} />;

  return (
    <div className={styles.menu}>
      <div
        className={styles.menuHeader}
        style={{
          backgroundImage: `url('${locationData.image}')`,
        }}
      ></div>

      <MenuHeader locationData={locationData} />

      <MenuList />

      <MenuFooter />
    </div>
  );
}

export default Menus;
