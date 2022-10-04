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
                width: "100px",
                height: "100px",
                cursor: "pointer",
                gap: "17px",
            }}
            onClick={() => {
                setBodyPart(item);
                window.scrollTo({ top: 1500, left: 100, behavior: "smooth" });
            }}
        >
            <img
                src={Icon}
                alt="dumbbell"
                style={{ width: "30px", height: "30px", marginTop: "10px" }}
            />
            <h1 className="text-sm font-bold text-black capitalize">{item}</h1>
        </Stack>
    );
};

export default BodyPart;
