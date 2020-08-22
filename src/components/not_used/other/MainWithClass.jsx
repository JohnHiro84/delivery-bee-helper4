import React, { Component } from 'react';
import ThemeContext from "./ThemeContext";
import AppTheme from "./Colors";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  static contextType = ThemeContext;

  render() {
    const currentTheme = AppTheme[this.context];


    console.log("currentTHeme")
    console.log(currentTheme);

    return (
      <main style={{
        padding: "1rem",
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`
      }}>
        <h1>heading 1</h1>
        <p>this is a paragraph</p>
        <button>This is a button</button>
      </main>
    );
  }

}

export default Main;
