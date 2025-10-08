

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"/>

// import css';
import './Gallery.css'

function Gallery() {

  return (
    <>


{/* Cards*/}
  <div className="container px-4 py-5" id="custom-cards">
    <h2 className="pb-2 border-bottom">Recomendados para ti</h2>

    <div className="row row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-5">
      <div className="col">
        <div className="card card card-cover h-100 overflow-hidden text-white bg-white rounded-2 shadow-lg"  style={{width: '18rem', justifyContent: "center", alignItems: "center",}}>
            <img src="./img/products/torta-zanahoria.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title text-dark">Torta de  Zanahoria</h5>
            </div>
                <li className="list-group-item t-center" style={{color:'#D90D58'}}>S/ 47.60 – S/ 84.00</li>
            <div className="card-body">
                <a href="#" className="btn btn-primary">Seleccionar opciones</a>
            </div>
        </div>
      </div>

      <div className="col">
        <div className="card card card-cover h-100 overflow-hidden text-white bg-white rounded-2 shadow-lg"  style={{width: '18rem', justifyContent: "center", alignItems: "center",}}>
            <img src="./img/products/torta-pecanas.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title text-dark">Torta de Pecanas</h5>
            </div>
                <li className="list-group-item t-center" style={{color:'#D90D58'}}>S/ 47.60 – S/ 84.00</li>
            <div className="card-body">
                <a href="#" className="btn btn-primary">Seleccionar opciones</a>
            </div>
        </div>
      </div>

      <div className="col">
        <div className="card card card-cover h-100 overflow-hidden text-white bg-white rounded-2 shadow-lg"  style={{width: '18rem', justifyContent: "center", alignItems: "center",}}>
            <img src="./img/products/torta-tiramisu.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title text-dark">Tiramisú DC</h5>
            </div>
                <li className="list-group-item t-center" style={{color:'#D90D58'}}>S/ 47.60 – S/ 84.00</li>
            <div className="card-body">
                <a href="#" className="btn btn-primary">Seleccionar opciones</a>
            </div>
        </div>
      </div> 
            <div className="col">
        <div className="card card card-cover h-100 overflow-hidden text-white bg-white rounded-2 shadow-lg"  style={{width: '18rem', justifyContent: "center", alignItems: "center",}}>
            <img src="./img/products/torta-tresleches.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title text-dark">Tres Leches DC</h5>
            </div>
                <li className="list-group-item t-center" style={{color:'#D90D58'}}>S/ 47.60 – S/ 84.00</li>
            <div className="card-body">
                <a href="#" className="btn btn-primary">Seleccionar opciones</a>
            </div>
        </div>
      </div> 
      
    </div>


    <div className="row row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-5">
      <div className="col">
        <div className="card card card-cover h-100 overflow-hidden text-white bg-white rounded-2 shadow-lg"  style={{width: '18rem', justifyContent: "center", alignItems: "center",}}>
            <img src="./img/products/torta-yogurt.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title text-dark">Torta de Yogurt y Frutos</h5>
            </div>
                <li className="list-group-item t-center" style={{color:'#D90D58'}}>S/ 47.60 – S/ 84.00</li>
            <div className="card-body">
                <a href="#" className="btn btn-primary">Seleccionar opciones</a>
            </div>
        </div>
      </div>

      <div className="col">
        <div className="card card card-cover h-100 overflow-hidden text-white bg-white rounded-2 shadow-lg"  style={{width: '18rem', justifyContent: "center", alignItems: "center",}}>
            <img src="./img/products/torta-pera.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title text-dark">Torta de Pera</h5>
            </div>
                <li className="list-group-item t-center" style={{color:'#D90D58'}}>S/ 47.60 – S/ 84.00</li>
            <div className="card-body">
                <a href="#" className="btn btn-primary">Seleccionar opciones</a>
            </div>
        </div>
      </div>

      <div className="col">
        <div className="card card card-cover h-100 overflow-hidden text-white bg-white rounded-2 shadow-lg"  style={{width: '18rem', justifyContent: "center", alignItems: "center",}}>
            <img src="./img/products/torta-deliciafresa.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title text-dark">Delicia de Fresa</h5>
            </div>
                <li className="list-group-item t-center" style={{color:'#D90D58'}}>S/ 47.60 – S/ 84.00</li>
            <div className="card-body">
                <a href="#" className="btn btn-primary">Seleccionar opciones</a>
            </div>
        </div>
      </div> 
            <div className="col">
        <div className="card card card-cover h-100 overflow-hidden text-white bg-white rounded-2 shadow-lg"  style={{width: '18rem', justifyContent: "center", alignItems: "center",}}>
            <img src="./img/products/torta-bararois.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title text-dark">Bavarois de Chocolate</h5>
            </div>
                <li className="list-group-item t-center" style={{color:'#D90D58'}}>S/ 47.60 – S/ 84.00</li>
            <div className="card-body">
                <a href="#" className="btn btn-primary">Seleccionar opciones</a>
            </div>
        </div>
      </div> 
      
    </div>

  </div>
 {/* Cards*/}

   </>
  )
}

export default Gallery;