import React, { useEffect, useState } from "react";

import { fetchData, options } from "../../utils/fetchData";
import Slider from "../slider/Slider";

const SearchExercises = ({ setExercises, setBodyPart, bodyPart }) => {
    const [search, setSearch] = useState("");
    const [bodyParts, setBodyParts] = useState([]);
    useEffect(() => {
        const fetchBodyPart = async () => {
            const bodyPartsData = await fetchData(
                "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
                options
            );
            setBodyParts(["all", ...bodyPartsData]);
        };
        fetchBodyPart();
    }, []);

    const handleSearch = async () => {
        if (search) {
            try {
                const exercisesData = await fetchData(
                    "https://exercisedb.p.rapidapi.com/exercises",
                    options
                );

                const searchedExercises = exercisesData?.filter(
                    (exercise) =>
                        exercise?.name?.toLowerCase().includes(search) ||
                        exercise?.bodyPart?.toLowerCase().includes(search) ||
                        exercise?.target?.toLowerCase().includes(search) ||
                        exercise?.equipment?.toLowerCase().includes(search)
                );

                setSearch("");
                setExercises(searchedExercises);
            } catch {
                throw err;
            }
        }
    };

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
        w-[240 px]
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
        md:h-11
      "
                        placeholder="Search For Exercise "
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value.toLowerCase());
                        }}
                    />
                    <button
                        type="button"
                        className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 font-medium rounded text-sm px-5 py-1.5"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>{" "}
            </div>
            <div>
                {
                    <Slider
                        data={bodyParts}
                        setBodyPart={setBodyPart}
                        bodyPart={bodyPart}
                        setExercises={setExercises}
                    />
                }
            </div>
        </div>
    );
};

export default SearchExercises;
