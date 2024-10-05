import React from 'react'
import  '../../styles/index.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'


function Navbar() {
  const [fix, setFix]= useState(false)
 
  useEffect(()=>{
    const handleScroll = ()=>{
      setFix(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return()=>window.removeEventListener("scroll",handleScroll);
  });
  return (
    <nav className={`navbar navbar-expand-lg shadow-0 bg-white header ${fix ? 'sticky': ""}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="logo"/>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <input className="checkbox" type="checkbox" name="" id="" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">About Us</a>
          </li>
          <li className="nav-item">
            <Link  className="nav-link" to="#">Design</Link>
          </li>
          <li className="nav-item">
            <Link to="legal" className="nav-link">Legal</Link>
          </li>
          {/* <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="legal" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Legal 
            </Link>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li> */}
          <li className="nav-item">
            <Link to="immigration" className="nav-link">Immigration</Link>
          </li>
          <li className="nav-item">
            <Link to="accounting" className="nav-link">Accounts</Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link">Contact Us</Link>
          </li>
        </ul>
      
      </div>
    </div>
  </nav>
  )
}

export default Navbar
