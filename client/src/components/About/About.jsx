import React, { useEffect } from 'react'
import classes from './About.module.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
const About = () => {
    useEffect(() => {
        Aos.init()
    })
    return (
        <div
            className={classes.about}
            data-aos='fade-up'
            data-aos-duration="1100"
        >
            <h1
                className={classes.about_heading}
                data-aos='zoom-in'
                data-aos-duration="1100"
            >
                About Us
            </h1>
            <p
                className={classes.about_para}
                data-aos='zoom-in'
                data-aos-delay='1'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor eu augue ut lectus arcu bibendum at varius vel. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus a. Habitant morbi tristique senectus et netus et malesuada fames ac. Mi sit amet mauris commodo quis imperdiet. Facilisi morbi tempus iaculis urna id volutpat lacus. Non nisi est sit amet facilisis magna etiam tempor orci. Sed viverra tellus in hac. 
            </p>
        </div>
    )
}

export default About