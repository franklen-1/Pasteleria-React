import "./styles/Contacto.css";
export const Contacto = () => {
  return (
    <>
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 mb-3">
              ¡Contáctanos en Dulces Helen!
            </h1>
            <p className="col-lg-10 fs-4">
              ¿Tienes alguna duda, un pedido especial o quieres que preparemos
              algo dulce para ti? En Dulces Helen estamos felices de atenderte y
              hacer tus momentos más dulces y especiales.
            </p>
            <div
              className="contact-card  p-2 rounded-4 "
              style={{ maxWidth: "450px" }}
            >
              <div className="mb-3">
                <i className="bi bi-telephone-fill me-2 fs-5 text-danger"></i>
                <span className="fs-5">+51 953 345 321</span>
              </div>
              <div className="mb-3">
                <i className="bi bi-envelope-fill me-2 fs-5 text-danger"></i>
                <span className="fs-5">Contacto@dulceshelen.com</span>
              </div>
              <div>
                <i className="bi bi-geo-alt-fill me-2 fs-5 text-danger"></i>
                <span className="fs-5">
                  Av. Huracan 23, Sapallanga, Huancayo
                </span>
              </div>
            </div>
          </div>

          <div className="col-md-10 mx-auto col-lg-5">
            <form className="p-4 p-md-5 border rounded-3 bg-light shadow-sm">
              <h2 className="mb-4 text-center text-primary fw-bold">
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
      </div>
    </>
  );
};
