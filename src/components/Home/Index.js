import React from "react";
import Carosal from "../Carosal/Index";
import CarouselAlice from "../Carosal/AliseCarosal";
import '../../components/css/home/Index.css';
import VideoGallery from "./VideoGallery";
import Status from "./Status";
import PhotographyPackage from "./PhotographyPackage";
import About from "../About/Index";
import MainTest from "./Test";
import Test1 from "./Test1";
export default function Home() {
    return (
        <>
            <div className="HomeComp">
                {/* <Carosal /> */}
                {/* <CarouselAlice /> */}

                {/* <div className="bg-red-400 h-screen">
                    <p className="text-center">Home</p>
                </div> */}

                {/* <MainTest /> */}
                <Test1 />


                {/* <MainTest />
                <Status />
                <VideoGallery />
                <PhotographyPackage />

                <div className="OfferComp">
                    <div>
                        <p style={{ color: 'white', textAlign: 'center', alignItems: 'center', fontSize: 32 }}>Get Amazing Offers for your Wedding</p>
                        <p className='beit'>The spontaneous candid photography of the couple and the dear ones, or the cinematic angles of the rituals, or the classic family photograph.</p>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}><span className="getQuote1" >Get Quote</span></div>
                    </div>
                </div> */}
            </div>
        </>
    )
}