import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import type { CartType } from '../../types';
import "./Product.css";

type ProductProps ={
  item: CartType;
  addToCart: (item: CartType) => void;
};


const Product = ({item, addToCart}:ProductProps) =>{
  return (
    <>
<div className="p-2">
  <div className="card border-0 shadow-lg rounded-4 overflow-hidden product-card">
    <img
      src={`/img/products/${item.image}.jpg`}
      alt={item.name}
      className="card-img-top img-fluid"
    />

    <div className="card-body text-center">
      <h5 className="card-title fw-semibold text-dark mb-2">{item.name}</h5>
      <p className="text-muted small mb-3">{item.description}</p>

      <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
        <span className="text-muted text-decoration-line-through small">
          S/ 35.00
        </span>
        <span id="currentPrice" className="text-price fw-bold fs-5">
          {item.price}
        </span>
      </div>

      <button
        onClick={() => addToCart(item)}
        className="btn btn-add "
        type="button"
      >
        <i className="bi bi-cart-plus me-2"></i>
        Agregar
      </button>
    </div>
  </div>
</div>

    </>
  )
}

export default Product