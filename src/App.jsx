import './App.css'

function App() {
  return (
    <>
      <header>
        <div className="nav-logo">Papalote Museo del Niño</div>
        <nav>
          <a href="#explora">Explora</a>
          <a href="#actividades">Actividades</a>
          <a href="#visitanos">Visítanos</a>
        </nav>
      </header>
      <main>
        <section className="hero">
          <h2>Aprender es divertido</h2>
          <p>Descubre, imagina y juega en nuestras exhibiciones interactivas.</p>
          <button>Compra tus boletos</button>
        </section>
        <section className="section" id="explora">
          <h3>Explora</h3>
          <p>Visita nuestras salas temáticas llenas de ciencia y diversión.</p>
        </section>
        <section className="section" id="actividades">
          <h3>Actividades</h3>
          <p>Consulta talleres y eventos para toda la familia.</p>
        </section>
        <section className="section" id="visitanos">
          <h3>Visítanos</h3>
          <p>Estamos ubicados en tu ciudad para que vivas la aventura.</p>
        </section>
      </main>
      <footer>
        <p>Papalote Museo del Niño - Todos los derechos reservados</p>
      </footer>
    </>
  )
}

export default App
