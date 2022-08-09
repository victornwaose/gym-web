import React from "react";

import { Exercises, HeroBanner, SearchExercises } from "../../components";

const HomePage = () => {
    const [exercises, setExercises] = React.useState([]);
    const [bodyPart, setBodyPart] = React.useState("all");

    return (
        <div className="w-[90%] ml-auto mr-auto">
            <HeroBanner />
            <SearchExercises
                setBodyPart={setBodyPart}
                bodyPart={bodyPart}
                setExercises={setExercises}
            />
            <Exercises
                setBodyPart={setBodyPart}
                bodyPart={bodyPart}
                setExercises={setExercises}
            />
        </div>
    );
};

export default HomePage;
