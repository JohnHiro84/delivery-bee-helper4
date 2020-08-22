import React, {useContext} from 'react';
import ThemeContext from "./ThemeContext";
import AppTheme from "./Colors";

const Main = () => {

  const theme = useContext(ThemeContext);
  const currentTheme = AppTheme[theme];

  return (
    <main style = {{
      padding: "1rem",
      backgroundColor: `${currentTheme.backgroundColor}`,
      color: `${currentTheme.textColor}`
    }}>
    <h1>Heading1</h1>
    <p>paragraph</p>
    <button>Button</button>
    </main>
  );
}

export default Main;
