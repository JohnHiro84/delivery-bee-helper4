import React from 'react';
// import ReactDOM from 'react-dom';



function AppTwo(){
  const [theme, setTheme] = React.useState("red");

  const onClickHandler = () => {
    setTheme(theme === "red" ? "blue": "red");
  }

  return (
    <div>
      <Text theme={theme}/>
      <button onClick={onClickHandler}>Change Theme</button>
    </div>
  );
}

function Text({theme}){
  return (
    <h1 style= {{
      color: `${theme}`
    }}>{theme}</h1>
  );
}

export default AppTwo;
