import { FaUser, FaLock } from "react-icons/fa";
import Homer from '../images/homer.svg'
const Register = () => {
  return (
    <div className="card-form">
    <div className="image-container">
    <img className="image-register-homer" src={Homer}></img>
    </div>
    <div className="wrapper">
    <form>
        <h2>Register</h2>
        <div className="input-box">
            <input type="text" placeholder="Name" required></input>
            <FaUser className="icon"/>
        </div>
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
        </div>
        <button type="submit">Login</button>
    </form>
      
    </div>
    </div>
  )
}

export default Register
