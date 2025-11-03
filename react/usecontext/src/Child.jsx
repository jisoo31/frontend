
import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext';

export default function Child() {
    const {theme, ToggleTheme} = useContext(ThemeContext);
  return (
    <div>
      <h2>Child Component</h2>
      <p>Theme from Context: {theme}</p>
      <button onClick={ToggleTheme}>Toggle Theme</button>
    </div>
  )
}
