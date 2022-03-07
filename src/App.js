import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About/About';
import './App.css';
import './styles/styles.css';
import Header from './header/Header';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import Notfound from './utilities/Notfound';
import Blogdetail from './blog/Blogdetail';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/" element={<Home />} /> 
          <Route path="/blogdes/:id" render={({ match }) => (
            <Blogdetail item={item => String(item.id) === String(match.params.id)} /> 
            )}/>
          <Route path="*" exact="true" element={<Notfound />} />          
        </Routes>
      </div>      
    </div>
    </Router>
  );
}

export default App;
