import { CiLogout } from "react-icons/ci";
import useLogout from "../useLogout";

function Logout() {
  const { isPending, mutate } = useLogout();

  return (
    <li onClick={mutate}>
      <CiLogout size={20} color="#fff" />
      <span>Logout</span>
    </li>
  );
}

export default Logout;
