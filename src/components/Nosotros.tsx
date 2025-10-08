export const Nosotros = () => {
  return (
    <>
      <div className="container py-4">
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div className="col-10 col-sm-8 col-lg-6">
                <img
                  src="./img/about-person.png"
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
                <h3 className="text-muted">Sweet Treats</h3>
                <p className="lead">
                  En Dulces Helen creemos que cada dulce cuenta una historia.
                  Nuestra pasión por la repostería nació hace años en la cocina
                  de Helen, quien descubrió que con azúcar, harina y mucho
                  cariño, se podían crear momentos inolvidables. Desde nuestros
                  primeros pasteles hasta las más elaboradas tartas y postres,
                  cada creación está hecha con ingredientes frescos, amor por el
                  detalle y una sonrisa para cada cliente. Nuestra misión es
                  endulzar la vida de las personas, acompañarlas en
                  celebraciones, aniversarios, cumpleaños o simplemente en esos
                  pequeños momentos que merecen un toque especial. En Dulces
                  Helen, no solo hacemos postres, creamos recuerdos dulces que
                  perduran en el corazón.
                </p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg px-4 me-md-2"
                  >
                    Catalogo
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-lg px-4"
                  >
                    contáctanos
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row align-items-md-stretch">
          <div className="col-md-6 ">
            <div className="h-100 p-5 bg-light rounded-3">
              <h2>Horario de apertura</h2>
              <div className=" p-3 bg-body rounded shadow-sm">
                <h6 className="border-bottom pb-2 mb-0">Sweet Treats</h6>
                <div className="d-flex text-muted pt-3">
                  <svg
                    className="bd-placeholder-img flex-shrink-0 me-2 rounded"
                    width="32"
                    height="32"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: 32x32"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#007bff" />
                    <text x="50%" y="50%" fill="#007bff" dy=".3em">
                      32x32
                    </text>
                  </svg>

                  <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                    <div className="d-flex justify-content-between">
                      <strong className="text-gray-dark">Lunes -Viernes</strong>
                      <p>7 AM - 7 PM</p>
                   
                    </div>
                  </div>
                </div>
                <div className="d-flex text-muted pt-3">
                  <svg
                    className="bd-placeholder-img flex-shrink-0 me-2 rounded"
                    width="32"
                    height="32"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: 32x32"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#007bff" />
                    <text x="50%" y="50%" fill="#007bff" dy=".3em">
                      32x32
                    </text>
                  </svg>

                  <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                    <div className="d-flex justify-content-between">
                      <strong className="text-gray-dark">Sabado</strong>
                      <p>10 AM - 4 PM</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex text-muted pt-3">
                  <svg
                    className="bd-placeholder-img flex-shrink-0 me-2 rounded"
                    width="32"
                    height="32"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: 32x32"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#007bff" />
                    <text x="50%" y="50%" fill="#007bff" dy=".3em">
                      32x32
                    </text>
                  </svg>

                  <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                    <div className="d-flex justify-content-between">
                      <strong className="text-gray-dark">Domingo</strong>
                      <p>10 AM - 2 PM</p>
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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975.2644639832159!2d-75.18650063380383!3d-12.10819185235542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910e973c65a638af%3A0xf8883dda1984b6e1!2sPanaderia%20-%20Pasteleria%20D&#39;angela!5e0!3m2!1ses!2spe!4v1759848318628!5m2!1ses!2spe"
              width="600"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
