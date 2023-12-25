import {Link} from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Regal Cinemas</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#f86404',
          borderRadius: '8px' 
        }}>New Movie</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;