import HomerOut from "../images/homer-logout.svg";
import { logoutUser } from "./redux/actions/auth.actions";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOutAction = async (formData) => {
    dispatch(logoutUser(formData, navigate));
  };
  return (
    <div className="logout-container">
      <div className="image-container">
        <img className="image-logout-homer" src={HomerOut}></img>
      </div>
      <div className="logout-form">
        <p>¿Estas seguro de que quieres salir?</p>
        <div className="logout-button-container">
          <button type="submit" onClick={handleSubmit(logOutAction)}>
            <a href="/login">Logout</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
