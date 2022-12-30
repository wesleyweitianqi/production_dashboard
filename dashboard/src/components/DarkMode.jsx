import { MdOutlineDarkMode } from 'react-icons/md';
import React from 'react';
import '../styles/darkMode.css';

const DarkMode = () => {
  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;

  if (localStorage) {
    theme = localStorage.getItem('theme');
  }
  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme)
  } else {
    body.classList.add(lightTheme)
  }

  const switchTheme = (e) => {
    if (theme === "dark") {
      body.classList.replace(darkTheme, lightTheme);
      e.target.closest('button').classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.closest("button").classList.add(clickedClass);
      localStorage.setItem("theme", "dark");
      theme = darkTheme
    }
  }
  return (
    <button
      className={theme === "dark" ? clickedClass : ""}
      id = "darkMode"
      onClick={(e)=> switchTheme(e)}
    >
      <MdOutlineDarkMode />
    </button>
  )
}

export default DarkMode
