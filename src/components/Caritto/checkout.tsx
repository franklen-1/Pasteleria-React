

export default function Checkout() {

  return (
<>


<div className="container">

    <div className="py-5 text-center">
      <h2>Formulario de Pago</h2>
      <p className="lead">Por favor, ingresa tu información de pago.
Todos los datos serán tratados de forma confidencial y segura.</p>
    </div>

    <div className="row g-5">
      <div className="col-md-5 col-lg-4 order-md-last">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-primary">Tu carrito</span>
          <span className="badge bg-primary rounded-pill">3</span>
        </h4>
        <ul className="list-group mb-3">
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Nombre de Producto</h6>
              <small className="text-muted">Torta bararois</small>
            </div>
            <span className="text-muted">S/. 49</span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Segundo producto</h6>
              <small className="text-muted">Torta Deliciafresa</small>
            </div>
            <span className="text-muted">S/. 29</span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Tercer producto</h6>
              <small className="text-muted">Torta Pecanas</small>
            </div>
            <span className="text-muted">S/. 39</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span>Total (Soles)</span>
            <strong>S/. 117</strong>
          </li>
        </ul>

        <form className="card p-2">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Promo CODIGO"/>
            <button type="submit" className="btn btn-secondary">Verificar</button>
          </div>
        </form>
      </div>
      <div className="col-md-7 col-lg-8">
        <h4 className="mb-3">Dirección de Envio</h4>
       
          <div className="row g-3">
            <div className="col-sm-6">
              <label htmlFor="firstName" className="form-label">Nombre de pila</label>
              <input type="text" className="form-control" id="firstName" placeholder="" value="" required/>
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div className="col-sm-6">
              <label htmlFor="lastName" className="form-label">Apellido</label>
              <input type="text" className="form-control" id="lastName" placeholder="" value="" required/>
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            {/* <div className="col-12">
              <label htmlFor="username" className="form-label">Nombre de usuario</label>
              <div className="input-group has-validation">
                <span className="input-group-text">@</span>
                <input type="text" className="form-control" id="username" placeholder="Username" required/>
              <div className="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div> */}

            <div className="col-12">
              <label htmlFor="email" className="form-label">Correo <span className="text-muted">(Optional)</span></label>
              <input type="email" className="form-control" id="email" placeholder="tucorreo@example.com"/>
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="address" className="form-label">Direccion</label>
              <input type="text" className="form-control" id="address" placeholder="1234 - Chilca" required/>
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="address2" className="form-label">Direccion 2 <span className="text-muted">(Optional)</span></label>
              <input type="text" className="form-control" id="address2" placeholder="Apartamento o suite"/>
            </div>

            {/* <div className="col-md-5">
              <label htmlFor="country" className="form-label">Country</label>
              <select className="form-select" id="country" required>
                <option value="">Choose...</option>
                <option>United States</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid country.
              </div>
            </div> */}

            <div className="col-md-4">
              <label htmlFor="state" className="form-label">Ciudad</label>
              <select className="form-select" id="state" required>
                <option value="">Escoger...</option>
                <option>California</option>
              </select>
              <div className="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>

            <div className="col-md-3">
              <label htmlFor="zip" className="form-label">Codigo postal</label>
              <input type="text" className="form-control" id="zip" placeholder="" required/>
              <div className="invalid-feedback">
                Zip code required.
              </div>
            </div>
          </div>

          <hr className="my-4"/>

          {/* <div className="form-check">
            <input type="checkbox" className="form-check-input" id="same-address"/>
            <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
          </div>

          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="save-info"/>
            <label className="form-check-label" htmlFor="save-info">Save this information for next time</label>
          </div> */}

          <hr className="my-4"/>

          <h4 className="mb-3">Metodo de pago</h4>

          <div className="my-3">
            <div className="form-check">
              <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked required/>
              <label className="form-check-label" htmlFor="credit">Tarjeta de crédito</label>
            </div>
            <div className="form-check">
              <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required/>
              <label className="form-check-label" htmlFor="debit">Yape</label>
            </div>
            <div className="form-check">
              <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required/>
              <label className="form-check-label" htmlFor="paypal">Plin</label>
            </div>
          </div>

          <div className="row gy-3">
            <div className="col-md-6">
              <label htmlFor="cc-name" className="form-label">Nombre en la tarjeta</label>
              <input type="text" className="form-control" id="cc-name" placeholder="" required/>
              <small className="text-muted">Nombre completo tal como aparece en la tarjeta</small>
              <div className="invalid-feedback">
                Se requiere el nombre en la tarjeta
              </div>
            </div>

            <div className="col-md-6">
              <label htmlFor="cc-number" className="form-label">Número de Tarjeta de Crédito</label>
              <input type="text" className="form-control" id="cc-number" placeholder="" required/>
              <div className="invalid-feedback">
                Se requiere el nombre en la tarjeta
              </div>
            </div>

            <div className="col-md-3">
              <label htmlFor="cc-expiration" className="form-label">Vencimiento</label>
              <input type="text" className="form-control" id="cc-expiration" placeholder="" required/>
              <div className="invalid-feedback">
               Se requiere el nombre en la tarjeta
              </div>
            </div>

            <div className="col-md-3">
              <label htmlFor="cc-cvv" className="form-label">CVV</label>
              <input type="text" className="form-control" id="cc-cvv" placeholder="" required/>
              <div className="invalid-feedback">
                Se requiere código de seguridad
              </div>
            </div>
          </div>

          <hr className="my-4"/>

          <button className="w-100 btn btn-primary btn-lg" type="submit">Continuar con el pago</button>
     
      </div>
    </div>



</div>


</>
  );
}
