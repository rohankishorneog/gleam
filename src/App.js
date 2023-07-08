
import Mockman from  'mockman-js'
import { Routes, Route } from "react-router-dom";
import RequiresAuth from "./components/RequiresAuth";


import TestingKela from "./components/TestingKela";
import LandingPage from "./pages/landingPage/LandingPage";
import LoginPage from "./pages/loginpage/LoginPage";
import SignupPage from "./pages/signupPage/SignupPage";
import Homepage from './pages/homepage/Homepage';




function App() {
  return (
    <div className="App">
    <Mockman/>
    <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path='/test' element={
          <RequiresAuth><TestingKela/></RequiresAuth>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/signup' element={<SignupPage/>}/>
          <Route path='/home' element={
          <RequiresAuth><Homepage/></RequiresAuth>}/>
    </Routes>
  </div>
  );
}

export default App;
