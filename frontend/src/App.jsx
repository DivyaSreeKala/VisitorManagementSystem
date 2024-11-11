import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WelcomePage from './components/WelcomePage'
import Header from './components/Header'
import Login from './components/Login'
import VisitorPassForm from './components/VisitorPassForm'
import AdminDashboard from './components/AdminDashboard'
import SecurityDashboard from './components/SecurityDashboard'
import ManageVisitor from './components/ManageVisitor'
import ManageSecurity from './components/ManageSecurity'
import VisitorPassView from './components/VisitorPassView'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<WelcomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin' element={<AdminDashboard/>}/>
        <Route path='/security' element={<SecurityDashboard/>}/>
        <Route path='/visitor-pass-registration' element={<VisitorPassForm/>}/>
        <Route path='/admin/manage-visitor' element={<ManageVisitor/>}/>
        <Route path='/admin/manage-security' element={<ManageSecurity/>}/>
        <Route path='/details/:id' element={<VisitorPassView/>}/>
      </Routes>
    </BrowserRouter>
      {/* <WelcomePage/> */}
      
       {/* <Header/>
        */}
        {/* <Login/> */}
        {/* <SecurityDashboard/> */}
        {/* <AdminDashboard/> */}
         {/* <VisitorPassForm/> */}
          
    </>
  )
}

export default App
