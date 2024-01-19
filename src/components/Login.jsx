import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div className="card-form">
    <div className="wrapper">
    <form>
        <h2>Login</h2>
        <div className="input-box">
            <input type="text" placeholder="Username" required></input>
            <FaUser className="icon"/>
        </div>
        <div className="input-box">
            <input type="password" placeholder="Password" required></input>
            <FaLock className="icon"/>
        </div>
        <div className="remember-forgot">
            <label><input type="checkbox"></input>Remember me</label>
            <a href="#">Forgot Password?</a>
        </div>
        <button type="submit">Login</button>
        <div className="register-link">
            <p>Don't have an account? <a href="/register">Register</a></p>
        </div>
    </form>
      
    </div>
    </div>
  )
}

export default Login
