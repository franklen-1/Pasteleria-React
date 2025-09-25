import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"/>

// import css';
import './reviews.css'

function reviews() {

  return (
    <>

  <div className="container marketing">

    <div className="row pt-3">
      <div className="col-lg-4">
        {/* <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="https://picsum.photos/400/200" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */}
        <img className="bd-placeholder-img rounded-circle" width="140" height="140" src="./img/reviews/1.png" alt="" srcSet="" />
        <h2>Mariana López</h2>
        <p>⭐⭐⭐⭐⭐</p>
        <p>"La torta de chocolate fue espectacular: suave, húmeda y con el dulzor justo. El lugar es acogedor y la atención muy cálida. Sin duda volveré pronto."</p>
      </div>
      <div className="col-lg-4">
        <img className="bd-placeholder-img rounded-circle" width="140" height="140" src="./img/reviews/3.png" alt="" srcSet="" />
        <h2>Carlos Fernández</h2>
        <p>⭐⭐⭐⭐☆</p>
        <p>"El cheesecake de frutos rojos estaba delicioso y muy fresco. La presentación es impecable. Tardaron un poco en atenderme, pero la espera valió totalmente la pena."</p>
      </div>

      <div className="col-lg-4">
        <img className="bd-placeholder-img rounded-circle" width="140" height="140" src="./img/reviews/2.png" alt="" srcSet="" />
        <h2>Andrea Ramírez</h2>
        <p>⭐⭐⭐⭐⭐</p>
        <p>"Me encantaron los macarons, son de otro nivel. El café que sirven acompaña perfecto y siempre salgo satisfecha. Sweet Treats nunca decepciona."</p>
      </div>
    </div>
  </div>


   </>
  )
}

export default reviews;