import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Timeline from './components/Timeline';
import Shop from './components/Shop';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-white">
     <Navbar/>
     <Banner/>
     <Gallery/>
     <Timeline/>
     <Shop/>
     <Footer/>

     {/* Routs */}
     {/* <BrowserRouter>
        <Routes>
          <Route path='shoping-cart' element={<ShopingCart/>} />
        </Routes>
     </BrowserRouter> */}
    </div>  
  );
}

export default App;
