import './App.css';
import PreNavbar from './component/PreNavbar';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import data from './data/data.json';
import Slider from './component/Slider.js';
import Offers from './component/Offers.js';
import Header from './component/Header.js';
import StarProduct from './component/StarProduct.js';
import HotAccessoriesMenu from './component/HotAccessoriesMenu.js';
import HotAccessories from './component/HotAccessories.js';
import ProductReview from './component/ProductReview.js';
import Video from './component/Video.js';
import Banner from './component/Banner.js';
import Footer from './component/Footer.js';
import NavOptions from './component/NavOptions.js';


function App() {
  return (
    <Router>
      <div className="App">
        <PreNavbar />
        <Navbar />
        <NavOptions miphones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitness={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} accessories={data.accessories} />
        
        <Slider start={data.banner.start} />
        <Offers offer={data.offer} />
        <Header text={"star products"} />
        <StarProduct item={data.starProduct} />
        <Header text={"HOT ACCESSORIES"} />
        <HotAccessoriesMenu />

        <Routes>
          <Route path="/" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />

          <Route path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />

          <Route path="/smartDevices" element={<HotAccessories music={data.hotAccessories.smartDevice} musicCover={data.hotAccessoriesCover.smartDevice} />} />

          <Route path="/home" element={<HotAccessories music={data.hotAccessories.home} musicCover={data.hotAccessoriesCover.home} />} />

          <Route path="/lifeStyle" element={<HotAccessories music={data.hotAccessories.lifeStyle} musicCover={data.hotAccessoriesCover.lifeStyle} />} />

          <Route path="/mobileAccessories" element={<HotAccessories music={data.hotAccessories.mobileAccessories} musicCover={data.hotAccessoriesCover.mobileAccessories} />} />
        </Routes>

        <Header text={"PRODUCT REVIEWS"} />
        <ProductReview data={data.productReviews} />
        <Header text={"VIDEOS"} />
        <Video data={data.videos}/>
        <Header text={"IN THE PRESS"} />
        <Banner end={ data.banner.end}/>
        <Footer data={data.footer}/>
      </div>
    </Router>
  );
}

export default App;
///