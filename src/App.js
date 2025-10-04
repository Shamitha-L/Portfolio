import logo from './logo.svg';
import './App.css';
import Header from './Components/header';
import Footer from './Components/footer';
import Firstsection from './Components/firstsection';
import ImageSlider from './Components/imageslider';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <div className='inside-wrapper'>
          <Header />
          <div className='main-container'>
            <div className='body-wrapper'>
              <Firstsection />
              <ImageSlider />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
