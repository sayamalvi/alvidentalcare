import React, { useEffect } from 'react'
import classes from './Services.module.scss'
import data from './data.js'
import Service from './Service/Service'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Services = () => {
    useEffect(() => {
        Aos.init()
    })
    return (
        <>
            <h2 className={classes.heading} data-aos="zoom-in">What do we have to offer ? <br />A lot !</h2>
            <div className={classes.container}>
                {data.map((service) => (
                    <Service
                        key={service.id}
                        title={service.title}
                        about={service.about}
                        img={service.img}
                        link={service.link}
                    />
                ))}
            </div>
        </>
    )
}

export default Services