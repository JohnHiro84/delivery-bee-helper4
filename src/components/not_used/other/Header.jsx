import React from 'react';
import ThemeToggler from "./ThemeToggler2";

const headerStyles = {
  padding: "1rem",
  display: "flex",
  justifyContext: "space-between",
  alignItems: "center"
}

const Header = () => {
  return (
    <header style={headerStyles}>
      <h1>Context API</h1>
      <ThemeToggler />
    </header>
  )
}

export default Header;
