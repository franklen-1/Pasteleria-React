// src/components/CartButton.tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // si usas React Router
import "bootstrap-icons/font/bootstrap-icons.css";

export const CartButton = () => {
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Leer el carrito desde localStorage
    const storedCart = localStorage.getItem("cart");
    const cart = storedCart ? JSON.parse(storedCart) : [];
    setCartCount(cart.reduce((acc: number, item: any) => acc + item.quantity, 0));

    // Escuchar cambios del carrito en toda la app
    const handleStorageChange = () => {
      const updatedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartCount(updatedCart.reduce((acc: number, item: any) => acc + item.quantity, 0));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <button
      className="btn btn-outline-dark position-relative"
      onClick={() => navigate("/catalogo")} // o la ruta donde está tu carrito completo
    >
      <i className="bi bi-cart"></i>
      {cartCount > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {cartCount}
        </span>
      )}
    </button>
  );
};

export default CartButton;
