import React, { useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import { Alarm, Play } from '@phosphor-icons/react';
import '../../components/css/carosal/FinalCarosal.css'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1, itemsToScroll: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 }
];

const data = [
    {
        name: "Website Development",
        disc: "Crafting digital masterpieces is our forte. We breathe life into your ideas, designing and developing websites that not only captivate but also convert. Our team of expert developers ensures that every website we create is a seamless blend of aesthetics and functionality, tailored to your unique vision."
    },
    {
        name: "Android and iOS Development",
        disc: "In a world driven by mobile technology, we are your trusted guides. Our proficient app developers are skilled in both Android and iOS platforms, creating intuitive and engaging applications that keep your audience hooked, no matter the device they use."
    },
    {
        name: "Search Engine Optimization",
        disc: "Visibility is key in the online landscape. Our SEO wizards work tirelessly to propel your website to the top of search engine rankings. We employ cutting-edge techniques to enhance your online presence, driving organic traffic and boosting your business's growth"
    },
    {
        name: "Social Media Marketing",
        disc: "In the age of social connectivity, we make sure your brand stays in the spotlight. Our social media experts craft engaging strategies that resonate with your audience, fostering brand loyalty and expanding your reach across platforms!"
    },
    {
        name: "Graphic Design",
        disc: "First impressions matter, and our graphic designers ensure yours is unforgettable. From stunning logos to eye-catching visuals, we create designs that convey your brand's essence, leaving a lasting impact on your audience."
    }
]

export default function FinalCarosal() {
    const [items, setItems] = useState([0, 1, 2, 3, 4, 5, 6, 7]);

    return (
        <>
            <div className="App">
                <Carousel breakPoints={breakPoints}>
                    {
                        data.map((val) => {
                            return (
                                <>
                                    <Item style={{ fontSize: 12, backgroundColor: 'black',borderRadius:10,height:300,paddingTop:200 }} className="carosalCardComp">
                                        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                                            <div className="carosalCardinnerComp">
                                                <div style={{ display: 'flex', alignItems: "center", justifyContent: 'center', marginBottom: 10 }}><Alarm size={32} color='gold' /></div>
                                                <p style={{ fontSize: 22 }}>{val.name}</p>
                                                <p style={{ fontSize: 14, paddingLeft: 15, paddingRight: 15 }}>{val.disc}</p>
                                                {/* <p style={{ marginTop: 30 }}>Read More</p> */}
                                            </div>
                                            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                                            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                                <button class="rounded-full text-gold-400 bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60" onClick={() => { alert(val.name) }}>Read More</button>
                                            </div>
                                        </div>
                                    </Item>
                                </>
                            )
                        })
                    }
                </Carousel>
            </div>
        </>
    );
}

