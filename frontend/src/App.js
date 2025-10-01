import logo from './logo.svg';
import './App.css';
import { SnackbarProvider } from 'notistack';

import { Route , BrowserRouter as Router,Routes} from 'react-router-dom';
import Landingpage from './pages/Landingpage';
import Signup from "./pages/Landing/Signup-folder/Signup"
import SignIn from './pages/Landing/Login Folder/SignIn';
import VideoMeet from './pages/Landing/VideoMeet';
function App() {
  return (
    <> 
     <SnackbarProvider maxSnack={3}>
  
      <Router>
      
         <Routes>
              <Route path='/' element={<Landingpage/>}></Route>
              <Route path='/signup' element={<Signup/>}></Route>
              <Route path='/Login' element={<SignIn/>}></Route>
              <Route path='/:url' element={<VideoMeet></VideoMeet>}></Route>
             
         </Routes>

      </Router>
      </SnackbarProvider>
    </>
  );
}

export default App;
