import data from './images/ImageSlider/data'
import RenderSlider from './components/Homepage/ImgSlider/RenderSlider'
import NavBar from './components/Navigation/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <RenderSlider
          props = {data}
      />
    </div>
  );
}

export default App;
