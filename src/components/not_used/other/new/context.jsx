import React from 'react';




const MyContext = React.createContext();

const MyProvider = ({ children }) => {
  const [theme, setTheme] = React.useState("light");
	const nextTheme = theme === "light" ? "dark" : "light";
  const value = {
    theme,
    nextTheme,
    toggleTheme: () => {
      setTheme(nextTheme);
    }
}


// ability to use state deeply nested

function App() {

  };

  return (
    <MyProvider>
      <DirectChild />
    </MyProvider>
  );
}


const DirectChild = React.memo(() => {
  console.log("direct child");

  return (
    <nav>
      <DeeperChild />
    </nav>
  );
});


const DeeperChild = () => {
  console.log("deeperchild");
  const [nextTheme, toggleTheme] = React.useContext(MyContext);

  return (
    <p>
      <button onClick={toggleTheme}>{nextTheme}</button>
    </p>
  )
}



//React.memo
React.createContext
