import React, {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen,
        setMenuOpen] = useState(false);
    return <nav>
        <Link to="/" className='title'>
            <div className='logo'>
                <img
                    src="https://iconape.com/wp-content/files/mc/284125/svg/284125.svg"
                    alt=""
                    width="170"
                    height="50"/>
            </div>
        </Link>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
        </div>

        <ul className={menuOpen
            ? "open"
            : ""}>

            <li>
                <NavLink to="/" className='nav-link'>Cinemas</NavLink>
            </li>
            <li>
                <NavLink to="/films" className='nav-link'>Movies</NavLink>
            </li>
            <li>
                <NavLink to="/signIn" className='nav-link'>SignIn</NavLink>
            </li>
            <li>
                <NavLink to="/signUp" className='nav-link'>SignUp</NavLink>
            </li>
        </ul>

    </nav>

}

export default Navbar
