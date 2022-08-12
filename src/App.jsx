import React from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";

const App = () => {
  return (
    <div className="App">
      <div className="bg-white dark:bg-slate-900 min-h-screen font-inter ">
				<div className="max-w-5xl w-11/12 mx-auto">
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default App;
