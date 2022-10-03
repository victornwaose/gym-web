import React from "react";
import { Stack } from "@mui/system";
import { Typography } from "@mui/material";

import Icon from "../../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
    console.log(item);
    return (
        <Stack
            type="button"
            alignItems="center"
            justify-content="center"
            className="bodyPart-card mt-5 w-[80%] h-full sml-auto mr-auto"
            sx={{
                borderTop: bodyPart === item ? "4px solid #ff2625" : "",
                backgroundColor: "#fff",
                borderBottomLeftRadius: "20px",
                width: "170px",
                height: "58px",
                cursor: "pointer",
                gap: "17px",
            }}
        >
            <img
                src={Icon}
                alt="dumbbell"
                style={{ width: "80px", height: "40px" }}
            />
            <h1
                fontSize="24px"
                fontWeight="bold"
                textTransform="upperCase"
                color="black"
            >
                {item}
            </h1>
        </Stack>
    );
};

export default BodyPart;
