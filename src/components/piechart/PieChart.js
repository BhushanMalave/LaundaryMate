import React from "react";
import Pie from "./Pie";

const PieChart = ({
  data,
  subTitle1,
  radius,
  hole,
  colors,
  stroke,
  strokeWidth,
  showLabel,
}) => {
  return (
    <Pie
      data={data}
      subTitle1={subTitle1}
      radius={radius}
      hole={hole}
      colors={colors}
      stroke={stroke}
      strokeWidth={strokeWidth}
      showLabel={showLabel}
    />
  );
};

export default PieChart;
