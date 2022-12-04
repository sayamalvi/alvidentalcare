import React, { useState } from 'react'
import classes from './Nav.module.scss'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuTogglerHandler = () => {
        setMenuOpen((p) => !p);
    }
    return (
        <header
            className={classes.header}>
            <img
                className={classes.header__content__logo}
                alt='logo'
                src={require('../../imgs/logo.png')}
                href='/'
            />
            <nav
                className={`${classes.header__content__nav} ${menuOpen ? classes.isMenu : ""}`}>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/'>About</Link>
                    </li>
                    <li>
                        <Link to='/'>Services</Link>
                    </li>
                    <li>
                        <Link to='/gallery'>Gallery</Link>
                    </li>
                    <li>
                        <Link to='/'> Appointment</Link>
                    </li>
                </ul>
            </nav>
            <div className={classes.header__content__toggle}>
                {!menuOpen ?
                    <BiMenuAltRight
                        onClick={menuTogglerHandler}
                        color="green"
                        size="25px"
                    /> :
                    <AiOutlineClose
                        onClick={menuTogglerHandler}
                        color="white"
                        size="25px"
                    />}
            </div>
        </header>
    )
}

export default Nav