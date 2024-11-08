import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomePage from './components/WelcomePage'
import Header from './components/Header'
import Login from './components/Login'
import VisitorPassForm from './components/VisitorPassForm'
import AdminDashboard from './components/AdminDashboard'
import SecurityDashboard from './components/SecurityDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <WelcomePage/> */}
      
       {/* <Header/>
        */}
        {/* <Login/> */}
        <SecurityDashboard/>
        
         {/* <VisitorPassForm/> */}
          
    </>
  )
}

export default App
