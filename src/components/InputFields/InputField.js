import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const InputField = (props) => {
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { width: "100%", marginTop: "30px" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          value={value}
          label={props.label}
          placeholder={props.placeholder}
          type={props.type}
          onChange={(text) => {
            onChange(name)(text);
            props.setText(text.target.value);
            props.handlePasswordChange(text.target.value);
          }}
          onBlur={() => {
            setFieldTouched(name);
            onBlur(name);
          }}
          {...inputProps}
        />
        {hasError && (
          <p
            style={{
              color: "red",
              fontFamily: "regular",
              margin: "5px 0px 0px 5px",
            }}
          >
            {errors[name]}
          </p>
        )}
      </Box>
    </div>
  );
};

export default InputField;
