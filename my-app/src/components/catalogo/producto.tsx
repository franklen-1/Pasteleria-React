import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
// import React from 'react';

// import {button} from "react-dom";

import './NavBar.css'
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Playball&display=swap" rel="stylesheet"></link>

// import {Link} from 'react-router-dom';
function producto() {

  return (
    <>   
   
   
   <div className="py-5 text-center">
      <img className="d-block mx-auto mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
      <h2>Checkout div</h2>
      <p className="lead">Below is an example div built entirely with Bootstrap’s div controls. Each required div group has a validation state that can be triggered by attempting to submit the div without completing it.</p>
    </div>

    <div className="row g-5">
      <div className="col-md-5 col-lg-4 order-md-last">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-primary">Your cart</span>
          <span className="badge bg-primary rounded-pill">3</span>
        </h4>
        <ul className="list-group mb-3">
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Product name</h6>
              <small className="text-muted">Brief description</small>
            </div>
            <span className="text-muted">$12</span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Second product</h6>
              <small className="text-muted">Brief description</small>
            </div>
            <span className="text-muted">$8</span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Third item</h6>
              <small className="text-muted">Brief description</small>
            </div>
            <span className="text-muted">$5</span>
          </li>
          <li className="list-group-item d-flex justify-content-between bg-light">
            <div className="text-success">
              <h6 className="my-0">Promo code</h6>
              <small>EXAMPLECODE</small>
            </div>
            <span className="text-success">−$5</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span>
            <strong>$20</strong>
          </li>
        </ul>

        <div className="card p-2">
          <div className="input-group">
            <input type="text" className="div-control" placeholder="Promo code"/>
            <button type="submit" className="btn btn-secondary">Redeem</button>
          </div>
        </div>
      </div>
      <div className="col-md-7 col-lg-8">
        <h4 className="mb-3">Billing address</h4>
        <div className="needs-validation" >
          <div className="row g-3">
            <div className="col-sm-6">
              <label htmlFor="firstName" className="div-label">First name</label>
              <input type="text" className="div-control" id="firstName" placeholder="" value="" required/>
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div className="col-sm-6">
              <label htmlFor="lastName" className="div-label">Last name</label>
              <input type="text" className="div-control" id="lastName" placeholder="" value="" required/>
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="username" className="div-label">Username</label>
              <div className="input-group has-validation">
                <span className="input-group-text">@</span>
                <input type="text" className="div-control" id="username" placeholder="Username" required/>
              <div className="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="email" className="div-label">Email <span className="text-muted">(Optional)</span></label>
              <input type="email" className="div-control" id="email" placeholder="you@example.com"/>
              <div className="invalid-feedback">
                Please enter a valid email address htmlFor shipping updates.
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="address" className="div-label">Address</label>
              <input type="text" className="div-control" id="address" placeholder="1234 Main St" required/>
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="address2" className="div-label">Address 2 <span className="text-muted">(Optional)</span></label>
              <input type="text" className="div-control" id="address2" placeholder="Apartment or suite"/>
            </div>

            <div className="col-md-5">
              <label htmlFor="country" className="div-label">Country</label>
              <select className="div-select" id="country" required>
                <option value="">Choose...</option>
                <option>United States</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid country.
              </div>
            </div>

            <div className="col-md-4">
              <label htmlFor="state" className="div-label">State</label>
              <select className="div-select" id="state" required>
                <option value="">Choose...</option>
                <option>CalihtmlFornia</option>
              </select>
              <div className="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>

            <div className="col-md-3">
              <label htmlFor="zip" className="div-label">Zip</label>
              <input type="text" className="div-control" id="zip" placeholder="" required/>
              <div className="invalid-feedback">
                Zip code required.
              </div>
            </div>
          </div>

          <hr className="my-4"/>

          <div className="div-check">
            <input type="checkbox" className="div-check-input" id="same-address"/>
            <label className="div-check-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
          </div>

          <div className="div-check">
            <input type="checkbox" className="div-check-input" id="save-info"/>
            <label className="div-check-label" htmlFor="save-info">Save this indivation htmlFor next time</label>
          </div>

          <hr className="my-4"/>

          <h4 className="mb-3">Payment</h4>

          <div className="my-3">
            <div className="div-check">
              <input id="credit" name="paymentMethod" type="radio" className="div-check-input" checked required/>
              <label className="div-check-label" htmlFor="credit">Credit card</label>
            </div>
            <div className="div-check">
              <input id="debit" name="paymentMethod" type="radio" className="div-check-input" required/>
              <label className="div-check-label" htmlFor="debit">Debit card</label>
            </div>
            <div className="div-check">
              <input id="paypal" name="paymentMethod" type="radio" className="div-check-input" required/>
              <label className="div-check-label" htmlFor="paypal">PayPal</label>
            </div>
          </div>

          <div className="row gy-3">
            <div className="col-md-6">
              <label htmlFor="cc-name" className="div-label">Name on card</label>
              <input type="text" className="div-control" id="cc-name" placeholder="" required/>
              <small className="text-muted">Full name as displayed on card</small>
              <div className="invalid-feedback">
                Name on card is required
              </div>
            </div>

            <div className="col-md-6">
              <label htmlFor="cc-number" className="div-label">Credit card number</label>
              <input type="text" className="div-control" id="cc-number" placeholder="" required/>
              <div className="invalid-feedback">
                Credit card number is required
              </div>
            </div>

            <div className="col-md-3">
              <label htmlFor="cc-expiration" className="div-label">Expiration</label>
              <input type="text" className="div-control" id="cc-expiration" placeholder="" required/>
              <div className="invalid-feedback">
                Expiration date required
              </div>
            </div>

            <div className="col-md-3">
              <label htmlFor="cc-cvv" className="div-label">CVV</label>
              <input type="text" className="div-control" id="cc-cvv" placeholder="" required/>
              <div className="invalid-feedback">
                Security code required
              </div>
            </div>
          </div>

          <hr className="my-4"/>

          <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
        </div>
      </div>
    </div>


  <footer className="my-5 pt-5 text-muted text-center text-small">
    <p className="mb-1">&copy; 2017–2021 Company Name</p>
    <ul className="list-inline">
      <li className="list-inline-item"><a href="#">Privacy</a></li>
      <li className="list-inline-item"><a href="#">Terms</a></li>
      <li className="list-inline-item"><a href="#">Support</a></li>
    </ul>
  </footer>



    </>
  )
}

export default producto;