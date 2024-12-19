import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../Logo";
import { useNavigate } from "react-router-dom";
import ToggleButton from "../ToggleButton";
import HamburgerComponent from "../HamburgerComponent";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Projects",
      url: "/projects",
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ];

  const clickHandler = (url) => () => {
    navigate(url);
  };

  return (
    <header className="bg-white-background dark:bg-background p-2 overflow-y-hidden">
      <nav>
        <div className="hamburger">
          <HamburgerComponent />
        </div>
        <div className="mr-4 invert-color cursor-pointer">
          <Link to={"/"}>
            <Logo />
          </Link>
        </div>
        <div>
          <ul className="flex justify-center items-center ml-auto">
            {navItems.map((item) => (
              <li
                key={item.name}
                className={`dark:text-text-colour text-black-text ${
                  location.pathname === item.url ? "opacity-100" : "opacity-50"
                } nav-items`}
              >
                <button
                  key={item.name}
                  onClick={clickHandler(item.url)}
                  className={`inline-block px-5 py-2 font-medium`}
                >
                  {`<${item.name} />`}
                </button>
              </li>
            ))}
            <li className="px-5 pt-2">
              <ToggleButton />
            </li>
            <li>
              {/* <a
                href="https://www.buymeacoffee.com/akshatbajetha"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src=""
                  alt="Buy me a coffee"
                  width="150px"
                />
              </a> */}
              <a href="https://www.buymeacoffee.com/akshatbajetha">
                <img
                  src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=akshatbajetha&button_colour=FFDD00&font_colour=000000&font_family=Poppins&outline_colour=000000&coffee_colour=ffffff"
                  width="150px"
                />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
