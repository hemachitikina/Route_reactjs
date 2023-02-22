import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import About from "./About";
import Error from "./Error";
import Nav from "./Nav";
import Detailpage from "./Detailpage";



const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element= {<Home />}/>
        <Route path='about' element={<About />} />
        <Route path='*' element={<Error />} />
        <Route path='detailpage' element={<Detailpage />}/>

      </Routes>
    </div>);
}


export default App;