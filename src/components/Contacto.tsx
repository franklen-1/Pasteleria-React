import "./styles/Contacto.css";
export const Contacto = () => {
  return (
    <>

      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-3">
          <div className="col-lg-7 text-center text-lg-start">
            <div className="contact-card  p-2 rounded-4 "
              style={{ maxWidth: "690px" }}>
                <div className="container px-4 py-5" id="hanging-icons">
                  <h1 className="display-5 fw-bold lh-1 mb-3">Contáctanos en D'angela!</h1>
                      <p className="fs-5"> ¿Tienes alguna duda, un pedido especial o quieres que preparemos algo dulce para ti? En Dulces Helen estamos felices de atenderte y
                            hacer tus momentos más dulces y especiales.
                      </p>
                  <div className="row g-4 py-5 row-cols-1 ">
                    <div className="col d-flex align-items-start">
                      <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                        <i className="bi bi-geo-alt-fill"></i>        
                      </div>
                      <div>
                        <h2>Nuestra Tienda</h2>
                        <p>La punta, Jr Santa cruz #254 - Sapallanga</p>
                      </div>
                    </div>
                    <div className="col d-flex align-items-start">
                      <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                        <i className="bi bi-envelope-fill"></i>
                      </div>
                      <div>
                        <h2>Correo</h2>
                        <p>contacto@dangela.com</p>

                      </div>
                    </div>
                    <div className="col d-flex align-items-start">
                      <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                        <i className="bi bi-telephone-outbound-fill"></i>
                      </div>
                      <div>
                        <h2>Telefono</h2>
                        <p>954 324 245</p>
                      </div>
                    </div>
                  </div>
                    <div className="container " id="hanging-icons">

                    <h2 className="pb-2 border-bottom">Síguenos en nuestras redes</h2>
                    <div className="row g-4 py-3 row-cols-1 row-cols-lg-3">
                      <div className="col d-flex align-items-start">
                        <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                            <i className="bi bi-facebook"></i>
                        </div>
                        <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                            <i className="bi bi-whatsapp"></i>
                        </div>
                        <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                            <i className="bi bi-tiktok"></i>
                        </div>
                        <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                            <i className="bi bi-instagram"></i>
                        </div>                                                
                      </div>
  
                    </div>
                  </div>
                </div>

            </div>
          </div>

          <div className="col-md-10 mx-auto col-lg-5">
            <form className="p-4 p-md-5  rounded-3 bg-light shadow-sm">
              <h2 className="mb-4 text-center fw-bold">
                Contáctanos
              </h2>

              <div className="form-floating mb-3">
                <input
                  id="name"
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  required
                />
                <label htmlFor="name">Nombre</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="Correo electrónico"
                  required
                />
                <label htmlFor="phone">Telefono</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="Correo electrónico"
                  required
                />
                <label htmlFor="email">Correo</label>
              </div>

              <div className="form-floating mb-3">
                <textarea
                  id="message"
                  className="form-control"
                  placeholder="Escribe tu mensaje..."
                  style={{ height: "120px" }}
                  required
                ></textarea>
                <label htmlFor="message">Mensaje</label>
              </div>

              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Enviar
              </button>

              <hr className="my-4" />
              <small className="text-muted text-center d-block">
                ¡Tu mensaje será respondido lo antes posible!
              </small>
            </form>
          </div>
        </div>
          <div className="p-2 mb-4 bg-light rounded-3 position-relative" style={{ height: "400px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1950.5263977160305!2d-75.1866195!3d-12.1085383!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910e973c65a638af%3A0xf8883dda1984b6e1!2sPanaderia%20-%20Pasteleria%20D&#39;angela!5e0!3m2!1ses!2spe!4v1759986201850!5m2!1ses!2spe"
              className="position-absolute top-0 start-0 w-100 h-100 rounded-3 border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>                   
      </div>
    </>
  );
};
