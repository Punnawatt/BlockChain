'use client'
import React from 'react'
import { Link } from 'react-router-dom'
export default function MyNav() {
  return (
    // <Nav>
    //     <a href='#Home'>Home</a>
    //     <a href='#About'>about</a>
    // </Nav>
    <>
      <nav>
        {/* <a href="Home">Home</a>
        <a href="About">About</a> */}
        <Link to='/Home'>Home</Link>
        <Link to='/About'>About</Link>
      </nav>
    </>
  )
}

