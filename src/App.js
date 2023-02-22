import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import MXCode from './Components/MXCode';
import Projects from './Components/Projects';
import TitleSplash from './Components/TitleSplash';

function App() {
  return (
    <>
      <TitleSplash />
      <About />
      <MXCode />
      <Projects />
      <Footer />
    </>
  );
}

export default App;