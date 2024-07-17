import React, { useState } from "react";
import "./SelectDropDown.css";

export const SelectDropDown = ({
  select,
  setSelect,
  options,
  style,
  onClick,
  style1,
  disabled,
  setView,
  view,
}) => {
  const { width } = style;
  return (
    <div
      style={style}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <button
        style={style1}
        disabled={disabled}
        className="select-dropdown-container"
        onClick={() => setView(!view)}
      >
        <p className="select-dropdown-label">{select.label}</p>
        {view ? (
          <>
            <img
              className="select-dropdown-icon"
              src={require("../../images/arrowup.png")}
            />
          </>
        ) : (
          <>
            <img
              className="select-dropdown-icon"
              src={require("../../images/drop_down.png")}
            />
          </>
        )}
      </button>

      <div
        className="select-dropdown-options-container"
        style={{ width: width }}
      >
        {view ? (
          <>
            {options.map((item) => (
              <button
                value={item.value}
                onClick={(e) => {
                  setSelect({ value: e.target.value, label: item.label });
                  setView(!view);
                }}
                className="select-dropdown-options-text"
              >
                {item.label}
              </button>
            ))}
          </>
        ) : null}
      </div>
    </div>
  );
};
