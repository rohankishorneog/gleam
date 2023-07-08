
// import Mockman from  'mockman-js'
import { Routes, Route } from "react-router-dom";
import RequiresAuth from "./components/RequiresAuth";



import LandingPage from "./pages/landingPage/LandingPage";
import LoginPage from "./pages/loginpage/LoginPage";
import SignupPage from "./pages/signupPage/SignupPage";
import Homepage from './pages/homepage/Homepage';
import ExplorePage from "./pages/explore/ExplorePage";
import BookmarksPage from "./pages/bookmarks/BookmarksPage";
import ProfilePage from "./pages/profilepage/ProfilePage";
import CreatePost from "./components/createPost/CreatePost";




function App() {
  return (
    <div className="App">
    {/* <Mockman/> */}
    <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/signup' element={<SignupPage/>}/>
          <Route path='/home' element={
          <RequiresAuth><Homepage/></RequiresAuth>}/>
          <Route path='/explore' element={
          <RequiresAuth><ExplorePage/></RequiresAuth>}/>
          <Route path='/bookmark' element={
          <RequiresAuth><BookmarksPage/></RequiresAuth>}/>
          <Route path='/profile' element={
          <RequiresAuth><ProfilePage/></RequiresAuth>}/>
          <Route path='/createPost' element={
          <RequiresAuth><CreatePost/></RequiresAuth>}/>
    </Routes>
  </div>
  );
}

export default App;
