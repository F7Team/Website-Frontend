import './App.css';
import About from './components/about/About';
import FirstAbout from './components/about/FirstAbout';
import PersonSlider from './components/about/FourthAbout';
import SecondAbout from './components/about/SecondAbout';
import ThirdAbout from './components/about/ThirdAbout';
import AppNavBar from './components/appnavbar/js/AppNavBar';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Service from './components/service/Service';

function App() {
  return (
    <div className="App">
        <AppNavBar />
        <Hero/>
        <FirstAbout />
        <SecondAbout />
        <ThirdAbout />
        {/* <PersonSlider /> */}
        <Service />
        <div style={{
          marginBottom: "200px"
        }}>

        </div>
        <Footer />
    </div>
  );
}

export default App;

