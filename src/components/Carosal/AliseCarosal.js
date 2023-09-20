import React from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../../components/css/carosal/CarosalAlice.css';
import FinalCarosal from './FinalCarosal';


const CarouselAlice = () => {
    return (
        <>
            <div className='AliseCarosalComp'>
                <p style={{ color: 'white', textAlign: 'center', color: 'gold' }}>SERVICES</p>
                <p className='text-4xl text-center mb-4'>WHAT WE OFFER</p>
                <div className='w-screen'>
                    <FinalCarosal />
                </div>

            </div>
        </>
    )

};

export default CarouselAlice;