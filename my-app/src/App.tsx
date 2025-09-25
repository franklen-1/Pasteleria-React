import { Menu } from './components/Menu'; //ambos tienen ques estar iguales mayuscula o minuscula
import { AppRouter } from './Router/AppRouter';
import { Footer } from './components/Footer';

import './App.css'


function App() {
      
  return (
    <>
      <Menu></Menu>
      <AppRouter></AppRouter>
      <Footer></Footer>
    </>
  )
}

export default App;
