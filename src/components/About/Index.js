import React from 'react';
import '../../components/css/About/Index.css';

export default function About() {
    return (
        <>
            <div className='MainAbout'>
                <div className='flex'>
                    <div className='innerAbout1'>
                        <p style={{ fontSize: 30, color: 'rgb(164, 116, 25)' }}>ABOUT US</p>
                        <p style={{ color: 'white', fontFamily: 'Courier New, Courier, monospace', fontSize: '16px', marginBottom: '10px' }}>
                            At DevTechIn, we are more than just a company; we are your partners in the digital world. With a relentless passion for innovation
                            and an unwavering commitment to excellence, we have established ourselves as a leading force in the realm of technology and digital
                            marketing. Our journey has been defined by our dedication to creating extraordinary digital experiences and empowering businesses
                            to thrive in the digital age.
                        </p>
                    </div>

                    <div className='innerAbout2'>
                        <img src="#" className='whatweimg' alt='logo'/>
                    </div>
                </div>
            </div>
        </>
    )
}