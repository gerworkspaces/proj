import React from "react";

// import Article from "./components/article/Article";
// import Brand from "./components/brand/Brand";
// import Feature from "./components/feature/Feature";
// import Navbar from "./components/navbar/Navbar";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatOPPT,
  Header,
} from "./containers";
import { Article, Brand, Navbar } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatOPPT />
      <Features />
      <Blog />
      <Possibility />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
