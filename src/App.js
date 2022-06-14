import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home/index.js'
import About from './pages/about/index.js'
import Contacts from './pages/contacts/index'
import Projects from './pages/projects/index.js'

import Navbar from './components/layout/navbar/index.js'
import Footer from './components/layout/footer/index.js'

// homepage
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
          <Route path='/contact' element={<Contacts/>}></Route>
          <Route path='/about' element={<About/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
