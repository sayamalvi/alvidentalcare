import React, { useEffect } from 'react'
import classes from './About.module.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
const About = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className={classes.about} data-aos="fade-up">
            <h3 className={classes.about__heading}>About Us</h3>
            <p className={classes.about__para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  </p>
        </div>
    )
}

export default About