function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Uber</div>

      <ul className="nav-links">
        <li>Ride</li>
        <li>Drive</li>
        <li>Business</li>
        <li>About</li>
      </ul>

      <div className="nav-buttons">
        <button className="login-btn">Log in</button>
        <button className="signup-btn">Sign up</button>
      </div>
    </nav>
  );
}

export default Navbar;