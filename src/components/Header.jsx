import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src="/logo.webp" alt="logo" width={40} />
        <h2>Ucus Radari</h2>
      </Link>

      <div className="buttons">
        <NavLink to="/">
            <button>Harita</button>
        </NavLink>
        <NavLink to="/List">
            <button>Liste</button>
        </NavLink>
      </div>

      <h3>357 Ucus Bulundu</h3>
    </header>
  );
};

export default Header;
