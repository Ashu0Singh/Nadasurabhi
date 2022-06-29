import data from './images/ImageSlider/data'
import RenderSlider from './components/Homepage/ImgSlider/RenderSlider'
import NavBar from './components/Navigation/NavBar';
import HeroSection from './components/Homepage/HeroSection/HeroSection';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <RenderSlider
          props = {data}
      />
    </div>
  );
}

export default App;
