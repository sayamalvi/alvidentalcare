import React, { useEffect, useState } from 'react'
import classes from './Services.module.scss'
import data from './data.js'
import Service from './Service/Service'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Services = () => {
    useEffect(() => {
        Aos.init()
    })
    const [item, setItem] = useState(data)
    const [visible, setVisible] = useState(4);
    const showMore = () => {
        setVisible(prev => prev + 4);
    }
    return (
        <>
            <h2
                className={classes.heading}
                data-aos="zoom-in"
                data-aos-duration="1100">
                What do we offer ?
                <br />A beautiful smile to you !</h2>
            <div
                className={classes.container}>
                {item.slice(0, visible).map((service) => (
                    <Service
                        key={service.id}
                        title={service.title}
                        about={service.about}
                        img={service.img}
                        link={service.link}
                    />
                ))}
                {visible === 4 ? (
                    <button
                        onClick={showMore}
                        className={classes.showMore}>Show More</button>
                ) : null}
            </div>
        </>
    )
}

export default Services