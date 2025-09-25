import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Playball&display=swap" rel="stylesheet"></link>
import './styles/Menu.css'



export const Menu = () => {
  return (
    <>

    {/* <nav>
      <Link to='/'>Inicio</Link>
      <Link to='/nosotros'>Nosotros</Link>
      <Link to='/contacto'>Contacto</Link>
    </nav> */}

  <div className="container">
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-1 mb-3 border-bottom">

      <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <img src="./img/logo.png" alt="" srcSet="" className="bi me-2" width="110px" role="img" aria-label="Bootstrap"/>
      </a>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <Link to='/'><a href="#" className="nav-link px-2 link-secondary">Inicio</a></Link>
        <li><a href="#" className="nav-link px-2 link-dark">Productos</a></li>
        <li><a href="#" className="nav-link px-2 link-dark">Pedidos</a></li>
        <Link to='/nosotros'><a href="#" className="nav-link px-2 link-dark">Nosotros</a></Link>
        <Link to='/contacto'><a href="#" className="nav-link px-2 link-dark">Contacto</a></Link>
      </ul>
{/* color:'#D90D58' */}
      <div className="col-md-3 text-end">
        <button type="button" className="btn btn-outline-primary me-2 " ><i className="bi bi-person-circle me-3"></i>Mi cuenta</button>
        <button type="button" className="btn btn-primary me-2"><i className="bi bi-archive-fill me-3"></i>Pedidos</button>
        <button type="button" className="btn btn-primary me-2"><i className="bi bi-cart-plus-fill"></i></button>
      
      </div>
    </header>
  </div>

   </>
  )
}