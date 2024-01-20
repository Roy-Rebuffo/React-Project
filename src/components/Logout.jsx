import HomerOut from "../images/homer-logout.svg";
const Logout = () => {
  return (
    <div className="logout-container">
    <div className="image-container">
          <img className="image-logout-homer" src={HomerOut}></img>
        </div>
      <div className="logout-form">
        <p>¿Estas seguro de que quieres salir?</p>
        <div className="logout-button-container">
          <button type="submit">
            <a href="/login">Logout</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
