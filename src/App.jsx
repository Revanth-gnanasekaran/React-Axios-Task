import { useState } from 'react'
import Create from './Components/Create'
import './App.css'
import Edit from './Components/Edit'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Products from './Components/Product'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <BrowserRouter>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products setId={setId} />} />
        <Route path="/edit/:id" element={<Edit id={id} />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  <Footer />
  </div>
      
    
  )
}

export default App
