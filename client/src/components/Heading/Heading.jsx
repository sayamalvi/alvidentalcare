import React, { useEffect } from 'react'
import classes from './Heading.module.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { AiOutlineArrowDown } from 'react-icons/ai'
const Heading = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className={classes.heading}>
            <h4
                className={classes.heading__first}
                data-aos="zoom-in">WELCOME TO
            </h4>
            <h1
                className={classes.heading__second}
                data-aos="fade-up">ALVI DENTAL CARE
            </h1>
            <p
                className={classes.heading__para}
                data-aos="fade-up"
                data-aos-delay="700">
                A one stop solution for all your dental needs.
            </p>
            <AiOutlineArrowDown
                className={classes.heading__arrow}
                size='25px'
                data-aos="fade-up"
                data-aos-delay="800"
            />
        </div>
    )
}

export default Heading