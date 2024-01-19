import '../css/index.css'


const Home = () => {
  return (
    <article className='container-home-article'>
    <section className='title-home-container'>
    <h1>Bienvenido a la pagina de los Simpsons!</h1>
    </section>
    <div className='input-home-container'>
    <label>Encuentra tu personaje favorito!</label>
    <input placeholder='Buscar personajes'></input>
    </div>
    <div className='container-home-card'>
    <div className='container-home-div'>
        <p>Los Simpson —en inglés: The Simpsons— es una serie estadounidense de comedia en formato de animación, creada por Matt Groening para Fox Broadcasting Company y emitida en varios países del mundo. La serie es una sátira de la sociedad estadounidense que narra la vida y el día a día de una familia de clase media de ese país —cuyos miembros son Homer, Marge, Bart, Lisa y Maggie Simpson— que vive en un pueblo ficticio llamado Springfield.</p>
    </div>
    </div>
    </article>
  )
}

export default Home
