import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"/>

// import css';
import './Login.css'

export const login = () => {
  return (
    <>

<div className="modal modal-signin position-static d-block bg-secondary py-5" tabIndex={-1} role="dialog" id="modalSignin">
  <div className="modal-dialog" role="document">
    <div className="modal-content rounded-5 shadow">
      <div className="modal-header p-5 pb-4 border-bottom-0">
        {/* <!-- <h5 className="modal-title">Modal title</h5> --> */}
        <h2 className="fw-bold mb-0">Registrar cuenta</h2>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div className="modal-body p-5 pt-0">
        <form className="">
          <div className="form-floating mb-3">
            <input type="email" className="form-control rounded-4" id="floatingInput" placeholder="name@example.com"/>
            <label htmlFor="floatingInput">Correo electronico</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control rounded-4" id="floatingPassword" placeholder="Password"/>
            <label htmlFor="floatingPassword">Contraseña</label>
          </div>
          <button className="w-100 mb-2 btn btn-lg rounded-4 btn-primary" type="submit">Registrarse</button>
          <small className="text-muted">Al hacer clic en Registrarse, acepta los términos de uso.</small>
          <hr className="my-4"/>
          <h2 className="fs-5 fw-bold mb-3">O utilizar un tercero</h2>
          <button className="w-100 py-2 mb-2 btn btn-outline-dark rounded-4" type="submit">
            <svg className="bi me-1" width="16" height="16"><use xlinkHref="#twitter"/></svg>
            Regístrate conTwitter
          </button>
          <button className="w-100 py-2 mb-2 btn btn-outline-primary rounded-4" type="submit">
            <svg className="bi me-1" width="16" height="16"><use xlinkHref="#facebook"/></svg>
            Regístrate con Facebook
          </button>
          <button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-4" type="submit">
            <svg className="bi me-1" width="16" height="16"><use xlinkHref="#github"/></svg>
            Regístrate con Google
          </button>
        </form>
      </div>
    </div>
  </div>
</div>


   </>
  )
}

export default login;