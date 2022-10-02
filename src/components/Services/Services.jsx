import React from 'react'
import classes from './Services.module.scss'
import data from './data.js'
import Service from './Service/Service'
const Services = () => {
    return (
        <>
            <h2 className={classes.heading}>Our Services</h2>
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