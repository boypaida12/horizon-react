
import './App.css';
import { Carousel } from './components/Carousel';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PricePackages from './components/PricePackages';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      <PricePackages/>
      <Footer/>
    </div>
  );
}

export default App;
