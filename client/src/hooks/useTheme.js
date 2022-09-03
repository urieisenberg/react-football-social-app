import { useEffect, useState } from "react";
import { lightTheme, darkTheme } from "../theme/Theme";
import { BsMoonStars, BsFillSunFill } from "react-icons/bs";

export const useTheme = () => {
  const [theme, setTheme] = useState("dark");

  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const themeToggler = () =>
    theme === "light" ? setMode("dark") : setMode("light");

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const themeIcon =
    theme === "dark" ? (
      <BsFillSunFill size={20} style={{ color: "#ffffff" }} />
    ) : (
      <BsMoonStars size={20} />
    );

  return [themeMode, themeIcon, themeToggler];
};
