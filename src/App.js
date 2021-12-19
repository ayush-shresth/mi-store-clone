
import './App.css';
import PreNavbar from './component/PreNavbar';
import Navbar from './component/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import data from './data/data.json';
import Slider from './component/Slider.js';
import Offers from './component/Offers.js';
import Header from './component/Header.js';



function App() {
  return (
    <Router>
      <div className="App">
        <PreNavbar />
        <Navbar />
        <Slider start={data.banner.start} />
        <Offers offer={data.offer} />
        <Header text={"star products"} />
       
      </div>
    </Router>
  );
}

export default App;
