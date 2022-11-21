import React, { useEffect } from 'react'
import classes from "./PaymentSuccess.module.scss"
import animation from "./animation.gif"
import Aos from 'aos'
import 'aos/dist/aos.css'
const PaymentSucess = () => {
  useEffect(() => {
    Aos.init()
  })
  const clickOkay = () => {

  }
  return (
    <div className={classes.payment_wrapper}>
      <div className={classes.payment_wrapper_box}
        data-aos="zoom-in"
        data-aos-duration="200">
        <h3>
          Your appointment has been confirmed !
        </h3>
        <h4>We will contact you soon regarding timing confirmation</h4>
        <img src={animation} alt='confirm'></img>
        <button className={classes.payment_wrapper_box_button}
          onClick={clickOkay}>Okay</button>
      </div>
    </div>
  )
}

export default PaymentSucess