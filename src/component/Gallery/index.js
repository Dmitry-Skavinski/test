import React from "react";
import './gallery.css';
import house1 from './images/house1.png';
import house2 from './images/house2.png';
import house3 from './images/house3.png';

export const Gallery = () => {
    return (
        <section className="gallery">
            <img src={house1} />
            <img src={house2} />
            <img src={house3} />
        </section>
    );
}
 
export default Gallery;