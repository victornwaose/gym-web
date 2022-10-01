import React from "react";
import { Stack } from "@mui/system";

import Icon from "../../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
    return (
        <Stack
            type="button"
            alignItems="center"
            justify-content="center"
            className="bodyPart-card mt-5"
            sx={{
                borderTop: bodyPart === item ? "4px solid #ff2625" : "",
                backgroundColor: "#fff",
                borderBottomLeftRadius: "20px",
                width: "270px",
                height: "28px",
                cursor: "pointer",
                gap: "47px",
            }}
        >
            <img
                src={Icon}
                alt="dumbbell"
                style={{ width: "80px", height: "40px" }}
            />
        </Stack>
    );
};

export default BodyPart;
