import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../CartContext";

function Navbar() {
  const { cartCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">

        {/* LOGO */}
        <Link
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
        >
          <img className="brand-logo" src="/assets/cyberflix-logo.png" alt="Cyberflix Systems LLP" />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="desktop-nav">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Components
          </NavLink>

          <NavLink
            to="/pc-builder"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            PC Builder
          </NavLink>

          <NavLink
            to="/wishlist"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Wishlist
          </NavLink>

          <NavLink
            to="/orders"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            My Orders
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Login
          </NavLink>

        </nav>

        {/* RIGHT SIDE */}
        <div className="navbar-actions">

          <Link
            to="/wishlist"
            className="wishlist-nav-link"
            onClick={closeMenu}
            title="Wishlist"
          >
            ♡
          </Link>

          <Link
            to="/cart"
            className="cart-link"
            onClick={closeMenu}
            title="Shopping Cart"
          >
            <span className="cart-icon">🛒</span>

            {cartCount > 0 && (
              <span className="cart-count">
                {cartCount}
              </span>
            )}
          </Link>

          <Link
            to="/pc-builder"
            className="build-nav-btn"
            onClick={closeMenu}
          >
            BUILD PC →
          </Link>

          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>
      </div>

      {/* MOBILE NAVIGATION */}
      {menuOpen && (
        <nav className="mobile-nav">

          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "mobile-nav-link active" : "mobile-nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "mobile-nav-link active" : "mobile-nav-link"
            }
          >
            Components
          </NavLink>

          <NavLink
            to="/pc-builder"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "mobile-nav-link active" : "mobile-nav-link"
            }
          >
            PC Builder
          </NavLink>

          <NavLink
            to="/wishlist"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "mobile-nav-link active" : "mobile-nav-link"
            }
          >
            ♡ Wishlist
          </NavLink>

          <NavLink
            to="/orders"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "mobile-nav-link active" : "mobile-nav-link"
            }
          >
            My Orders
          </NavLink>

          <NavLink
            to="/cart"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "mobile-nav-link active" : "mobile-nav-link"
            }
          >
            Cart ({cartCount})
          </NavLink>

          <NavLink
            to="/login"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "mobile-nav-link active" : "mobile-nav-link"
            }
          >
            Login
          </NavLink>

        </nav>
      )}
    </header>
  );
}

export default Navbar;