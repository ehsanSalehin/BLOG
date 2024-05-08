import TopBar from "./topbar/TopBar"
import Home from "./pages/home/Home"
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Post from "./post/Post";
function App() {
  const user = false;
  return (
    <BrowserRouter>
    <TopBar/>
    < Routes>
    <Route exact path='/' element={<Home/>} />
    <Route exact path='/register' element={user ? <Home/> : <Register/>} />
    <Route exact path='/login' element={user ? <Home/> :<Login/>} />
    <Route exact path='/write' element={user ? <Write/> :<Register/>} />
    <Route exact path='/settings' element={user ? <Settings/> :<Register/>} />
    <Route exact path='/post/:postId' element={<Single/>} />
    </ Routes>
    </BrowserRouter>
  );
}

export default App;
