import React, { useEffect } from 'react'
import classes from './Service.module.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Service = (props) => {
    useEffect(() => {
        Aos.init();
    })

    return (
        <div className={classes.card} data-aos="zoom-in-up">
            <img
                className={classes.card__img}
                src={props.img} alt={props.title} />
            <h3
                className={classes.card__heading}>
                {props.title}
            </h3>
            <p
                className={classes.card__detail}>
                {props.about}
            </p>
            <a
                href={props.link}
                className={classes.card__link}
            >
                Read more
            </a>
        </div>

    )
}

export default Service