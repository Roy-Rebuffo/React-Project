import { API } from "../../axios/api";
export const registerUser = (formData, navigate) => async (dispatch) => {
  dispatch({ type: "register_user" });
  console.log(formData);
  try {
    const result = await API.post("user/register", formData);
    console.log(result);
    dispatch({ type: "register_ok", payload: result.data });
    navigate("/login");
  } catch (error) {
    dispatch({ type: "register_ko", payload: error.message });
    console.log(error);
  }
};

export const loginUser = (formData, navigate) => async (dispatch) => {
  dispatch({ type: "login_user" });
  //comprobacion si llegan los datos del formulario
  console.log(formData);

  try {
    const result = await API.post("user/login", formData);
    console.log(result);
    //consulta result
    dispatch({ type: "login_user_ok", payload: result.data });
    localStorage.setItem("user", result.data.getUser._id);
    localStorage.setItem("token", result.data.token);
    localStorage.setItem("email", result.data.getUser.email);
    localStorage.setItem("role", result.data.getUser.role);
    //Se guarda el token que te da el back, y los datos del usuario loguedao
    navigate("/");
  } catch (error) {
    dispatch({ type: "login_user_ko", payload: error.message });
    console.log(error);
  }
};

export const logoutUser = (formData, navigate) => async (dispatch) => {
  dispatch({ type: "logout" });
  //comprobacion si llegan los datos del formulario
  console.log(formData);
  try {
    localStorage.removeItem("token");
    navigate("/");
  } catch (error) {
    dispatch({ type: "logout_ko", payload: error.message });
    console.log(error);
  }
};
export const actualUser = (formData) => async (dispatch) => {
  dispatch({ type: "actual_user_ok" });
  //comprobacion si llegan los datos del formulario
  console.log(formData);
  try {
    const result = await API.post("user/checksession", formData);
    console.log(result);
    console.log(result.data.email);
    localStorage.getItem("email");
  } catch (error) {
    dispatch({ type: "actual_user_ko", payload: error.message });
    console.log(error);
  }
};
