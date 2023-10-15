import { BrowserRouter  , Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Portfolio from './Components/Works/Works';
import Contact from './Components/Contact/Contact';

import './App.css'


const App = () => {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Navbar/>}  />
  <Route path='/about' element={<About/>}  />
  <Route path='/portfolio' element={<Portfolio/>}  />
  <Route path='/contact' element={<Contact/>}  />
</Routes>

</BrowserRouter>

    </div>
  )
}

export default App