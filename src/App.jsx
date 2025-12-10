import React from "react";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      {/* Temporary content para lang may makita sa ilalim */}
      <main className="page-main">
        <section className="hero">
          <h1>Boost Your Productivity with AI Tools</h1>
          <p>
            Discover the best AI tools to enhance your productivity and
            streamline your workflow.
          </p>
        </section>
      </main>
    </>
  );
}

export default App;
