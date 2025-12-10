import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TopToolsSection from "./components/TopToolSection";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="page-main">
        <Hero />

        {/* REAL Top AI Tools section */}
        <TopToolsSection />
      </main>
    </>
  );
}

export default App;
