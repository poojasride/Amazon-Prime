import searchIcon from "../../assets/icons/search.svg";
import dropDownIcon from "../../assets/icons/dropdown.svg";
import nineDotsIcon from "../../assets/icons/nine-dots.svg";
import profile from "../../assets/profile.png";
import SearchModel from "../ui/SearchModel";
import { useState } from "react";

import Navbar from "./Navbar";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section className="bg-black  max-w-8xl  mx-auto text-white p-4">
        <header className="flex gap-10 items-center justify-between">
          <h1 className="  text-xl font-righteous tracking-normal  ml-10">
            prime video
          </h1>

          <Navbar />

          <div className="flex gap-3 items-center justify-between">
            {/* SEARCH ICON */}
            <button
              onClick={() => setOpen(true)}
              className="text-white hover:text-gray-300 transition"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            <button className="cursor-pointer  hover:border border-white p-2 rounded-md">
              EN{" "}
              <img
                src={dropDownIcon}
                alt="dropdown"
                className="w-5 h-5 inline "
              />
            </button>

            <img
              src={nineDotsIcon}
              alt=""
              className="w-20 h-10 cursor-pointer  hover:border border-white p-2 rounded-md"
            />

            <img
              src={profile}
              alt="profile"
              className="w-10 h-10 cursor-pointer  hover:border border-white  rounded-full hover:ring-2 hover:ring-white"
            />

            <button className="hidden md:block bg-blue-500 rounded-md text-white font-medium p-2 px-4">
              Join Prime
            </button>
          </div>
        </header>
         <SearchModel isOpen={open} onClose={() => setOpen(false)} />
      </section>
    </>
  );
}
export default Header;
