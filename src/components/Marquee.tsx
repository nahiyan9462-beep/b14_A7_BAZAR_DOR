import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"
import { IProducts } from '@/types/products';
import React from 'react';

const Marquee = async() => {

const res= await fetch('https://openapi.programming-hero.com/api/bazardor/products')
const data:IProducts[] =await res.json()  
const headlines = data
console.log(headlines);
return (
    <div className='gap-10 mt-5 items-center justify-center bg-slate-50 p-2'>
        <MarqueeText direction="right" duration={15}>
            {
            headlines.map((h,i) =><span key={i}><span>{h.categoryIcon}{h.nameBn} {h.today} taka /kg {h.unit
            }</span><span className="mx-5"></span>
            </span>
            )}
        </MarqueeText>;
    </div>
);

};

export default Marquee;