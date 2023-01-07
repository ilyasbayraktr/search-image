import React from 'react'
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";

const ImageList = (props) => {

    const images = props.images.map(image => {
        return <a data-fancybox="gallery" data-src={image.largeImageURL} key={image.id}><img src={image.webformatURL} className="w-full h-full object-cover cursor-pointer" /></a>
    })

    return (
        <div className='grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3'>
            {images}
        </div>
    )
}

export default ImageList