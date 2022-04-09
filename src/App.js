import './style/index.scss';
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Main from './pages/Main';
import Footer from './components/Footer';
import Settings from './pages/Settings';
import Recipie from './pages/Recipie';
function App() {
  return (
    <div className='App'>
      <Router>
      <Navbar/>
    <div className="container main">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/recipes' element={<Recipie/>}/>
        <Route path="/settings" element={<Settings/>}/>
      </Routes>

     </div>
     <Footer/>
      </Router>
     
    </div>
  );
}

export default App;
