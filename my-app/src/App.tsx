import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Heroes from "./components/heroes";
import HeroesForm from "./components/Heroes-form";


<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"/>

// import Carrusel from './logo.png';
import './App.css'


function App() {

  return (
    <>

    <NavBar></NavBar>



  <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>

        <div className="container">
          <div className="carousel-caption text-start">
            <h1>Example headline.</h1>
            <p>Some representative placeholder content for the first slide of the carousel.</p>
            <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>

        <div className="container">
          <div className="carousel-caption">
            <h1>Another example headline.</h1>
            <p>Some representative placeholder content for the second slide of the carousel.</p>
            <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>

        <div className="container">
          <div className="carousel-caption text-end">
            <h1>One more for good measure.</h1>
            <p>Some representative placeholder content for the third slide of this carousel.</p>
            <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
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



  <div className="container marketing">
    <div className="row">
      <div className="col-lg-4">
        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

        <h2>Heading</h2>
        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
        <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
      </div>
      <div className="col-lg-4">
        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

        <h2>Heading</h2>
        <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
        <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
      </div>
      <div className="col-lg-4">
        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

        <h2>Heading</h2>
        <p>And lastly this, the third column of representative placeholder content.</p>
        <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
      </div>
    </div>





{/* Cards*/}
  <div className="container px-4 py-5" id="custom-cards">
    <h2 className="pb-2 border-bottom">Custom cards</h2>

    <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ backgroundImage: "url('./img/features/unsplash-photo-1.jpg')" }}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h2>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"/>
              </li>
              <li className="d-flex align-items-center me-3">
                <i className="bi-geo-fill me-3" style={{ width:"1", height:"1.4em" }}></i>
                <small>Earth</small>
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
        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ backgroundImage: "url('./img/features/unsplash-photo-2.jpg')" }}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Much longer title that wraps to multiple lines</h2>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"/>
              </li>
              <li className="d-flex align-items-center me-3">
                <i className="bi-geo-fill me-3" style={{ width:"1", height:"1.4em" }}></i>

                <small>Pakistan</small>
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
        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ backgroundImage: "url('./img/features/unsplash-photo-3.jpg')" }}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
            <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Another longer title belongs here</h2>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"/>
              </li>
              <li className="d-flex align-items-center me-3">
                <i className="bi-geo-fill me-3" style={{ width:"1", height:"1.4em" }}></i>

                <small>California</small>
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



    <hr className="featurette-divider"/>

    <div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h2>
        <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
      </div>
      <div className="col-md-5">
        <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

      </div>
    </div>

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

    <hr className="featurette-divider"/>

    <div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
        <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
      </div>
      <div className="col-md-5">
        <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

      </div>
    </div>
  </div>



{/* Cards*/}
  <div className="container px-4 py-5" id="custom-cards">
    <h2 className="pb-2 border-bottom">Custom cards</h2>

    <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ backgroundImage: "url('./img/features/unsplash-photo-1.jpg')" }}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h2>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"/>
              </li>
              <li className="d-flex align-items-center me-3">
                <i className="bi-geo-fill me-3" style={{ width:"1", height:"1.4em" }}></i>
                <small>Earth</small>
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
        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ backgroundImage: "url('./img/features/unsplash-photo-2.jpg')" }}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Much longer title that wraps to multiple lines</h2>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"/>
              </li>
              <li className="d-flex align-items-center me-3">
                <i className="bi-geo-fill me-3" style={{ width:"1", height:"1.4em" }}></i>

                <small>Pakistan</small>
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
        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ backgroundImage: "url('./img/features/unsplash-photo-3.jpg')" }}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
            <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Another longer title belongs here</h2>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"/>
              </li>
              <li className="d-flex align-items-center me-3">
                <i className="bi-geo-fill me-3" style={{ width:"1", height:"1.4em" }}></i>

                <small>California</small>
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




<Heroes></Heroes> 
<HeroesForm></HeroesForm>


  <div className="b-example-divider"></div>

  <div className="container px-4 py-5" id="icon-grid">
    <h2 className="pb-2 border-bottom">Icon grid</h2>

    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
      <div className="col d-flex align-items-start">
        <i className="bi bi-bootstrap text-muted flex-shrink-0 me-3" style={{ width:"1.75em", height:"1.75em" }}></i>

        <div>
          <h4 className="fw-bold mb-0">Featured title</h4>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <i className="bi bi-cpu-fill text-muted flex-shrink-0 me-3" style={{ width:"1.75em", height:"1.75em" }}></i>

        <div>
          <h4 className="fw-bold mb-0">Featured title</h4>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <i className="bi bi-calendar3 text-muted flex-shrink-0 me-3" style={{ width:"1.75em", height:"1.75em" }}></i>

        <div>
          <h4 className="fw-bold mb-0">Featured title</h4>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <i className="bi bi-calendar3 text-muted flex-shrink-0 me-3" style={{ width:"1.75em", height:"1.75em" }}></i>

        <div>
          <h4 className="fw-bold mb-0">Featured title</h4>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <i className="bi bi-speedometer2 text-muted flex-shrink-0 me-3" style={{ width:"1.75em", height:"1.75em" }}></i>

        <div>
          <h4 className="fw-bold mb-0">Featured title</h4>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <i className="bi bi-toggles2 text-muted flex-shrink-0 me-3" style={{ width:"1.75em", height:"1.75em" }}></i>

        <div>
          <h4 className="fw-bold mb-0">Featured title</h4>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <i className="bi bi-geo-fill text-muted flex-shrink-0 me-3" style={{ width:"1.75em", height:"1.75em" }}></i>

        <div>
          <h4 className="fw-bold mb-0">Featured title</h4>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <i className="bi bi-house-fill text-muted flex-shrink-0 me-3" style={{ width:"1.75em", height:"1.75em" }}></i>
        <div>
          <h4 className="fw-bold mb-0">Featured title</h4>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
    </div>
  </div>


    <Footer></Footer>

    </>
  )
}

export default App;
