import profilePicture from 'assets/images/profile.jpg'
import React from 'react'

const Header = () => {
  const showMobileMenu = () => {
    document.getElementById('main-wrapper').classList.toggle('show-sidebar')
  }

  return (
    <header className="topbar navbarbg" data-navbarbg="skin6">
      <nav className={`navbar navbar-light h-100`}>
        <div className="navbar-header" id="logobg" data-logobg="skin6">
          <button
            className="btn-link nav-toggler d-block d-md-none"
            onClick={() => showMobileMenu()}
          >
            <i className="ti-menu ti-close" />
          </button>
        </div>
        <div className="collapse navbarbg show">
          <div className="dropdown">
            <img
              src={profilePicture}
              alt="user"
              className="rounded-circle"
              width="31"
            />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
