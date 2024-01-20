import Family from '../images/familia-simpson.svg'
const Profile = () => {
  return (
    <div className="profile-container">
    <div className="image-container">
          <img className="image-profile-family" src={Family}></img>
        </div>
      <section className="profile-card">
        <div className="profile-info-title">
          <h2>PERFIL Y CUENTA</h2>
        </div>
        <div className="profile-info">
          <h2>Nombre:</h2>
          <h2>Apellido:</h2>
          <h2>Email:</h2>
          <h2>ROL:</h2>
        </div>
      </section>
    </div>
  )
}

export default Profile
