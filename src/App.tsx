import { Menu } from './components/containers/Menu'; //ambos tienen ques estar iguales mayuscula o minuscula
import { AppRouter } from './Router/AppRouter';
import { Footer } from './components/containers/Footer';
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
