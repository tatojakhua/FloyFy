import React from "react";
import { logo } from "../../assets/index";
import { Link, NavLink } from "react-router-dom";
import { HOME_PAGE, SIGN_UP, SIGN_IN } from "../../constants/routes";

const Header = () => {
  return (
    <header className="animate-slidedown bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-b-3xl fixed z-10 top-0 left-0 w-full h-15 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <div className="xs:ml-4">
          <Link to={HOME_PAGE}>
            <img src={logo} alt="logo" className="w-full h-14 object-contain" />
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <NavLink
                to={HOME_PAGE}
                className="text-sm font-medium text-white hover:text-cyan-400 cursor-pointer"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={SIGN_UP}
                className="text-sm font-medium text-white hover:text-cyan-400 cursor-pointer"
              >
                Sign Up
              </NavLink>
            </li>
            <li>
              <NavLink
                to={SIGN_IN}
                className="text-sm font-medium text-white hover:text-cyan-400 cursor-pointer"
              >
                Sign In
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
