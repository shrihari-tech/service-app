//import logo from './logo.svg';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
//import './App.css';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='register' element={<Register/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
