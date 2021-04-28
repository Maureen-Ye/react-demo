
import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from "./components/Common template/Nabar";
import Home from "./Home";
import Create from "./Create";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='Create' element={<Create />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>


  );
}

export default App;
