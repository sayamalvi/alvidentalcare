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
                qerertyutyuiouiopjkbvbjxfgeas4wetfgxcvbvbnmjkliohyfjryutuffghghcgvirturyuovryuovbryuoryuvbrybryubkrykbryubkryukb
            </p>
        </div>
    )
}

export default About