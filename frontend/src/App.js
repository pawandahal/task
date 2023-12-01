import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./components/HomePage/Home";
import Contact from "./pages/Contact";
import Form from "./pages/Form";
import Blog from "./pages/Blog";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
           <Route path='/form' element={<Form/>} />
           <Route path='/blog' element={<Blog/>} />

            </Routes>
      </Router>
    </div>
  );
};

export default App;
