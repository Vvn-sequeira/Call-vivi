import logo from './logo.svg';
import './App.css';
import { Route , BrowserRouter as Router,Routes} from 'react-router-dom';
import Landingpage from './pages/Landingpage';
import Signup from "./pages/Landing/Signup-folder/Signup"
function App() {
  return (
    <> 
      <Router>
      
         <Routes>
              <Route path='/' element={<Landingpage/>}></Route>
              <Route path='/signup' element={<Signup/>}></Route>
             
         </Routes>

      </Router>
    </>
  );
}

export default App;
