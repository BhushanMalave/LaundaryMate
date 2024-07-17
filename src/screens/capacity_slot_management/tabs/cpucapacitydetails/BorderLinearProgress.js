import * as React from "react";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 100 : 100],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#3AC922" : "#d7d7d7",
  },
}));

export default function CustomizedProgressBars({value}) {
  return (
    <BorderLinearProgress
      variant="determinate"
      value={value}
      style={{ width: "140px" ,marginTop:"10px"}}
    />
  );
}
