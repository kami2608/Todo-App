import { useNavigate } from "react-router-dom";
import { logout } from "../../api/logoutFirebase.api";
import Button from "../../components/common/Button";

export default function Todo() {
  const navigate = useNavigate();
  async function handleClick() {
    await logout();
    navigate("/login");
  }
  return (
    <>
      <h1>Hus hus hus</h1>
      <Button title="Log out" handleClick={handleClick} />
      <Button title="Home" handleClick={() => navigate("/home")} />
    </>
  );
}
