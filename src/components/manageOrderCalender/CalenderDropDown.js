import React, { useState } from "react";
import MultipleDatePicker from "../multiple_date_picker/MultipleDatePicker";
import "./CalenderDropDown.css";

const CalenderDropDown = ({
  select,
  setSelect,
  options,
  style,
  onClick,
  style1,
  disabled,
}) => {
  const [view, setView] = useState(false);
  const { width } = style;
  return (
    <div style={{display:"flex",flexDirection:"row",width:"400px"}}>
      <div style={style} onClick={onClick} >
        <button
          style={style1}
          disabled={disabled}
          className="select-dropdown-container"
          onClick={() => setView(!view)}
        >
          <p className="select-dropdown-label">{select.label}</p>
          <img
            className="select-dropdown-icon"
            src={require("../../images/drop_down.png")}
            alt="drop down"
          />
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
      <div>
      <MultipleDatePicker style={{borderTopRightRadius:"8px",borderTopLeftRadius:"0px",borderBottomLeftRadius:"0px"}}/>
      </div>
    </div>
  );
};

export default CalenderDropDown;
