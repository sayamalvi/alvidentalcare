import React from 'react'
import classes from './Service.module.scss'

const Service = () => {
    return (
        <div className={classes.card}>
            <img className={classes.card__img} src='./serviceimgs/001-dental-crown.png' alt='dentalcrown' />
            <h3 className={classes.card__heading}>Dental Crown</h3>
            <p className={classes.card__detail}>
            Lorklndasnqnqwertpvnwyotvnqweyucnqwyocvcvnqweuycvnqweuyprcvnqweoprytwyocnqvcnqwryoptcnqwryoptucnqwrtyopcnqwtyiouvcvnqwtiuyoqcnwyuiocvnqwertyiou</p>
            <h5 className={classes.card__link}>Read more</h5>
        </div>
    )
}

export default Service