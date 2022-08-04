import React from "react";

const Slider = ({ bodyParts }) => {
    return (
        <div>
            {bodyParts?.map((item) => (
                <div
                    key={item.id || item}
                    itemId={item.id || item}
                    title={item.id || item}
                >
                    {item}
                </div>
            ))}
        </div>
    );
};

export default Slider;
