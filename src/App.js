
import React from "react"; import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Cinemas from "./sections/home";
import Films from "./sections/films";
import SignIn from "./sections/signIn";
import SignUp from "./sections/signUp";
import Navbar from "./components/Navbar";
import {homeData} from "./sections/data.json"
import "./App.css"



function App() {
   return(
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Cinemas/>} />
        <Route path="/films" element={<Films/>} />
        <Route path="/signIn" element={<SignIn/>} />
        <Route path="/signUp" element={<SignUp/>} />
      </Routes>
    </BrowserRouter>

   )
  
  
}

export default App;
