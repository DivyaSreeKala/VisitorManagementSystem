import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VisitorManagementSystem from './components/VisitorManagementSystem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <VisitorManagementSystem/>
    </>
  )
}

export default App
