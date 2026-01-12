import { NavLink } from "react-router-dom";
import { useState } from "react";

const navLinkClass = ({ isActive }) =>
  `block px-4 py-2 rounded-md transition ${
    isActive
      ? "bg-gradient-to-r from-blue-600 to-blue-950 text-white"
      : "hover:bg-white hover:text-black text-white"
  }`;

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative">
      {/* ===== TOP BAR ===== */}
      <div className="flex items-center justify-between lg:justify-center">
        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 mt-4 text-lg font-medium items-center">
          <li>
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={navLinkClass}>
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink to="/series" className={navLinkClass}>
              Series
            </NavLink>
          </li>
          <li>
            <NavLink to="/episodes" className={navLinkClass}>
              Episodes
            </NavLink>
          </li>

          <span className="text-gray-500">|</span>

          <li className="flex items-center gap-2 px-3 py-1 rounded-md hover:bg-white hover:text-black cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="currentColor"
            >
              <rect x="3" y="3" width="8" height="8" rx="2" />
              <rect x="13" y="3" width="8" height="8" rx="2" />
              <rect x="3" y="13" width="8" height="8" rx="2" />
              <path d="M17 14v2h-2v2h2v2h2v-2h2v-2h-2v-2z" />
            </svg>
            <span>Subscription</span>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white p-2 rounded-md hover:bg-white hover:text-black transition"
        >
          {open ? (
            // Close (X) icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* ===== MOBILE DROPDOWN ===== */}
      {open && (
        <div className="lg:hidden absolute right-0 mt-3 w-42 bg-black border border-gray-700 rounded-xl shadow-xl overflow-hidden z-50">
          <NavLink
            onClick={() => setOpen(false)}
            to="/"
            end
            className={navLinkClass}
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            to="/movies"
            className={navLinkClass}
          >
            Movies
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            to="/series"
            className={navLinkClass}
          >
            Series
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            to="/episodes"
            className={navLinkClass}
          >
            Episodes
          </NavLink>

          <div className="border-t border-gray-700 my-1"></div>

          <button className="w-full text-left px-4 py-2 hover:bg-white hover:text-black text-white transition">
            Subscription
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
