import {Route, Routes } from "react-router-dom";
import {Inicio} from '../components/Inicio'
import {Nosotros} from '../components/Nosotros'
import {Contacto} from '../components/Contacto'
   
   export const AppRouter =() =>{
    return(
      <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/nosotros" element={<Nosotros/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="/*" element={ <h1>Error 404</h1> }/>
      </Routes>
    )
   }
 