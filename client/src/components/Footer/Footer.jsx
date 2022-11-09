import React from 'react'
import classes from "./Footer.module.scss"
import footerLogo from './ADC.jpeg'
import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlinePhone } from 'react-icons/ai'
import { ImLocation2 } from 'react-icons/im'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineCopyright } from 'react-icons/ai'


const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.footer__content}>
                <img
                    alt='footer__logo'
                    className={classes.footer__content__image}
                    src={footerLogo} />
                <div className={classes.footer__content__visit}>
                    <h2
                        className={classes.footer__content__heading}>Visit Us</h2>
                    <div className={classes.footer__content__visit__location}>
                        {/* <ImLocation2 style={{ margin: '0 7px' }} size='15px' /> */}
                        1224, Madina Trading Center, Ramganj Bazar, Jaipur, Rajasthan,  302003
                    </div>
                </div>
                <div className={classes.footer__content__hours}>
                    <h2
                        className={classes.footer__content__heading}>
                        Clinic Hours
                    </h2>
                    <p className={classes.footer__content__hours__timing}>
                        <span
                            className={classes.footer__content__hours__timing__bold}>
                            Morning: </span>
                        9 A.M To 2 P.M.
                    </p>
                    <p className={classes.footer__content__hours__timing}>
                        <span
                            className={classes.footer__content__hours__timing__bold}>
                            Evening: </span>
                        5 P.M To 9 P.M.
                    </p>
                    <p className={classes.footer__content__hours__timing}>
                        <span
                            className={classes.footer__content__hours__timing__bold}>
                            Sunday </span>
                        Closed
                    </p>
                </div>
                <div className={classes.footer__content__contact}>
                    <h2
                        className={classes.footer__content__heading}>
                        Contact Us
                    </h2>
                    <AiOutlineMail
                        style={{
                            margin: '0 4px'
                        }}
                        size='20px'

                    />
                    <AiOutlinePhone style={{
                        margin: '0 4px'
                    }}
                        size='20px' />
                    <AiOutlineInstagram
                        style={{
                            margin: '0 4px'
                        }}
                        size='20px'
                    />
                </div>
            </div>
            <div className={classes.footer__copyright}>
                <p>
                    Copyright
                    <AiOutlineCopyright
                        style={{
                            margin: '0 4px'
                        }}
                        size='15px'
                    />
                    Alvi Dental Care 2022
                </p>
                <p>All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer