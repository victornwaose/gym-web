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
            <h1 onClick={() => scrollPrev()}>
                <img src={Left} className="text-lg" alt="leftArrow" />
            </h1>
        );
    };

    const RightArrow = () => {
        const { scrollNext } = React.useContext(VisibilityContext);

        return (
            <h1 onClick={() => scrollNext()}>
                <img src={Right} className="text-lg" alt="leftArrow" />
            </h1>
        );
    };

    console.log(bodyPart);

    return (
        <ScrollMenu RightArrow={RightArrow} LeftArrow={LeftArrow} ss>
            {data?.map((item) => (
                <div
                    className="w-[80%] ml-auto mr-auto"
                    key={item.id || item}
                    itemId={item.id || item}
                    title={item.id || item}
                    m="0 20px"
                >
                    <div className="w-[80%] ml-auto mr-auto">
                        <BodyPart
                            item={item}
                            setBodyPart={setBodyPart}
                            bodyPart={bodyPart}
                        />
                    </div>
                </div>
            ))}
        </ScrollMenu>
    );
};

export default Slider;
