import { BrowserRouter  , Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Portfolio from './Components/Works/Works';
import Contact from './Components/Contact/Contact';



const App = () => {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Navbar/>}  />
  <Route path='/about' element={<About/>}  />
  <Route path='/services' element={<Services/>}  />
  <Route path='/portfolio' element={<Portfolio/>}  />
  <Route path='/contact' element={<Contact/>}  />
</Routes>
<About/>
<Services/>
<Portfolio/>
<Contact/>
</BrowserRouter>

    </div>
  )
}

export default App