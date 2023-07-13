import React from 'react';
import CTPImg from '../assets/img.png'

const FullscreenImageLayout = () => {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex-grow">
                <div className="relative h-0 pb-[56.25%]">
                    <img
                        src={CTPImg}
                        alt="ctp"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>
            </div>
            <div className="bg-gray-200 flex-grow-0"> {/* Placeholder for additional content */}
                {/* Add your additional content here */}
            </div>
        </div>
    );
};

export default FullscreenImageLayout;
