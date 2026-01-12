import { NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }) =>
  `transition px-3 py-1 rounded-md ${
    isActive
      ? "border border-white bg-gradient-to-r from-blue-600 to-blue-950 text-white"
      : "hover:text-black hover:bg-white text-white"
  }`;

function Navbar() {
  return (
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

      <li className="flex items-center gap-2 px-3 py-1 rounded-md hover:text-black hover:bg-white cursor-pointer">
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
  );
}

export default Navbar;
