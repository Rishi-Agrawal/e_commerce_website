
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import OShop from './Pages/OShop';
import OShopCategory from './Pages/OShopCategory';
import OProduct from './Pages/OProduct';
import OCart from './Pages/OCart';

import OLoginSignup from './Pages/OLoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'





function App() {
  return (
    <div >
      <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path='/' element={<OShop/>}/>
              <Route path='/mens' element={<OShopCategory banner={men_banner} category="men"/>}/>
              <Route path='/womens' element={<OShopCategory banner={women_banner} category="women"/>}/>
              <Route path='/kids' element={<OShopCategory banner ={kid_banner} category="kid"/>}/>
              <Route path="/product" element={<OProduct/>}>
              <Route path=':productId' element={<OProduct/>}/>
              </Route>
              <Route path='/cart' element={<OCart/>}/>
              <Route path='/login' element={<OLoginSignup/>}/>
          </Routes>
         <Footer/> 
      </BrowserRouter>
    </div>
  );
}

export default App;
