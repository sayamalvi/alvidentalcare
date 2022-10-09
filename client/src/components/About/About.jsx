import React, { useEffect } from 'react'
import classes from './About.module.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
const About = () => {
    useEffect(() => {
        Aos.init()
    })
    return (
        <div className={classes.about}
            data-aos='fade-up'
            data-aos-duration="1100"
        >
            <h1
                data-aos='zoom-in'
                data-aos-duration="1100"
            >
                About Us
            </h1>
            <p
                data-aos='zoom-in'
                data-aos-delay='1'>
                Alvi Dental Care is a Dental Clinic Website. What else could it be !</p>
        </div>
    )
}

export default About