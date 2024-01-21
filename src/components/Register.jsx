import { FaUser, FaLock } from "react-icons/fa";
import Homer from "../images/homer.svg";
import { useDispatch } from "react-redux";
import { registerUser } from "./redux/actions/auth.actions";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registrar = async (formData) => {
    dispatch(registerUser(formData, navigate));
  };
  return (
    <div className="card-form">
      <div className="image-container">
        <img className="image-register-homer" src={Homer}></img>
      </div>
      <div className="wrapper">
        <form onSubmit={handleSubmit(registrar)}>
          <h2>Register</h2>
          <div className="input-box">
            <input
              type="text"
              placeholder="Name"
              {...register("name")}
              required
            ></input>
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              required
            ></input>
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
              required
            ></input>
            <FaLock className="icon" />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox"></input>Remember me
            </label>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};
export default Register;
