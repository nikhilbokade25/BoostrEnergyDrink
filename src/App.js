import logo from './logo.svg';
import './App.css';
import Hero from "../src/Components/Hero";
import Products from './Components/Products';
import About from './Components/About';

function App() {

  
  return (
    <div className="App">
      <Hero/>
      <Products />
      <About/>
    </div>
  );
}

export default App;
