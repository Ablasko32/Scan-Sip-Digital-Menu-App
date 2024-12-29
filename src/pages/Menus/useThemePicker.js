import whiteStyle from "./MenusWhite.module.css";
import neonPurpleStyle from "./Menus.module.css";
import { useParams } from "react-router-dom";
import useLocation from "./useLocation";

export default function useThemePicker() {
  const { id: locationID } = useParams();

  const { locationData = {} } = useLocation(locationID);

  switch (locationData.theme) {
    case "neonPurple":
      console.log("purple");
      return neonPurpleStyle;
    case "whiteMinimalism":
      return whiteStyle;
    default:
      return neonPurpleStyle;
  }
}
