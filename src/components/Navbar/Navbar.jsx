import './Navbar.css';

export default function Navbar({ navItems }) {
  return (
    <nav className="navbar">
      <a className="navbar__logo" href="#">
        The World's <span>50 Best</span> Restaurants
      </a>
      <ul className="navbar__links">
        {navItems.map((item) => (
          <li key={item}>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
