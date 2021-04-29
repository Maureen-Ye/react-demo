
import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from "./components/Common template/Nabar";
import Home from "./Home";
import Create from "./Create";
import BlogDetail from "./BlogDetail";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='Create' element={<Create />} />
              <Route path='/blogs/:id' element={<BlogDetail />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>


  );
}

export default App;
