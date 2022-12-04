import React from 'react'
import Nav from "../Navbar/Nav"
import images from './images'
import classes from "./Gallery.module.scss"
const Gallery = () => {
    return (
        <>
            <Nav />
            <div className={classes.gallery}>
                {images.map((image, index) => {
                    return (
                        <div className={classes.gallery__pics} key={index}>
                            <img src={image.imgSrc} alt='alvi dental care'></img>
                        </div>
                    )
                })}
            </div>
        </>

    )
}

export default Gallery