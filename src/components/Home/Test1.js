import React from 'react';
import './Test1.css';
import videoBg from '../../assets/bgvideo2.mp4';
import About from '../About/Index';
import CarouselAlice from '../Carosal/AliseCarosal';

function Test1() {
    return (
        <div className='Outer'>
            <video src={videoBg} autoPlay loop muted className='h-full w-full' />
            <div className='slider1d'>
                <div>
                    <h1 className='text-2xl uppercase'>Welcome</h1>
                    <p className='text-8xl'>DevTechin</p>
                    <p className='text-xl'>Experience the Next Level of Innovation with DevTechin: Your Partner for
                        Cutting-Edge Solutions</p>
                    {/* <div className='text-center'><p className='scrolldown'>Scroll Down</p></div> */}
                </div>
            </div>
            <div className='slider2d'>
                <About />
            </div>
            <div className='slider3d'>
                <CarouselAlice />
            </div>
        </div>
    )
}

export default Test1