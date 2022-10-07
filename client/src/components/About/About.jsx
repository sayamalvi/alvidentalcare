import React, { useEffect } from 'react'
import classes from './About.module.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
import services from './whyus';
const About = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div
            className={classes.about}
            data-aos="fade-up"
            data-aos-duration="1500">
            <h3
                className={classes.about__heading}>
                Why choose Us ?</h3>
            <p
                className={classes.about__para}>
                Well you've got plenty of reasons ! </p>

            <div className={classes.about__grid}>
                {services.map((service) => (
                    <div
                        className={classes.about__grid__item}
                        data-aos='zoom-in'
                        data-aos-duration="900"
                        key={service.id}>
                        <img
                            src={service.img}
                            alt={service.img}
                        />
                        <p>{service.content}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default About