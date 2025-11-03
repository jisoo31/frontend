import React, { useState } from 'react'
import { ThemeContext } from './ThemeContext';
import Child from './Child';

export default function App() {
  const[theme, setTheme] = useState("light");
  const ToggleTheme = () => {
    setTheme(prev => (prev === "light") ? "dark" : "light");
  };


  return (
    <ThemeContext.Provider value={{theme, ToggleTheme}}>
      <div style={{
        background: theme=== "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "fff",
        height: "100vh",
        padding: "20px"
      }}>
        <h1>Currnt Theme: {theme}</h1>
        <Child/>
      </div>
    </ThemeContext.Provider>
      
    
  )
}