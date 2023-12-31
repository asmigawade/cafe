import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from './pages/Home'
import Menu from './pages/Menu'
import Contact from './pages/Contact'
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/menu' element={<Menu />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
      <Footer></Footer>
   </Router>
   
      
    </div>
  );
}

export default App;
