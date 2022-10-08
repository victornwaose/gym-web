import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import { ExerciseCard } from "../../components";

import { fetchData, options } from "../../utils/fetchData";

const Exercises = ({ bodyPart, setExercises, exercises }) => {
    console.log(exercises, "exercises");
    return (
        <Box sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
            <h2>Showing Results.....</h2>
            <Stack
                direction="row"
                sx={{ gap: { lg: "110px", xs: "50px" } }}
                flexWrap="wrap"
                justifyContent="center"
            >
                {exercises?.map((exercise, index) => (
                    <ExerciseCard key={index} exercise={exercise} />
                ))}
            </Stack>
        </Box>
    );
};

export default Exercises;
