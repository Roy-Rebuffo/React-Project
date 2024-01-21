import Family from "../images/familia-simpson.svg";
import ActualUser from "./ActualUser";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="image-container">
        <img className="image-profile-family" src={Family} alt="Family"></img>
      </div>
      <section className="profile-card">
        <div className="profile-info-title">
          <h2>PERFIL Y CUENTA</h2>
        </div>
        <div className="profile-info">
          <div className="user-info">
            <ActualUser />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
