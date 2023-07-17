import React from 'react';
import CTPImg from '../assets/logoq.png'

const FullscreenImageLayout = () => {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex">
                <div className="relative h-0 banner-block">
                    <div className="image-art"></div>
                    <img
                        src={CTPImg}
                        alt="ctp"
                        className="logo-main"
                    />
                    <svg>
                        <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                            HACKATHON
                        </text>
                    </svg>
                    {/* <h1 className="main-title">HACKATHON 2023</h1> */}
                    <h2>ART & TECH</h2>
                    <p>August 22-23, 2023</p>
                </div>
            </div>
            <div className="bg-gray-200 flex-grow-0"> {/* Placeholder for additional content */}
                {/* Add your additional content here */}
            </div>
        </div>
    );
};

export default FullscreenImageLayout;
