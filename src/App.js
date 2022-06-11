
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Page/Home';
import About from './Page/About';
import Contact from './Page/Contact';
function App() {
  return (
    <>
    <BrowserRouter>
   
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/About' element={<About />}/>

      <Route path='/contact' element={<Contact />}/>

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
