import React from "react";

import { Exercises, HeroBanner, SearchExercises } from "../../components";
import { Box, Stack, Typography } from "@mui/material";

const HomePage = () => {
    const [exercises, setExercises] = React.useState([]);
    const [bodyPart, setBodyPart] = React.useState("all");
    console.log(exercises, "exercises");

    return (
        <Box sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
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
                exercises={exercises}
            />
        </Box>
    );
};

export default HomePage;
