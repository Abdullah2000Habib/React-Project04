import React from 'react';
import style from "./style.module.css";
export default function TestimonialCard({img,comment,name}) {
return (
    <>
        <div className={style.testimonial}>
            <img src={img} alt="img"/>
            <span>{comment}</span>
            <hr/>
            <span>{name}</span>
        </div>
    </>
)
}
