import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Cancel from './pages/Cancel';
import Success from './pages/Success';

function App() {
  return (
    <div className="App bg-white">
     {/* Routs */}
     <BrowserRouter>
        <Routes>
          <Route index element={<Landing/>}/>
          <Route path='cancel' element={<Cancel/>} />
          <Route path='success' element={<Success/>} />
        </Routes>
     </BrowserRouter>
    </div>  
  );
}

export default App;
