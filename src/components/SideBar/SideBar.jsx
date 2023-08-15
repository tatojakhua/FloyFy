/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import { links } from "../../assets/constants";
import { HiOutlineMenu } from "react-icons/hi";
import { logo } from "../../assets/index";

const NavLinks = ({ handleClick }) => (
  <div className="mt-10">
    {links.map((item) => (
      <Link
        key={item.name}
        to={item.to}
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
        onClick={() => handleClick()}
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </Link>
    ))}
  </div>
);

const SideBar = () => {
  const [mobileMenuOpen, setmobileMenuOpen] = useState(false);
  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks handleClick={() => setmobileMenuOpen(false)} />
      </div>
      <div className="absolute md:hidden block top-6 right-3">
        {mobileMenuOpen ? (
          <RiCloseLine
            className="w-6 h-6 ml-2 text-white cursor-pointer z-90"
            onClick={() => setmobileMenuOpen(false)}
          />
        ) : (
          <HiOutlineMenu
            className="w-6 h-6 ml-2 text-white cursor-pointer z-90"
            onClick={() => setmobileMenuOpen(true)}
          />
        )}
      </div>
      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483D8B] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
          mobileMenuOpen ? "left-0" : "-left-full"
        }`}
      >
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks handleClick={() => setmobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default SideBar;
