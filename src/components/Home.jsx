import { useState } from "react";
import "../css/index.css";
import ListaDePersonajes from "./ListaDePersonajes";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <article className="container-home-article">
        <section className="title-home-container">
          <h1>Bienvenido a la página de los Simpsons!</h1>
        </section>
        <div className="input-home-container">
          <label>Encuentra tu personaje favorito!</label>
          <input
            placeholder="Buscar personajes"
            value={searchTerm}
            onChange={handleInputChange}
          />
        </div>
        <div className="container-home-card">
          <div className="container-home-div">
            <p>
              Los Simpson —en inglés: <span>The Simpsons—</span> es una serie
              estadounidense de comedia en formato de animación, creada por Matt
              Groening para Fox Broadcasting Company y emitida en varios países
              del mundo. La serie es una sátira de la sociedad estadounidense
              que narra la vida y el día a día de una familia de clase media de
              ese país —cuyos miembros son Homer, Marge, Bart, Lisa y Maggie
              Simpson— que vive en un pueblo ficticio llamado Springfield.
            </p>
          </div>
        </div>
      </article>
      <ListaDePersonajes searchTerm={searchTerm} />
    </>
  );
};

export default Home;
