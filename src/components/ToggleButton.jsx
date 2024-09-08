import { div } from "framer-motion/client";
import React, { useEffect, useState } from "react";

function ToggleButton() {
  const [theme, setTheme] = useState("dark");
  const [themeText, setThemeText] = useState("Dark Mode");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setThemeText(theme === "light" ? "Light Mode" : "Dark Mode");
    setToggled(!toggled);
  };
  const [toggled, setToggled] = useState(true);
  return (
    <div>
      <button
        className={`toggle-btn ${toggled ? "toggled" : ""} `}
        onClick={toggleTheme}
      >
        <div className="thumb"></div>
      </button>
    </div>
  );
}

export default ToggleButton;
