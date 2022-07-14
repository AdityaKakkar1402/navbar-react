import '../Styles/navbar.css'

import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar-body">
      <span className="nav-title">Aditya</span>
      <div className="navitems">
          <span className="navitem">Home</span>
          <span className="navitem">Projects</span>
          <span className="navitem">Achivements</span>
         
      </div>

      <div className="navcontact">
      <button className="nav-button">Contact</button>
      </div>
    </div>
  )
}

export default Navbar
