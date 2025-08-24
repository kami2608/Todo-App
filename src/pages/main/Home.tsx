import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import { logout } from "../../api/logoutFirebase.api";

export default function Home() {
  const navigate = useNavigate();
  async function handleClick() {
    await logout();
    navigate("/login");
  }
  return (
    <>
      <p>Helloooooo</p>
      <Button title="Log out" handleClick={handleClick} />
      <Button title="Todo" handleClick={() => navigate("/todo-list")} />
    </>
  );
}
