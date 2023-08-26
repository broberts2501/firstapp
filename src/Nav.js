import { Routes, Route, Link } from 'react-router-dom';


function Nav() {
    return (
      
      <nav className="nav">

      <Link to="/" className='nav-item'>Home</Link>
      <Link to="/NotHomePage" className='nav-item'>Not My Home</Link>
      <Link to="/about-me" className='nav-item'>About Me</Link>
  
     
      </nav>
  
    );
  }
  
  export default Nav;