import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/header";
import HomePage from "./pages/Home";
import About from "./pages/about";
import Footer from "./component/footer";
import Register from "./pages/register";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
         <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
