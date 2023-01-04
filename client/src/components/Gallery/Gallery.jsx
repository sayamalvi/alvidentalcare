import React, { useState } from 'react'
import Nav from "../Navbar/Nav"
import images from './images'
import classes from "./Gallery.module.scss"
const Gallery = () => {
    // const [selectedImage, setSelectedImage] = useState(null);
    // const handleClick = (image) => {
    //     setSelectedImage(image)
    // }
    // const handleClose = () => {
    //     setSelectedImage(null)
    // }
    return (
        <>
            <Nav />
            <div className={classes.gallery}>
                {/* {selectedImage && (
                    <div className={classes.gallery_selected_image_overlay} >
                        Close
                    </div>
                )} */}
                <div className={classes.gallery_image_grid}>
                    {images.map((image, index) => (
                        <div className={classes.gallery_image_cover}>
                            <img src={image.imgSrc} alt='alvi dental care'
                                className={classes.gallery_image}
                                key={index}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>

    )
}

export default Gallery


