import React from "react";
import "./App.css";
import Header from "./componentes/Header/Header.jsx";
import Banner from "./componentes/Banner.jsx";
import Content from "./componentes/Content.jsx";
import Footer from "./componentes/Footer/Footer.jsx";
import "./assets/css/main.css";

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
