import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { useEffect, useState } from 'react'
import User from './pages/User'

function App() {
  const [users,setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      let response = await fetch("https://jsonplaceholder.typicode.com/users")
      let json = await response.json();
      setUsers(json);
    }
    getUsers();

  },[])

  return (
    <BrowserRouter>
      <h1>Router with API</h1>
      <Routes>
        <Route path="/" element={<Home users={users}/>}/>
        <Route path="/users/:id/:hej" element={<User users={users} />} />
      </Routes>
   </BrowserRouter>
  )
}

export default App
