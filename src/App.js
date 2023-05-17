
import './App.css';
import Navbar from './component/navbar';
import Home from './component/home';
import About from './component/about';
import Portfolio from './component/portfolio';
import Services from './component/services'
   import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path="/home" exact element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/services" element={<Services/>}/>  
      </Routes>
    </div>
  );
}

export default App;
