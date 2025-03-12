import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BoardPage from "./pages/BoardPage";
import PoemPage from "./pages/PoemPage";
import Navbar from "./components/NavBar"

function App() {
  return (
   <>
    <Router>
  <Navbar/>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/board" element={<BoardPage />} />
        <Route path="/poem" element={<PoemPage />} />
      </Routes>
    </Router>
   </>
   
    
  );
}

export default App;
