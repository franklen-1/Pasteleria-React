import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"/>

// import css';
import './Heroes.css'

function Heroes() {

  return (
    <>

  <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src="./img/heroes/bootstrap-themes.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold lh-1 mb-3">Sweet Treats – Pastelería Artesanal</h1>
        <p className="lead">Descubre nuestras tortas, postres y dulces hechos con ingredientes de la mejor calidad. Endulza tus momentos especiales con nuestras creaciones únicas.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2"> Haz tu pedido </button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4"> Ver menú </button>
        </div>
      </div>
    </div>
  </div>


   </>
  )
}

export default Heroes;
