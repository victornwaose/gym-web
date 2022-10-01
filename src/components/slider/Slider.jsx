import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import { Box } from "@mui/system";

import BodyPart from "../bodyPart/BodyPart";

const Slider = ({ data, bodyPart, setBodyPart }) => {
    console.log(bodyPart);
    return (
        <ScrollMenu className=" w-[80%] ml-auto mr-auto">
            {data?.map((item) => (
                <Box
                    width="400px"
                    key={item.id || item}
                    itemId={item.id || item}
                    title={item.id || item}
                >
                    <BodyPart
                        item={item}
                        setBodyPart={setBodyPart}
                        bodyPart={bodyPart}
                    />
                </Box>
            ))}
        </ScrollMenu>
    );
};

export default Slider;
