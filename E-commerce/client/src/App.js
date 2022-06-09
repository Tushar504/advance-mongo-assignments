
import './App.css';
import {Navbar} from "./components/Navbar/Navbar"
import {Login} from "./components/LogIn/Login"
import {Signup} from "./components/LogIn/Signup"
import {Routes,Route} from "react-router-dom";
import {Home} from "./components/Home/home"
function App() {
  return (
    <div className="App">
      <div style={{position:"fixed",width:"100%"}}>
         <Navbar/>
      </div>
      <Routes>/
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    </div>
  );
}

export default App;
