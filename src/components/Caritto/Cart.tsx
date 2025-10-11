import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Cart.css";
import type { CartItem } from "../../types";
import { useMemo } from "react";

type CartProps = {
  cart: CartItem[];
  increaseQuantity: (id: CartItem["id"]) => void;
  decreaseQuantity: (id: CartItem["id"]) => void;
  destroyItem: (id: CartItem["id"]) => void;
  emptyCart: () => void;
};

const Cart = ({
  cart,
  increaseQuantity,
  decreaseQuantity,
  destroyItem,
  emptyCart,
}: CartProps) => {
  //mensaje de vacio
  const isEmpty = cart.length === 0;
  //contado de productos
  const cartCount = cart.length;
  // calcularo total de precio y cantidad
  const total = useMemo(
    () => cart.reduce((total, item) => total + item.quantity * item.price, 0),
    [cart]
  );

  return (
    <>
      {/* modal */}

      <div className="container text-center mt-5   position-fixed"
      style={{
        bottom: "20px",
        right: "20px",
        width: "60px",
        height: "60px",
        zIndex: 1000,
      }}>
          <button 
            type="button"
            className="btn  btn-light position-relative rounded-circle d-flex align-items-center justify-content-center"
            data-bs-toggle="modal"
            data-bs-target="#miModal"
            style={{ width: "50px", height: "50px", color:"#D90D58" }}
          >
            <i className="bi bi-bag-fill fs-5"></i>
            {cartCount > 0 && (
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                style={{ fontSize: "0.7rem" }}
              >
                {cartCount}
              </span>
            )}
          </button>
      </div>

      <div
        className="modal fade"
        id="miModal"
        tabIndex={-1}
        aria-labelledby="miModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="miModalLabel">
                Carrito de compras
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Cerrar"
              ></button>
            </div>

            <div className="modal-body">
              {/*  */}
              <div className="carrito">
                <div className="carrito d-flex">
                  <div className="btn-cart">
                    <div className="cart">
                      <div className="cart-responsive">
                        <div className="container text-center">
                          <div className="row">
                            <div className="col text-secondary">Imagen</div>
                            <div className="col text-secondary">Descripción</div>
                            <div className="col text-secondary">Precio</div>
                            <div className="col text-secondary">Cantidad</div>
                            <div className="col text-secondary">Acción</div>

                            {isEmpty ? (
                              <h5
                                className="modal-title emptyCard"
                                id="miModalLabel"
                              >
                                El carrito esta vacio
                              </h5>
                            ) : (
                              <>
                                <div className="container">
                                  {cart.map((item) => (
                                    <div
                                      key={item.id}
                                      className="row align-items-center border rounded mb-3 p-2"
                                    >
                                      {/* Imagen */}
                                      <div className="col-2">
                                        <img
                                          className="img-fluid rounded"
                                          src={`/img/products/${item.image}.jpg`}
                                          alt={item.name}
                                        />
                                      </div>

                                      {/* Nombre del producto */}
                                      <div className="col-3">
                                        <h6 className="mb-0">{item.name}</h6>
                                      </div>

                                      {/* Precio */}
                                      <div className="col-2 text-center">
                                        <span>S/{item.price}</span>
                                      </div>

                                      {/* Cantidad con botones */}
                                      <div className="col-3 d-flex align-items-center justify-content-center">
                                     <button
                                        className="btn btn-light rounded-circle border d-flex align-items-center justify-content-center"
                                        style={{ width: "30px", height: "30px" }}
                                        onClick={() => decreaseQuantity(item.id)}
                                      >
                                        -
                                      </button>

                                        <span className="mx-2">
                                          {item.quantity}
                                        </span>

                                        <button
                                          className="btn btn-light rounded-circle border d-flex align-items-center justify-content-center"
                                          style={{ width: "30px", height: "30px" }}
                                          onClick={() =>
                                            increaseQuantity(item.id)
                                          }
                                        >
                                          +
                                        </button>
                                      </div>

                                      {/* Botón eliminar */}
                                      <div className="col-2 text-end">
                                        <button
                                          className="btn btn-outline-danger rounded-circle border"
                                          onClick={() => destroyItem(item.id)}
                                        >
                                          <i className="bi bi-trash-fill"></i>
                                        </button>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                                <div>
                                      <h4 className="heading-total text-end text-primary-emphasis">
                                        Total:{" "}
                                        <span id="total">
                                          S/. {total.toFixed(2)}
                                        </span>
                                      </h4>                              
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={emptyCart}
              >
                limpiar carrito
              </button>

              <a href="/checkout">
               <button type="button" className="btn btn-primary">
                Comprar{" "}
              </button>
              </a>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
