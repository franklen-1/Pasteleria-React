import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Menu.css';

// import Cart from '../Caritto/Cart';
// import type { CartItem } from '../../types';
// import { useState } from 'react';


export const Menu = () => {


return (
    <>

  <div className="container">
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-1 mb-3 border-bottom">

      <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <img src="./img/logo.png" alt="" srcSet="" className="bi me-2" width="110px" role="img" aria-label="Bootstrap"/>
      </a>

        <nav className="navbar navbar-expand-lg py-1">
          <div className="container d-flex justify-content-center">
            <ul className="nav gap-2">
              <li className="nav-item">
                <Link className="nav-link fw-semibold text-dark menu-link" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold text-dark menu-link" to="/catalogo">Catálogo</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold text-dark menu-link" to="/nosotros">Nosotros</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold text-dark menu-link" to="/contacto">Contacto</Link>
              </li>
            </ul>
          </div>
        </nav>

{/* color:'#D90D58' */}
    <div>
     
    </div>
    </header>
  </div>

   </>
  );
};