import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className="App bg-white">
     <Navbar/>
     <Banner/>
     <Gallery/>
     <Timeline/>
    </div>  
  );
}

export default App;
