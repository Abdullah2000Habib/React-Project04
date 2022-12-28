import React from 'react';
import Header from './Header';
import Hero from './Hero/Hero';
import Products from './Products/Products';
import Slider from './Slider/Slider';
import Virtual from './Virtual/Virtual';
export default function Home() {
  return (
    <div>
        
        <Header/>
        <Hero/>
        <Slider />
        <Virtual />
        <Products />
        
    </div>
  )
}
