import { FaUser, FaLock } from "react-icons/fa";
import Lisa from "../images/lisa.svg";
import { useDispatch } from "react-redux";
import { loginUser } from "./redux/actions/auth.actions";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logueo = async (formData) => {
    dispatch(loginUser(formData, navigate));
  };
  return (
    <>
      <div className="card-form">
        <div className="image-container">
          <img className="image-login-lisa" src={Lisa}></img>
        </div>
        <div className="wrapper">
          <form onSubmit={handleSubmit(logueo)}>
            <h2>Login</h2>
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
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit">Login</button>
            <div className="register-link">
              <p>
                Don't have an account? <a href="/register">Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
