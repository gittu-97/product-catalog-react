import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function Header() {
  return (
    <h2>TEST</h2>
  )
}

function App() {
  const [count, setCount] = useState(0)
  console.log(setCount);
  return (
    <div>
      <h2> {count}</h2>
      <Header />
    </div>
  );
}

export default App
