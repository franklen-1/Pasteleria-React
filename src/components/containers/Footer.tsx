import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Footer.css'


export const Footer=() =>{

  return (
    <>

<div className="container">
  <footer className="py-5">
    <div className="row">
      <div className="col-2">
        <h5>Seccion</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Hogar</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Precios</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Preguntas frecuentes</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Acerca de</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Contacto</a></li>
        </ul>
      </div>

      <div className="col-2">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
        </ul>
      </div>

      <div className="col-2">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
        </ul>
      </div>

      <div className="col-4 offset-1">
        <form>
          <h5>Suscríbete a nuestro boletín</h5>
          <p>Recibe mensual de nuestras novedades más interesantes.</p>
          <div className="d-flex w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">Direccion correo electronico</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Correo electronico"/>
            <button className="btn btn-primary" type="button">Suscribete</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex justify-content-between py-4 my-4 border-top">
      <p>&copy; 2021 Company, Inc. Todos los derechos reservados.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter"/></svg></a></li>
        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"/></svg></a></li>
        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"/></svg></a></li>
      </ul>
    </div>
  </footer>
</div>
    </>
  )
}
