
import React from "react";

import Navbar from "./components/Common template/Nabar";
import Home from "./Home";


function App() {
  return (
      <div className="App">
        <Navbar />
        <div className="content">
          <Home />
        </div>
      </div>

  );
}

export default App;
