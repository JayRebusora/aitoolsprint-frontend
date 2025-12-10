import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="page-main">
        <Hero />

        {/* Placeholder for next sections */}
        <section style={{ marginTop: "3rem" }}>
          <h2>Coming Soon: Top AI Tools section</h2>
          <p>
            This will show cards for your best recommended AI tools with ratings
            and affiliate links.
          </p>
        </section>
      </main>
    </>
  );
}

export default App;
