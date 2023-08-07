import React from 'react';
import { BrowserRouter  , Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';



const App = () => {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Navbar/>}  />
  <Route path='/about' element={<About/>}  />
</Routes>

</BrowserRouter>

    </div>
  )
}

export default App