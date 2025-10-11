import {Route, Routes } from "react-router-dom";
import {Inicio} from '../components/Inicio'
import {Nosotros} from '../components/Nosotros'
import {Contacto} from '../components/Contacto'
import { Catalogo } from "../components/Catalogo";
import Checkout from "../components/Caritto/checkout";




   export const AppRouter =() =>{
    return(
      <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/catalogo" element={<Catalogo/>}/>
          <Route path="/nosotros" element={<Nosotros/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="/checkout" element={ <Checkout /> }/>          
          <Route path="/*" element={ <h1>Error 404</h1> }/>
      </Routes>
    )
   }
 