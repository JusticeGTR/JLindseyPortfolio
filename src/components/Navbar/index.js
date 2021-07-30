import React from "react";


export function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="navbar">
        <a className="navbar-brand" href="/">JLindsey</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" href="#work">Work <span className="sr-only">(current)</span></a>
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#contact">Contact</a>
            <a className="nav-link" href="#resume">Resume</a>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;
