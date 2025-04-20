import logo from './logo.svg';
import './App.css';
import Hero from "../src/Components/Hero";
import Products from './Components/Products';
import About from './Components/About';
import WhyBoostr from './Components/WhyBoostr';
import Footer from './Components/Footer';

function App() {

  
  return (
    <div className="App">
      <Hero/>
      <Products />
      <About/>
      <WhyBoostr/>
      <Footer/>
    </div>
  );
}

export default App;
