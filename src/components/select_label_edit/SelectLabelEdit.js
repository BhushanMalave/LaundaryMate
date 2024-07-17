import React, { useState } from "react";
import Select, { components } from "react-select";
// import { colourOptions } from "./docs/data";

const vehicleStatus = [
  { value: "Active", label: "Active" },
  { value: "Inactive", label: "Inactive" },
];

const { ValueContainer, Placeholder } = components;

const CustomValueContainer = ({ children, ...props }) => {
  return (
    <ValueContainer {...props}>
      <Placeholder {...props} isFocused={props.isFocused}>
        {props.selectProps.placeholder}
      </Placeholder>
      {React.Children.map(children, (child) =>
        child && child.key !== "placeholder" ? child : null
      )}
    </ValueContainer>
  );
};

const SelectLabelEdit = ({
  options,
  placeholder,
  styles = {},
  containerStyles = {},
  styles1,
  disable,
  getValue,
  value
}) => {
  const [focused, setFocused] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const handleChange = (e) => {
    getValue({
      value:e.value,
      label:e.label
    })
  };
  return (
    <Select
      className="basic-single"
      classNamePrefix="select"
      name="color"
      options={options}
      isDisabled={disable}
      components={{
        ValueContainer: CustomValueContainer,
        IndicatorSeparator: () => null,
      }}
      maxMenuHeight={300}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      value={value}
      onChange={handleChange}
      isFocused={focused}
      placeholder={placeholder}
      theme={(theme) => ({
        ...theme,
        spacing: {
          ...theme.spacing,
          baseUnit: 2,
          controlHeight: 30,
          menuGutter: 8,
        },
      })}
      styles={{
        container: (provided, state) => ({
          ...provided,
          marginTop: 50,
          ...containerStyles,
        }),
        valueContainer: (provided, state) => ({
          ...provided,
          ...styles,
          overflow: "visible",
        }),
        control: (base) => ({
          ...base,
          fontFamily: "regular",
          ...styles1,
        }),
        placeholder: (base, state) => ({
          ...base,
          position: "absolute",
          top:
            state.hasValue ||
            state.selectProps.inputValue ||
            state.selectProps.isFocused
              ? "0%"
              : "30%",
          transition: "top 0.2s, font-size 0.1s",
          fontSize:
            (state.hasValue ||
              state.selectProps.inputValue ||
              state.selectProps.isFocused) &&
            12,
        }),
      }}
    />
  );
};

export default SelectLabelEdit;
