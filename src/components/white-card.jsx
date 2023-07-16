import React from 'react';

const Cards = ({ heading, text, buttonInfo, buttonHref, imageSrc }) => {
    return (
        <div className="bg-white flex justify-center items-center py-16">
            <div className="rounded-lg px-8">
                <div className="flex">

                    <div className="w-2/3 ml-4">
                        <h1 className="text-3xl font-bold mb-4">{heading}</h1>
                        <p className="leading-loose text-gray-700 mb-4">{text}</p>
                        <a
                            href={buttonHref}
                            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                        >
                            {buttonInfo}
                        </a>
                    </div>
                    <div className="w-1/6 rounded-lg overflow-hidden relative mx-10">
                        <img
                            src={imageSrc}
                            alt=""
                            className="w-full h-full object-cover8 inset-0"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;
