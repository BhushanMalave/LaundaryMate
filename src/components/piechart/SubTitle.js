import React from "react";

const SubTitle = ({ radius, fill, textAnchor, subTitle1 }) => {
  return (
    <text x={radius} y={radius} fill={fill} textAnchor={textAnchor}>
      <tspan
        style={{
          fontFamily: "Bold",
          color: "#181818",
          textAlign: "center",
          fontSize: "18px",
        }}
      >
        {subTitle1}
      </tspan>
    </text>
  );
};

export default SubTitle;
