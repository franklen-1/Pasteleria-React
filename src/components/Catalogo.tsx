import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Product from "./Products/Product";
import Cart from './Caritto/Cart';
import { useEffect, useState } from "react";
import { db } from "../data/db";
import type { CartItem, CartType } from "../types";



import './styles/Catalogo.css';

const MaxItem = 12;
const MinItem = 1;

import './styles/Catalogo.css';
export const Catalogo = () => {


const initialCart =(): CartItem [] => {
  const startedStoge = localStorage.getItem('cart');
  return startedStoge ? JSON.parse(startedStoge): [];
};

//obtener los datos de los prodcutos
  const [data] = useState<CartType[]>(db);
  const [cart, setCart] = useState<CartItem[]>(initialCart());


//contador del producto
const addToCart  = (item: CartType) => {
  setCart(prevCart => {
    const itemExist = prevCart.find(cartItem => cartItem.id === item.id);
      
    if (itemExist) {
      return prevCart.map(cartItem => 
        cartItem.id === item.id && cartItem.quantity < MaxItem
          ? {...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
        );
      }

    return [...prevCart,{...item, quantity:1}];
  });
};

//local storage de los datos
useEffect(() =>{
  localStorage.setItem('cart', JSON.stringify(cart));
}, [cart]);

//incrementar 
const increaseQuantity = (id: CartItem['id']) =>{
  setCart(prevCart =>
    prevCart.map(cartItem =>
      cartItem.id ===id && cartItem.quantity < MaxItem
      ? {...cartItem, quantity:cartItem.quantity + 1}
      :cartItem
    )
  );
};
//decrementar 
const decreaseQuantity = (id: CartItem['id']) =>{
  setCart(prevCart =>
    prevCart.map(cartItem =>
      cartItem.id ===id && cartItem.quantity > MinItem
      ? {...cartItem, quantity:cartItem.quantity - 1}
      :cartItem
    )
  );
};
// eliminar el producto
const destroyItem =(id:CartItem ['id']) => {
  setCart(prevCart => prevCart.filter(cartItem =>cartItem.id !==id));
}

const emptyCart =() => {
  setCart([]);
}


  return (
    <>
   

   <Cart 
      cart={cart} 
      increaseQuantity={increaseQuantity} 
      decreaseQuantity={decreaseQuantity} 
      destroyItem={destroyItem}
      emptyCart = {emptyCart}
   />



   {/* PORTADA */}

        <div className=" text-white portada ">
          <main className="portada-texto">
            <div className='text-center alinght-center p-5'>
                <h1 className="display-5 fw-bold lh-1 mb-3">Bienvenido a Pasteleria D'angela</h1>
                <p className="lead "> Un lugar donde cada postre cuenta una historia. Aquí encontrarás una amplia variedad de tortas, cupcakes, galletas, tartas y bocaditos, todos elaborados con ingredientes frescos y mucho amor.  </p>
                 
                <p className="lead"><a href="#" className="btn btn-lg btn-secondary fw-bold border-white bg-white text-dark"
                  >Ver nuestra historia</a>
                </p>
            </div>
          </main>
        </div>

{/* conteiner de los productos */}
        <div className="album py-5 bg-light">
          <div className="container">
              <h2 className="pb-3 border-bottom">Productos</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-1">
                
          {data.map(item => (<Product key={item.id} item={item} addToCart={addToCart} cart={[]}/>))}
            </div>
          </div>
        </div>

    </>
  );
};
