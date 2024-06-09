import './style/main.css';
//импорт роута
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

//импорт компанентов
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Project from './pages/Project';
import Contacts from './pages/Contacts';
import Footer from './components/Footer/Footer';

import ScrollToTop from './utils/scrollToTop';

function App() {
  return (
    <div className="App">  
    <Router>
       <ScrollToTop/>
       <Navigation/>
       <Home/>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/project/:id' element={<Project/>} />  
          <Route path='/contacts' element={<Contacts/>} /> 
        </Routes>  
      <Footer/>
    </Router>  
    </div>
  );
}

export default App;
