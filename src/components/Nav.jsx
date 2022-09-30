import React, { useState } from 'react'
import classes from './Nav.module.scss'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuTogglerHandler = () => {
        setMenuOpen((p) => !p);
    }
    return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                <img className={classes.header__content__logo} src={require('..//imgs/logo.png')} />
            </div>
            <nav className={`${classes.header__content__nav} ${menuOpen ? classes.isMenu : ""}`}>
                <ul>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/'>About</a>
                    </li>
                    <li>
                        <a href='/'>Services</a>
                    </li>
                    <li>
                        <a href='/'>Contact</a>
                    </li>
                </ul>
            </nav>
            <div className={classes.header__content__toggle}>
                {!menuOpen ?
                    <BiMenuAltRight
                        onClick={menuTogglerHandler}
                        color="green"
                        size="20px"
                    /> :
                    <AiOutlineClose
                        onClick={menuTogglerHandler}
                        color="white"
                        size="20px"
                    />}
            </div>
        </header>
    )
}

export default Nav