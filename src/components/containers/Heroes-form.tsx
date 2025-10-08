import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"/>

// import css';
import './Heroes-form.css'

function HeroesForm() {

  return (
    <>

  <div className="container col-xl-10 col-xxl-8 px-4 py-5">
    <div className="row align-items-center g-lg-5 py-5">
      <div className="col-lg-7 text-center text-lg-start">
        <h1 className="display-4 fw-bold lh-1 mb-3">Cotización de eventos</h1>
        <p className="col-lg-10 fs-4">"¿Planeas un cumpleaños, boda o celebración especial? Déjanos tus datos y los detalles de tu evento para enviarte una propuesta personalizada."</p>
      </div>
      <div className="col-md-10 mx-auto col-lg-5">
        <form className="p-4 p-md-5 border rounded-3 bg-light">
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label htmlFor="floatingInput">Correo</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
            <label htmlFor="floatingPassword">Contraseña</label>
          </div>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"/> Recordarme
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Iniciar Sesion</button>
          <hr className="my-4"/>
          <small className="text-muted">Al hacer clic en Registrarse, acepta los términos de uso.</small>
        </form>
      </div>
    </div>
  </div>


   </>
  )
}

export default HeroesForm;