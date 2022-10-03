import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Box } from "@mui/system";

import Left from "../../assets/icons/left-arrow.png";
import Right from "../../assets/icons/right-arrow.png";
import BodyPart from "../bodyPart/BodyPart";

const Slider = ({ data, bodyPart, setBodyPart }) => {
    const LeftArrow = () => {
        const { scrollPrev } = React.useContext(VisibilityContext);

        return (
            <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
                <img src={Left} alt="leftArrow" />
            </Arrow>
        );
    };

    const RightArrow = () => {
        const { isLastItemVisible, scrollNext } =
            React.useContext(VisibilityContext);

        return (
            <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
                <img src={Right} alt="leftArrow" />
            </Arrow>
        );
    };

    console.log(bodyPart);

    return (
        <ScrollMenu
            className=" w-[80%] ml-auto mr-auto"
            RightArrow={Right}
            LeftArrow={Left}
        >
            {data?.map((item) => (
                <Box
                    width="400px"
                    key={item.id || item}
                    itemId={item.id || item}
                    title={item.id || item}
                    m="0 40px"
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
