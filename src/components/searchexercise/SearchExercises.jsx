import React, { useEffect, useState } from "react";

const SearchExercises = () => {
    return (
        <div className="w-[90%] ml-auto mr-auto mt-10 md:mt-6">
            <div className="w-[80%] ml-auto mr-auto md:w-[40%]">
                <h1 className="text-2xl text-black font-sans font-bold md:text-4xl text-center">
                    Awesome Exercises You Should Know{" "}
                </h1>
            </div>
            <div className="flex justify-center mt-4">
                <div className="flex">
                    <input
                        type="text"
                        className="
        form-control
        block
        w-[260px]
        h-9
        px-4
        py-2
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        md:w-[990px]
      "
                        placeholder="Search For Exercise "
                    />
                    <button
                        type="button"
                        class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 font-medium rounded text-sm px-5 py-1.5"
                    >
                        Search
                    </button>
                </div>{" "}
            </div>
        </div>
    );
};

export default SearchExercises;
