import React from 'react';

function App() {
  const theme = "light";

  return (
    <ThemeContext.Provider value = {theme}>
      <div>

      </div>
    </ThemeContext.Provider>
  )
}
