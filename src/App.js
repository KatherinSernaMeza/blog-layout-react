import React from "react";
import "./App.css";
import Header from "./componentes/Header/Header.jsx";
import Banner from "./componentes/Banner.jsx";
import Content from "./componentes/Content.jsx";
import Footer from "./componentes/Footer/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
