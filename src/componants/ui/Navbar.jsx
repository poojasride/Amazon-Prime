import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <ul className=" hidden lg:block lg:flex gap-6 mt-4 text-lg font-medium ">
        <li className=" hover:text-black hover:bg-white  px-3 py-1 rounded-md">
          {/* Home */}
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-black hover:bg-white px-3 py-1 rounded-md">
          {/* Movies */}
          <Link to="/movies">Movies</Link>
        </li>
        <li className="hover:text-black hover:bg-white px-3 py-1 rounded-md">
          Series
        </li>
        <li className="hover:text-black hover:bg-white px-3 py-1 rounded-md">
          Live Tv
        </li>

        <span>|</span>
        
        <li className=" flex items-center gap-1 hover:text-black hover:bg-white px-3 py-1 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 shrink-0"
            fill="currentColor"
          >
            <rect x="3" y="3" width="8" height="8" rx="2" />
            <rect x="13" y="3" width="8" height="8" rx="2" />
            <rect x="3" y="13" width="8" height="8" rx="2" />
            <path d="M17 14v2h-2v2h2v2h2v-2h2v-2h-2v-2z" />
          </svg>
          <span> Subscription</span>
        </li>
      </ul>
    </>
  );
}
export default Navbar;
