import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Searchbar from "./components/Searchbar";
import Footer from "./components/Footer";

function App() {
  // STate needs to live here
  return (
    <Router>
    <div>
      <Header />
      <Hero />
      <Searchbar />
      
      <Footer />
    </div>
  </Router>
  );
}

export default App;
