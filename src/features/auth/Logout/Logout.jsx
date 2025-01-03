import { CiLogout } from "react-icons/ci";
import useLogout from "../useLogout";

function Logout() {
  const { isPending, mutate } = useLogout();

  if (isPending) return <p>Logging out..</p>;

  return (
    <li style={{ cursor: "pointer" }} onClick={mutate}>
      <CiLogout size={20} color="rgba(255, 255, 255, 0.87)" />
      <span>Logout</span>
    </li>
  );
}

export default Logout;
