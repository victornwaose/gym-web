import React from "react";

import Icon from "../../assets/icons/gym.png";

const BodyPart = ({ item, setBody }) => {
    return (
        <div>
            <img src={Icon} alt="dumbbell" />
        </div>
    );
};

export default BodyPart;
