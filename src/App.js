import logo from './logo.svg';
import './App.css';
import Hero from "../src/Components/Hero";
import Products from './Components/Products';
import About from './Components/About';
import WhyBoostr from './Components/WhyBoostr';

function App() {

  
  return (
    <div className="App">
      <Hero/>
      <Products />
      <About/>
      <WhyBoostr/>
    </div>
  );
}

export default App;
