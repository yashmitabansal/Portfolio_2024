import React from 'react'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap/dist/js/bootstrap.bundle';
import { NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Projects from './Projects';
import './Navbar.css';
const Navbar = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand yassuLogo" href="#">YashmitaBansal</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item ">
                                <NavLink className="nav-link" aria-current="page"
                                    to='/'> Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/About'> About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/Projects'> Projects</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to='/Contact'> Hire Me</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar;