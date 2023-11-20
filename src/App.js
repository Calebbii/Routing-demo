import './App.css';
import Contact from './pages/Contact';
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Testimonials from './pages/Testimonials';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/tes' element={<Testimonials/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
