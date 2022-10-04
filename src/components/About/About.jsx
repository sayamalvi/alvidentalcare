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
            <h3 className={classes.about__heading}>Why choose Us ?</h3>
            <p className={classes.about__para}>
                Well you've got plenty of reasons ! </p>
        </div>
    )
}

export default About