import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <h1>Pages</h1>
      <ul>
        <li><Link to="/books">Books</Link></li>
        <li><Link to="/form">Form</Link></li>
        <li><Link to="/form-class">Form Class</Link></li>
      </ul>
    </>
  )
}

export default Home
