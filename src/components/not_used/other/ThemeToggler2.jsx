import React, {useContext, useState} from 'react';
import ThemeContext from "./ThemeContext";


const themeTogglerStyle = {
  cursor: "pointer"
}

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useState(ThemeContext);


  return (
    <div style={themeTogglerStyle} onClick={() => {setThemeMode(themeMode === "light" ? "dark": "light")}}>
      <span title="swith theme">
        {themeMode === "light" ? "dark" : "light"}
      </span>
    </div>
  )
}


export default ThemeToggler;
