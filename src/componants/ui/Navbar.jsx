import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <ul className=" hidden lg:block lg:flex gap-6 mt-4 text-lg font-medium">
        <li className=" hover:text-black hover:bg-white  px-3 py-1 rounded-md">
          {/* Home */}
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-black hover:bg-white px-3 py-1 rounded-md">
          {/* Movies */}
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-black hover:bg-white px-3 py-1 rounded-md"
          >
            TV Shows
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-black hover:bg-white px-3 py-1 rounded-md"
          >
            Live Tv
          </a>
        </li>

        <li>
          <a
            href="#"
            className="hover:text-black hover:bg-white px-3 py-1 rounded-md"
          >
            Subscription
          </a>
        </li>
      </ul>
    </>
  );
}
export default Navbar;
