
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Product from "./Products/Product";
import Cart from './Caritto/Cart';
import { useEffect, useState } from "react";
import { db } from "../data/db";
import type { CartItem, CartType } from "../types";
import './styles/Inicio.css';


//variable para el contador maximo
const MaxItem = 12;
const MinItem = 1;

export const Inicio = () => {

// contenedor de local storage
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


{/* ==============CAROUSEL======================= */}
<div id="carouselExampleDark" className="carousel carousel-dark slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="/img/4.png" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h2 className="text-white">Tradición y Sabor</h2>
        <p className="text-white">Endulzamos tus momentos más especiales con recetas únicas, hechas con amor y los mejores ingredientes.</p>
        <p className="text-white">✨ Siente la magia en cada bocado.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="/img/5.png" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h2 className="text-white">Variedad para Todos los Gustos</h2>
        <p className="text-white">Tortas, cupcakes, postres fríos y más.Cada creación es un detalle lleno de dulzura y arte.</p>
        <p className="text-white">💖 Hecho a mano, con pasión.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/img/6.png" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h2 className="text-white">Celebra con Nosotros</h2>
        <p className="text-white">Cumpleaños, bodas o simplemente un antojo,En D’Angela tenemos el postre perfecto para ti.</p>
        <p className="text-white">🎉 Convierte cualquier día en una ocasión especial.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
             
         
{/* ==============SOBRE NOSOTROS======================= */}

  <div className="container marketing">
    <div className="row ">
      <div className="col-lg-4">
        <li className="bi bi-fork-knife"  style={{ listStyle: "none", color:'#D90D58', fontSize: '50px'  }}></li>
        {/* <h2 className="fs-4"style={{ listStyle: "none", color:'#a5a4a5ff' }}>Sabor auténtico</h2> */}
        <p className="lead">Sabor auténtico</p>

      </div>
      <div className="col-lg-4">
        <i className="bi bi-fire"  style={{ listStyle: "none", color:'#D90D58', fontSize: '50px'  }}></i>
        <p className="lead">Creatividad en cada detalle</p>
      </div>
      <div className="col-lg-4">
        <i className="bi bi-balloon-heart-fill"  style={{ listStyle: "none", color:'#D90D58', fontSize: '50px'  }}></i>
        <p className="lead">Cercanía con el cliente</p>
      </div>
    </div>


{/* Cards*/}
  <div className="container px-4 py-5" id="custom-cards">
    <h2 className="pb-2 border-bottom">Categorias</h2>

    <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div className="col">
        <div className=" card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ backgroundImage: "url('./img/categoria/1.png')" }}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1"  onClick={() => window.location.href = "/catalogo"}>
            <h2 className="pt-5 mt-5 text-white mb-4 display-6 lh-1 fw-bold">Tortas</h2>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cookie" viewBox="0 0 16 16">
                  <path d="M6 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m4.5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                  <path d="M8 0a7.96 7.96 0 0 0-4.075 1.114q-.245.102-.437.28A8 8 0 1 0 8 0m3.25 14.201a1.5 1.5 0 0 0-2.13.71A7 7 0 0 1 8 15a6.97 6.97 0 0 1-3.845-1.15 1.5 1.5 0 1 0-2.005-2.005A6.97 6.97 0 0 1 1 8c0-1.953.8-3.719 2.09-4.989a1.5 1.5 0 1 0 2.469-1.574A7 7 0 0 1 8 1c1.42 0 2.742.423 3.845 1.15a1.5 1.5 0 1 0 2.005 2.005A6.97 6.97 0 0 1 15 8c0 .596-.074 1.174-.214 1.727a1.5 1.5 0 1 0-1.025 2.25 7 7 0 0 1-2.51 2.224Z"/>
                </svg>        
              </li>
              {/* <li className="d-flex align-items-center me-3">
                <i className="bi-geo-fill me-3" style={{ width:"1", height:"1.4em" }}></i>
                <small>Tortas</small>
              </li> */}
              <li className="d-flex align-items-center">
                <i className="bi-calendar3 me-3" style={{ width:"1", height:"1.4em" }}></i>
                {/* <small>3d</small> */}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ backgroundImage: "url('./img/categoria/2.png')" }}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1 " onClick={() => window.location.href = "/catalogo"}>
            <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-white">Postres</h2>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cookie" viewBox="0 0 16 16">
                  <path d="M6 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m4.5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                  <path d="M8 0a7.96 7.96 0 0 0-4.075 1.114q-.245.102-.437.28A8 8 0 1 0 8 0m3.25 14.201a1.5 1.5 0 0 0-2.13.71A7 7 0 0 1 8 15a6.97 6.97 0 0 1-3.845-1.15 1.5 1.5 0 1 0-2.005-2.005A6.97 6.97 0 0 1 1 8c0-1.953.8-3.719 2.09-4.989a1.5 1.5 0 1 0 2.469-1.574A7 7 0 0 1 8 1c1.42 0 2.742.423 3.845 1.15a1.5 1.5 0 1 0 2.005 2.005A6.97 6.97 0 0 1 15 8c0 .596-.074 1.174-.214 1.727a1.5 1.5 0 1 0-1.025 2.25 7 7 0 0 1-2.51 2.224Z"/>
                </svg>  
              </li>
              {/* <li className="d-flex align-items-center me-3">
                <i className="bi-geo-fill me-3" style={{ width:"1", height:"1.4em" }}></i>

                <small>Postres</small>
              </li> */}
              <li className="d-flex align-items-center">
                <i className="bi-calendar3 me-3" style={{ width:"1", height:"1.4em" }}></i>

                {/* <small>4d</small> */}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ backgroundImage: "url('./img/categoria/3.png')" }}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1" onClick={() => window.location.href = "/catalogo"}>
            <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-white">Panadería</h2>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cookie" viewBox="0 0 16 16">
                  <path d="M6 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m4.5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                  <path d="M8 0a7.96 7.96 0 0 0-4.075 1.114q-.245.102-.437.28A8 8 0 1 0 8 0m3.25 14.201a1.5 1.5 0 0 0-2.13.71A7 7 0 0 1 8 15a6.97 6.97 0 0 1-3.845-1.15 1.5 1.5 0 1 0-2.005-2.005A6.97 6.97 0 0 1 1 8c0-1.953.8-3.719 2.09-4.989a1.5 1.5 0 1 0 2.469-1.574A7 7 0 0 1 8 1c1.42 0 2.742.423 3.845 1.15a1.5 1.5 0 1 0 2.005 2.005A6.97 6.97 0 0 1 15 8c0 .596-.074 1.174-.214 1.727a1.5 1.5 0 1 0-1.025 2.25 7 7 0 0 1-2.51 2.224Z"/>
                </svg>  
              {/* <i className="bi bi-basket-fill rounded-circle border border-white"style={{width:'32', height:'32'}}></i> */}
              </li>
              {/* <li className="d-flex align-items-center me-3">
                <i className="bi-geo-fill me-3" style={{ width:"1", height:"1.4em" }}></i>

                <small>Panaderia</small>
              </li> */}
              <li className="d-flex align-items-center">
                <i className="bi-calendar3 me-3" style={{ width:"1", height:"1.4em" }}></i>
                {/* <small>5d</small> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
 {/* Cards*/}

    <div className="row featurette">
      <div className="col-md-7">
        
        <h2 className="featurette-heading">6 Años de excelencia </h2>
        <h3 className="text-muted">Pasteleria D'angela</h3>
        <p className="lead">Nacimos con el sueño de compartir momentos dulces y especiales. Desde el primer día, nuestra pasión ha sido crear postres que combinan tradición, creatividad y un toque casero que se siente en cada bocado. Lo que comenzó como una pequeña ilusión, hoy es un espacio donde cada cliente puede disfrutar sabores únicos y sentirse como en casa.</p>
      </div>
      <div className="col-md-5">
        <img src="./img/about-person.png" className="d-block mx-lg-auto img-fluid bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" alt="Bootstrap Themes" width="500" height="500" loading="lazy"/>
      </div>
    </div>
  </div>
{/* carrito */} 
   <Cart 
      cart={cart} 
      increaseQuantity={increaseQuantity} 
      decreaseQuantity={decreaseQuantity} 
      destroyItem={destroyItem}
      emptyCart = {emptyCart}
   />



{/* Gallery de productos */}
  <div className="album py-5 bg-light">

    <div className="container">
        <h2 className="pb-3 border-bottom">Productos</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-1">
          
     {data.map(item => (
       <Product key={item.id} item={item} addToCart={addToCart} cart={[]} />
     ))}
      </div>
    </div>
  </div>


{/* Gallery */}
  <div className="b-example-divider"></div>

  <div className="container px-4 py-5" id="icon-grid">
    <h2 className="pb-2 border-bottom">Beneficios de la pastelería</h2>

    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
      <div className="col d-flex align-items-start">
        <i className="bi icon-b bi-cookie  flex-shrink-0 me-3" style={{ width:"1.75em", height:"1.75em" }}></i>

        <div>
          <h4 className="fw-bold mb-0">Ingredientes frescos</h4>
          <p>Usamos productos de la mejor calidad en cada preparación.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <i className="bi icon-b bi-truck flex-shrink-0 me-3" style={{ width:"1.75em", height:"1.75em" }}></i>

        <div>
          <h4 className="fw-bold mb-0">Pedidos personalizados</h4>
          <p>Diseñamos tortas y postres únicos para tu ocasión especial.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <i className="bi icon-b bi-house  flex-shrink-0 me-3" style={{ width:"1.75em", height:"1.75em" }}></i>

        <div>
          <h4 className="fw-bold mb-0">Entrega a domicilio</h4>
          <p>Llevamos la dulzura de Pasteleria D’Angela directo a tu puerta.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <i className="bi icon-b bi-flower1  flex-shrink-0 me-3" style={{ width:"1.75em", height:"1.75em" }}></i>

        <div>
          <h4 className="fw-bold mb-0">Opciones saludables</h4>
          <p>Contamos con alternativas sin azúcar, sin gluten y veganas.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <i className="bi icon-b bi-star-fill flex-shrink-0 me-3" style={{ width:"1.75em", height:"1.75em" }}></i>

        <div>
          <h4 className="fw-bold mb-0">Atención cercana</h4>
          <p>Te acompañamos en cada detalle de tu pedido.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <i className="bi icon-b bi-backpack3  flex-shrink-0 me-3" style={{ width:"1.75em", height:"1.75em" }}></i>

        <div>
          <h4 className="fw-bold mb-0">Variedad de sabores</h4>
          <p>Desde lo clásico hasta lo innovador, tenemos algo para cada gusto.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <i className="bi icon-b bi-cake2-fill flex-shrink-0 me-3" style={{ width:"1.75em", height:"1.75em" }}></i>

        <div>
          <h4 className="fw-bold mb-0">Decoración creativa</h4>
          <p>Diseños únicos y personalizados que hacen de cada postre una obra de arte.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <i className="bi icon-b bi-emoji-sunglasses-fill  flex-shrink-0 me-3" style={{ width:"1.75em", height:"1.75em" }}></i>
        <div>
          <h4 className="fw-bold mb-0">Experiencia garantizada</h4>
          <p>Más de 6 años endulzando momentos especiales con clientes felices.</p>
        </div>
      </div>
    </div>
  </div>

{/* reseñas */}
<section className="container-all">

  <div className="container pt-5 pb-5">
      <h2 className="pb-3 border-bottom">Reseñas de nuestros clientes</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-1 pb-5"></div>
    <div className="row">

   
      <div className="col-md-4">
        <div className="card h-100 shadow border-0">
          <div className="card-body text-center">
                <div className="col text-center">
                      <img src="img/heroes/client1.jpg" alt="Foto de perfil" className="rounded-circle mb-3 shadow" width="80px" height="80px"/>
                </div>
            <p className="card-text">“La mejor pastelería de la ciudad. Los pasteles son deliciosos y siempre frescos. Encargué una torta personalizada y quedó perfecta, tanto en sabor como en diseño.”</p>
            <h5 className="card-title mt-3">Ana López</h5>
            <p className="text-warning mb-0">★★★★★</p>
          </div>
        </div>
      </div>


      <div className="col-md-4">
        <div className="card h-100 shadow border-0">
          <div className="card-body text-center">
            <div className="col text-center">
                  <img src="img/heroes/client2.jpg" alt="Foto de perfil" className="rounded-circle mb-3 shadow" width="80px" height="80px"/>
            </div>
            <p className="card-text">“Excelente atención y presentación. Probé los cupcakes y fue amor a primera mordida. Se nota que todo está hecho con dedicación.”</p>
            <h5 className="card-title mt-3">María Fernández</h5>
            <p className="text-warning mb-0">★★★★☆</p>
          </div>
        </div>
      </div>

     
      <div className="col-md-4">
        <div className="card h-100 shadow border-0">
          <div className="card-body text-center">
            <div className="col text-center">
                  <img src="img/heroes/client3.jpg" alt="Foto de perfil" className="rounded-circle mb-3 shadow" width="80px" height="80px"/>
            </div>
                <p className="card-text">“Siempre compro aquí para mis celebraciones. D’Angela nunca decepciona: los postres son suaves, dulces en su punto y hermosos. ¡Recomendadísimo!”</p>
            <h5 className="card-title mt-3">Carlos Pérez</h5>
            <p className="text-warning mb-0">★★★★★</p>
          </div>
        </div>
      </div>

    </div>
</div>
</section>
   </>
  )
}