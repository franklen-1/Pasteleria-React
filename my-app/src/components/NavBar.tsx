import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './NavBar.css'
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Playball&display=swap" rel="stylesheet"></link>


function NavBar() {

  return (
    <>

  <div className="container">
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-1 mb-3 border-bottom">
      <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <img src="./img/logo.png" alt="" srcSet="" className="bi me-2" width="110px" role="img" aria-label="Bootstrap"/>
      </a>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" className="nav-link px-2 link-secondary">Inicio</a></li>
        <li><a href="#" className="nav-link px-2 link-dark">Productos</a></li>
        <li><a href="#" className="nav-link px-2 link-dark">Pedidos</a></li>
        <li><a href="#" className="nav-link px-2 link-dark">Nosotros</a></li>
        <li><a href="#" className="nav-link px-2 link-dark">Contacto</a></li>
      </ul>

      <div className="col-md-3 text-end">
        <button type="button" className="btn btn-outline-primary me-2">Login</button>
        <button type="button" className="btn btn-primary">Sign-up</button>
      </div>
    </header>
  </div>

    </>
  )
}

export default NavBar;
