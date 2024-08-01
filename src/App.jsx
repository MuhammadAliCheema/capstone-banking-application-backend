import { Routes, Route, Navigate } from "react-router-dom"
import React from "react"

import Auth from "./components/Auth"

import Dashboard from "./pages/Dashboard"
import Signup from "./pages/Signup"
import Login from "./pages/Login"

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Auth auth={false} children={<Login />} />} />
      <Route path="/signup" element={<Auth auth={false} children={<Signup />} />} />
      <Route path="/dashboard" element={<Auth auth children={<Dashboard />} />} />
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  )
}

export default App
