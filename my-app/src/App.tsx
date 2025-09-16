import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Heroes from "./components/Heroes";
import HeroesForm from "./components/Heroes-form";
import Gallery from "./components/Gallery"
import Reviews from "./components/Reviews";


<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"/>

// import Carrusel from './logo.png';
import './App.css'


function App() {

  return (
    <>

    <NavBar></NavBar>

{/* ==============CAROUSEL======================= */}

  <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        {/* <svg className="bd-placeholder-img" width="100%" height="100%" href="./img/portadav3.jpg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg> */}
        <img className="bd-placeholder-img" src="./img/portada.jpg" aria-hidden="true"/>
        <div className="container">
          <div className="carousel-caption text-start">
            <h1>Pídelo de inmediato</h1>
            <p>Delivery express: endulza tu dia sin esperas</p>
            <p><a className="btn btn-lg btn-primary" href="#">Ver productos</a></p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <img className="bd-placeholder-img" src="./img/portada2.jpg" aria-hidden="true"/>
        
        <div className="container">
          <div className="carousel-caption">
            <h1>20 años de Historia</h1>
            <p>Sabores de siempre, para celebrar hoy.</p>
            <p><a className="btn btn-lg btn-primary" href="#">Ver mas</a></p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <img className="bd-placeholder-img" src="./img/portada3.jpg" aria-hidden="true"/>

        <div className="container">
          <div className="carousel-caption text-end">
            <h1>Es hora de ese dulce</h1>
            <p>Pídelo y disfruta ¡Te lo mereces!</p>
            <p><a className="btn btn-lg btn-primary" href="#">Ver mas</a></p>
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
{/* ==============CAROUSEL======================= */}

  <div className="container marketing">
    <div className="row ">
      <div className="col-lg-4">
        <li className="bi bi-fork-knife"  style={{ listStyle: "none", color:'#D90D58', fontSize: '50px'  }}></li>
        {/* <h2 className="fs-4"style={{ listStyle: "none", color:'#a5a4a5ff' }}>Sabor auténtico</h2> */}
        <p className="lead">Sabor auténtico</p>

      </div>
      <div className="col-lg-4">
        <i className="bi bi-fire"  style={{ listStyle: "none", color:'#D90D58', fontSize: '50px'  }}></i>
        <p className="lead">Creatividad en cada detalle</p>
      </div>
      <div className="col-lg-4">
        <i className="bi bi-balloon-heart-fill"  style={{ listStyle: "none", color:'#D90D58', fontSize: '50px'  }}></i>
        <p className="lead">Cercanía con el cliente</p>
      </div>
    </div>





{/* Cards*/}
  <div className="container px-4 py-5" id="custom-cards">
    <h2 className="pb-2 border-bottom">Categorias</h2>

    <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ backgroundImage: "url('./img/categoria/1.png')" }}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Tortas</h2>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"/>
              </li>
              <li className="d-flex align-items-center me-3">
                <i className="bi-geo-fill me-3" style={{ width:"1", height:"1.4em" }}></i>
                <small>Tortas</small>
              </li>
              <li className="d-flex align-items-center">
                <i className="bi-calendar3 me-3" style={{ width:"1", height:"1.4em" }}></i>
                <small>3d</small>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ backgroundImage: "url('./img/categoria/2.png')" }}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Postres</h2>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"/>
              </li>
              <li className="d-flex align-items-center me-3">
                <i className="bi-geo-fill me-3" style={{ width:"1", height:"1.4em" }}></i>

                <small>Postres</small>
              </li>
              <li className="d-flex align-items-center">
                <i className="bi-calendar3 me-3" style={{ width:"1", height:"1.4em" }}></i>

                <small>4d</small>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ backgroundImage: "url('./img/categoria/3.png')" }}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
            <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Panadería</h2>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"/>
              {/* <i className="bi bi-basket-fill rounded-circle border border-white"style={{width:'32', height:'32'}}></i> */}
              </li>
              <li className="d-flex align-items-center me-3">
                <i className="bi-geo-fill me-3" style={{ width:"1", height:"1.4em" }}></i>

                <small>Panaderia</small>
              </li>
              <li className="d-flex align-items-center">
                <i className="bi-calendar3 me-3" style={{ width:"1", height:"1.4em" }}></i>
                <small>5d</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
 {/* Cards*/}



    <div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading">30 Años de excelencia </h2>
        <h3 className="text-muted">Sweet Treats</h3>
        <p className="lead">Nacimos con el sueño de compartir momentos dulces y especiales. Desde el primer día, nuestra pasión ha sido crear postres que combinan tradición, creatividad y un toque casero que se siente en cada bocado. Lo que comenzó como una pequeña ilusión, hoy es un espacio donde cada cliente puede disfrutar sabores únicos y sentirse como en casa.</p>
      </div>
      <div className="col-md-5">
        <img src="./img/about-person.png" className="d-block mx-lg-auto img-fluid bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" alt="Bootstrap Themes" width="500" height="500" loading="lazy"/>
      </div>
    </div>
  </div>

<Gallery></Gallery>
<Heroes></Heroes> 

  {/* <div className="container marketing">
    <hr className="featurette-divider"/>

    <div className="row featurette">
      <div className="col-md-7 order-md-2">
        <h2 className="featurette-heading">Oh yeah, it’s that good. <span className="text-muted">See for yourself.</span></h2>
        <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
      </div>
      <div className="col-md-5 order-md-1">
        <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

      </div>
    </div>
  </div> */}




  <div className="b-example-divider"></div>

  <div className="container px-4 py-5" id="icon-grid">
    <h2 className="pb-2 border-bottom">Beneficios de la pastelería</h2>

    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
      <div className="col d-flex align-items-start">
        <i className="bi bi-cookie text-muted flex-shrink-0 me-3" style={{ width:"1.75em", height:"1.75em" }}></i>

        <div>
          <h4 className="fw-bold mb-0">Ingredientes frescos</h4>
          <p>Usamos productos de la mejor calidad en cada preparación.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <i className="bi bi-truck text-muted flex-shrink-0 me-3" style={{ width:"1.75em", height:"1.75em" }}></i>

        <div>
          <h4 className="fw-bold mb-0">Pedidos personalizados</h4>
          <p>Diseñamos tortas y postres únicos para tu ocasión especial.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <i className="bi bi-house text-muted flex-shrink-0 me-3" style={{ width:"1.75em", height:"1.75em" }}></i>

        <div>
          <h4 className="fw-bold mb-0">Entrega a domicilio</h4>
          <p>Llevamos la dulzura de Sweet Treats directo a tu puerta.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <i className="bi bi-flower1 text-muted flex-shrink-0 me-3" style={{ width:"1.75em", height:"1.75em" }}></i>

        <div>
          <h4 className="fw-bold mb-0">Opciones saludables</h4>
          <p>Contamos con alternativas sin azúcar, sin gluten y veganas.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <i className="bi bi-star-fill text-muted flex-shrink-0 me-3" style={{ width:"1.75em", height:"1.75em" }}></i>

        <div>
          <h4 className="fw-bold mb-0">Atención cercana</h4>
          <p>Te acompañamos en cada detalle de tu pedido.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <i className="bi bi-backpack3 text-muted flex-shrink-0 me-3" style={{ width:"1.75em", height:"1.75em" }}></i>

        <div>
          <h4 className="fw-bold mb-0">Variedad de sabores</h4>
          <p>Desde lo clásico hasta lo innovador, tenemos algo para cada gusto.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <i className="bi bi-cake2-fill text-muted flex-shrink-0 me-3" style={{ width:"1.75em", height:"1.75em" }}></i>

        <div>
          <h4 className="fw-bold mb-0">Decoración creativa</h4>
          <p>Diseños únicos y personalizados que hacen de cada postre una obra de arte.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <i className="bi bi-emoji-sunglasses-fill text-muted flex-shrink-0 me-3" style={{ width:"1.75em", height:"1.75em" }}></i>
        <div>
          <h4 className="fw-bold mb-0">Experiencia garantizada</h4>
          <p>Más de 20 años endulzando momentos especiales con clientes felices.</p>
        </div>
      </div>
    </div>
  </div>
  
    <HeroesForm></HeroesForm>

    <Reviews></Reviews>

    <Footer></Footer>

    </>
  )
}

export default App;
