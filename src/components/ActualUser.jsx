import { actualUser } from "./redux/actions/auth.actions";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ActualUser = () => {
  //register va a guardar las proiedades en un objeto, la vamos ejecutando en cada imput, y usamos spread por el tema del objeto, e indicamos el nombre de la propiedad donde quiero guardarlo

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="actual-user-container">
        <div className="profile-info">
      <div className=".user-info">
        <p>Email:{localStorage.getItem("email")}</p>
        <p>Role: {localStorage.getItem("role")}</p>
      </div>
    </div>
    </div>
    
  );
};

export default ActualUser;
