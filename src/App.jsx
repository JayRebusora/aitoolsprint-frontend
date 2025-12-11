import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TopToolsSection from "./components/TopToolsSection"; // ← import
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="page-main">
        <Hero />

        {/* REAL Top AI Tools section */}
        <TopToolsSection />
      </main>
       {/* Footer at the bottom */}
      <Footer />
    </>
  );
}

export default App;
