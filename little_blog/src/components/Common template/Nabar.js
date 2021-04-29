import {Link} from "react-router-dom";

const Navbar = ()=>{
  return(
      <nav className="navbar">
        <h2>标题</h2>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/Create">xxx</Link>
        </div>
      </nav>
  )
}

export default Navbar;
