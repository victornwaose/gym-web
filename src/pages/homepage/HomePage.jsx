import React from "react";

import { Exercises, HeroBanner, SearchExercises } from "../../components";

const HomePage = () => {
    return (
        <div className="w-[90%] ml-auto mr-auto">
            <HeroBanner />
            <SearchExercises />
            <Exercises />
        </div>
    );
};

export default HomePage;
