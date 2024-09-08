import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { motion } from "framer-motion";

import { useNavigate, useLocation } from "react-router-dom";

function HamburgerComponent() {
  const [open, setOpen] = useState(false);

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
    setOpen(false);
  };
  return (
    <div className="dark:text-text-colour text-black-text">
      <Hamburger size={24} toggled={open} toggle={setOpen} />

      {open && (
        <div className="hameburger p-2 z-10 overflow-hidden fixed top-0 left-0 w-screen h-screen dark:text-text-colour text-black-text dark:bg-background bg-white-background">
          <nav>
            <Hamburger size={24} toggled={open} toggle={setOpen} />
          </nav>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.1,
            }}
            exit={{ x: -100, opacity: 0 }}
            className="mt-10"
          >
            <ul className="flex flex-col justify-center items-center ml-auto">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className={`dark:text-text-colour text-black-text p-4 m-4 ${
                    location.pathname === item.url
                      ? "opacity-100"
                      : "opacity-50"
                  }`}
                >
                  <button
                    key={item.name}
                    onClick={clickHandler(item.url)}
                    className={`inline-block px-5 py-2 button-text`}
                  >
                    {`<${item.name} />`}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default HamburgerComponent;
