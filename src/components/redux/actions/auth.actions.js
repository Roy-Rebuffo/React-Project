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
    console.log(formData);
    try {
      const result = await API.post("user/login", formData);
      console.log(result);
      dispatch({ type: "login_user_ok", payload: result.data });
      localStorage.setItem('user', result.data.user)
      localStorage.setItem('token', result.data.token)
      navigate("/");
    } catch (error) {
      dispatch({ type: "login_user_ko", payload: error.message });
      console.log(error);
    }
  };

  export const logoutUser = (formData, navigate) => async (dispatch) => {
    dispatch({ type: "logout"});
    //comprobacion si llegan los datos del formulario
    console.log(formData)
    try {
        localStorage.removeItem("token")
        navigate("/")

    } catch (error) {
        dispatch({ type: "logout_ko", payload: error.message });
        console.log(error)
    }

};