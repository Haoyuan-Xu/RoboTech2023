import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Support from './components/pages/Support';
import Products from './components/pages/Products';





function App() {

  //const [showNavbar, setShowNavbar] = useState(true);

  //const handleSignUpClick = () => setShowNavbar(false);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/Support' element={<Support />} />
          <Route path='/Product' element={<Products />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
