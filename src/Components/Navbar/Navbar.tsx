/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import Logo from '../../Assets/Images/logo1.png'
import './Navbar.css'


const Navbar = () => {
  return (
    <div>
      <div className="navbar-box">
        <div className="navbar-box2">
          <div className="navbar-box3">
            <div className="navbar-box4">
              <div className="navbar-box5">
                <img src={Logo} alt="Logo" className="navbar-img" />
                <h1 className="navbar-h">Vikings Cards</h1>

              </div>

              <div className="navbar-box6">
                <ul className="navbar-ul">
                  <li className="navbar-li"><a href="/" className="navbar-a">Home</a><span></span></li>
                  <li className="navbar-li"><a href={`/mint`} className="navbar-a">Mint</a><span></span></li>
                  <li className="navbar-li"><a href={`/roadmap`} className="navbar-a">Roadmap</a><span></span></li>
                  <li className="navbar-li"><a href={`/about`} className="navbar-a">About Us</a><span></span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar