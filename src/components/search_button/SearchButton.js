import { Button } from "@mui/material";
import React from "react";

const SearchButton = ({style,text,onClick}) => {
  return (
    <Button
      style={style}
      variant="outlined"
      onClick={onClick}
      sx={{
        width: 139,
        height: 44,
        fontFamily: "Regular",
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: 16,
        textTransform: "capitalize",
        borderColor: "#0074BC",
        borderWidth: 1,
        borderRadius: 2,
      }}
    >
      {text}
    </Button>
  );
};

export default SearchButton;
