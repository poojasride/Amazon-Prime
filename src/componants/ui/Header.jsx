import searchIcon from "../../assets/icons/search.svg";
import dropDownIcon from "../../assets/icons/dropdown.svg";
import nineDotsIcon from "../../assets/icons/nine-dots.svg";
import profile from "../../assets/profile.png";

import Navbar from "./Navbar";

function Header() {
  return (
    <>
      <section className="bg-black  max-w-[vh] max-h-[vh]  mx-auto text-white p-4">
        <header className="flex gap-10 items-center justify-between">
          <h1 className="  text-xl font-righteous tracking-normal  ml-10">
            prime video
          </h1>

          <Navbar />

          <div className="flex gap-3 items-center justify-between">
            <img
              src={searchIcon}
              alt="search"
              className="w-20 h-10 cursor-pointer  hover:border border-white p-2 rounded-md"
            />

            <button className="cursor-pointer  hover:border border-white p-2 rounded-md">
              EN{" "}
              <img
                src={dropDownIcon}
                alt="dropdown"
                className="w-5 h-5 inline "
              />
            </button>

            <img src={nineDotsIcon} alt="" 
            className="w-20 h-10 cursor-pointer  hover:border border-white p-2 rounded-md"/>

            <img src={profile} alt="profile" className="w-10 h-10 cursor-pointer  hover:border border-white  rounded-full hover:ring-2 hover:ring-white" />

            <button className="hidden md:block bg-blue-500 rounded-md text-white font-medium p-2 px-4">Join Prime</button>
          </div>
        </header>
      </section>
    </>
  );
}
export default Header;
