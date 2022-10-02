import React, { useEffect } from 'react'
import classes from './Heading.module.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Heading = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])
    return (
        <div className={classes.heading} data-aos="fade-up">
            <h4 className={classes.heading__first}>WELCOME TO</h4>
            <h1 className={classes.heading__second}>ALVI DENTAL CARE </h1>
            <p className={classes.heading__para}>A one stop solution for all your dental needs.</p>
        </div>
    )
}

export default Heading