import logo from './logo.svg';
import './App.css';
import { Route , BrowserRouter as Router,Routes} from 'react-router-dom';
import Landingpage from './pages/Landingpage';
function App() {
  return (
    <> 
      <Router>
      
         <Routes>
              <Route path='/' element={<Landingpage/>}></Route>
             
         </Routes>

      </Router>
    </>
  );
}

export default App;
