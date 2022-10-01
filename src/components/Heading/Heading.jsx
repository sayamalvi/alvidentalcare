import React, { useEffect } from 'react'
import './Heading.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Heading = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])
    return (
        <div className='heading' data-aos="fade-up">
            <h4>WELCOME TO</h4>
            <h1 className='adc'>ALVI DENTAL CARE </h1>
            <p>A one stop solution for all your dental needs.</p>
        </div>
    )
}

export default Heading