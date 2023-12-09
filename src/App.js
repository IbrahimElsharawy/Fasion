import React from "react";
import Navbar from "./components/Home/Navbar/Navbar";
import {Routes , Route} from 'react-router-dom';
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import Features from "./components/Features/Features";
import Blog from "./components/Blog/Blog";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="overflow-x-hidden" >
    <Navbar />
      <Routes>
        <Route exact  path="/" element={<Home/>}/>
        <Route  path="/shop" element={<Shop/>}/>
        <Route  path="/features" element={<Features/>}/>
        <Route  path="/blog" element={<Blog/>}/>
        <Route  path="/about" element={ <About/> }/>
        <Route  path="/contact" element={ <Contact/> }/>
        <Route  path="/contact" element={ <Contact/> }/>

      </Routes>
    </div>
     
      
  );
}

export default App;
