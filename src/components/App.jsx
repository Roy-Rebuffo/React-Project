import { Route, Routes } from "react-router-dom"
import '../css/index.css'
import Home from "./Home"
import Login from "./Login"
import Register from "./Register"
import Profile from "./Profile"
import Header from "./Header"
import Logout from "./Logout"

const App = () => {
  return (
    <div className="site">
    <Header></Header>
      <Routes>
        <Route path="/" element= {<Home></Home>}></Route>
        <Route path="/login" element= {<Login></Login>}></Route>
        <Route path="/register" element= {<Register></Register>}></Route>
        <Route path="/profile" element= {<Profile></Profile>}></Route>
        <Route path="/logout" element= {<Logout></Logout>}></Route>
      </Routes>
    </div>
  )
}

export default App
