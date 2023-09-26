
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Error from './Components/Error';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />}>
      </Route>
      <Route exact path="/About" element={<About />}>
      </Route>
      <Route exact path="/Projects" element={<Projects />}>
      </Route>
      <Route exact path="/Contact" element={<Contact />}>
      </Route>
      <Route exact path="*" element={<Error />}>
      </Route>
    </Routes>
  
  </BrowserRouter>
    </div>
  );
}

export default App;
