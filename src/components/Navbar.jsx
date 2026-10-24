import './Navbar.css';

function Navbar() {
  return (
    <aside className="sidebar">
      <a href="#home" className="logo">AS</a>

      <nav className="side-nav">
        <a className="active" href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </nav>
    </aside>
  );
}

export default Navbar;
