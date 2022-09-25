import React from "react";

import BodyPart from "../bodyPart/BodyPart";

const Slider = ({ data, bodyPart, setBodyPart }) => {
    console.log(bodyPart);
    return (
        <div>
            {data?.map((item) => (
                <div
                    key={item.id || item}
                    itemId={item.id || item}
                    title={item.id || item}
                >
                    <BodyPart
                        item={item}
                        setBodyPart={setBodyPart}
                        bodyPart={bodyPart}
                    />
                </div>
            ))}
        </div>
    );
};

export default Slider;
