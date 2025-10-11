import './styles/Nosotros.css';
export const Nosotros = () => {
  return (
    <>
      <div className="container">
        <div className="p-5 mb-4  rounded-3">
          <div className="container-fluid py-2">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div className="col-10 col-sm-8 col-lg-6">
                <img
                  src="./img/about2.png"
                  className="d-block mx-lg-auto img-fluid"
                  alt="Bootstrap Themes"
                  width="700"
                  height="500"
                  loading="lazy"
                />
              </div>
              <div className="col-lg-6">
                <h1 className="display-5 fw-bold lh-1 mb-3">
                  Nuestra Historia
                </h1>
                <h3 className="text-muted">Pasteleria D'angela</h3>
                <p className="lead">
                  En Pasteleria D'angela creemos que cada dulce cuenta una historia.
                  Nuestra pasión por la repostería nació hace años en la cocina
                  de Helen, quien descubrió que con azúcar, harina y mucho
                  cariño, se podían crear momentos inolvidables. Desde nuestros
                  primeros pasteles hasta las más elaboradas tartas y postres,
                  cada creación está hecha con ingredientes frescos, amor por el
                  detalle y una sonrisa para cada cliente. Nuestra misión es
                  endulzar la vida de las personas, acompañarlas en
                  celebraciones, aniversarios, cumpleaños o simplemente en esos
                  pequeños momentos que merecen un toque especial. En Pasteleria D'angela, no solo hacemos postres, creamos recuerdos dulces que
                  perduran en el corazón.
                </p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                  <button
                    type="button"
                    className="btn  btn-lg px-4"
                  >
                    contáctanos
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
{/* Med */}
      <div className="container py-4">
        <header className="pb-3 mb-4 border-bottom">
          <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
          <li className="bi bi-building-fill-check pe-3"  style={{ listStyle: "none", color:'#D90D58', fontSize: '50px'  }}></li>
            <span className="fs-4">¿Qué buscamos como empresa?</span>
          </a>
        </header>

        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold"></h1>
            <p className="col-md-8 fs-4">Nuestro propósito es inspirar a nuestro equipo a alcanzar todo su potencial y ayudarlos a cumplir sus metas y sueños. Somos una empresa peruana que convierte momentos familiares en únicos y especiales, elaborando postres con ingredientes naturales y frescos, basados en recetas mejoradas al estilo casero y preparadas con mucho amor y dedicación.</p>
            {/* <button className="btn btn-lg" type="button">Example button</button> */}
          </div>
        </div>

        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-5 text-white card-1 rounded-3">
              <h2 className='text-white'>Nuestra Misión</h2>
              <p>Alegrar a nuestros clientes en las celebraciones y momentos más especiales con familiares y amigos, volviéndolos únicos e inolvidables.</p>
              {/* <button className="btn btn-outline-light" type="button">Example button</button> */}
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 bg-light  card-2 border rounded-3">
              <h2>Nuestra Visión</h2>
              <p>Ser reconocidos como una pastelería internacional de primer nivel, que inspira a crear lazos de unión y familiaridad en su comunidad. Utilizando los mismos principios y valores con los que empezamos y hasta hoy nos acompañan.</p>
              {/* <button className="btn btn-outline-secondary" type="button">Example button</button> */}
            </div>
          </div>
        </div>
      </div>
{/* Med */}
        <div className="row align-items-md-stretch">
          <div className="col-md-6 ">
            <div className="h-100 p-5 bg-light rounded-3">
              <div className=" p-3 bg-body rounded shadow-sm">
                <h2 className='border-bottom pb-2 mb-0  text-gray-dark pb-4' style={{  color:'#D90D58'}}>Horario de apertura</h2>
                <div className="d-flex text-muted pt-3">
                    <li className="bi bi-calendar-heart pe-3"  style={{ listStyle: "none", color:'#D90D58', fontSize: '20px'  }}></li>
                  <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                    <div className="d-flex justify-content-between">
                      <strong className="text-gray-dark fs-6">Lunes -Viernes</strong>
                      <p style={{  color:'#D90D58'}}>7 AM - 7 PM</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex text-muted pt-3">
                  <li className="bi bi-calendar-heart pe-3"  style={{ listStyle: "none", color:'#D90D58', fontSize: '20px'  }}></li>
                  <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                    <div className="d-flex justify-content-between">
                      <strong className="text-gray-dark fs-6">Sabado</strong>
                      <p style={{  color:'#D90D58'}}>10 AM - 4 PM</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex text-muted pt-3">
                    <li className="bi bi-calendar-heart pe-3"  style={{ listStyle: "none", color:'#D90D58', fontSize: '20px'  }}></li>
                  <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                    <div className="d-flex justify-content-between">
                      <strong className="text-gray-dark fs-6">Domingo</strong>
                      <p style={{  color:'#D90D58'}}>10 AM - 2 PM</p>
                    </div>
                    {/* <span className="d-block">@username</span> */}
                  </div>
                </div>
                <small className="d-block text-end mt-3">
                  <p>¡Te esperamos con los mejores pasteles y dulces frescos todos los días!</p>
                </small>
              </div>
            </div>
          </div>


            <div className="col-md-6">
              <div className="w-100 h-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975.2644639832159!2d-75.18650063380383!3d-12.10819185235542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910e973c65a638af%3A0xf8883dda1984b6e1!2sPanaderia%20-%20Pasteleria%20D&#39;angela!5e0!3m2!1ses!2spe!4v1759848318628!5m2!1ses!2spe"
                className="w-100 h-100 border-0"
                loading="lazy">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
