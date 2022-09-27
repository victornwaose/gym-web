import React from "react";

import Icon from "../../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
    return (
        <div
            className={`flex justify-center cursor-pointer mt-8 align-center, ${
                bodyPart === item
                    ? {
                          borderTop: "4px solid #ff2625",
                          backgroundColor: "#fff",
                          borderBottomLeftRadius: "20px",
                          width: "270px",
                          height: "280px",
                          gap: "20px",
                      }
                    : {
                          background: "#fff",
                          borderBottomLeftRadius: "20px",
                          width: "270px",
                          height: "280px",
                          gap: "20px",
                      }
            }`}
        >
            <img
                src={Icon}
                alt="dumbbell"
                style={{ width: "40px", height: "40px" }}
            />
        </div>
    );
};

export default BodyPart;
