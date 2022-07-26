import React from "react";

import Banner from "../../assets/images/banner.png";

const HeroBanner = () => {
    return (
        <div className="w-[90%] ml-auto mr-auto">
            <div className="flex justify-between relative">
                <div className="mt-16  md:mt-40 w-[60%]">
                    <h3 className=" text-lg text-amber-700 font-bold md:text-2xl ">
                        Fitness Club
                    </h3>
                    <h2 className="font-bold text-2xl text-black mt-4 mb-4 md:text-4xl">
                        Sweat, Smile <br /> And Repeat
                    </h2>
                    <h5 className="text-black text-base mb-7">
                        checks out our most effective exercises to your fitness
                    </h5>
                    <button
                        type="button"
                        className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 font-medium rounded text-sm px-5 py-1.5"
                    >
                        Explore Exercises
                    </button>
                </div>
                <div className="w-[60%]">
                    <img
                        src={Banner}
                        alt="Hero"
                        className="w-[100%] h-full md:h-4/5"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;
