import React from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Navbar />
      {/* <div className="divider"></div> */}
      <main className="flex-grow">
        <Hero />
      </main>
    </div>
  );
}

export default App;
