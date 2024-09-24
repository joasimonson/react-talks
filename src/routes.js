import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Books from './pages/Books'
import Form from './pages/Form'
import FormClass from './pages/ClassComponents/FormClass'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<Books />} />
      <Route path="/form" element={<Form />} />
      <Route path="/form-class" element={<FormClass />} />
    </Routes>
  )
}

export default AppRoutes