import React, { useState } from "react";
import { SelectDropDown } from "../select_drop_down/SelectDropDown";
import "../../components/location_management_table/LocationDeliveryCharges.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import deliveryDelete from "../../images/deliveryDelete.png";
import SelectLabel from "../../components/select_label.js/SelectLabel";
import DatePickerInput from "../single_datepicker_input/DatePickerInput";

function LocationDeliveryCharges({ arrComp }) {
  const options = [
    {
      label: "Greater than(>)",
      value: "greater",
    },
    {
      label: "Lesser than(<)",
      value: "lesser",
    },
    {
      label: "Equal to(=)",
      value: "equal",
    },
  ];
  const [select, setSelect] = useState({
    value: options[0].value,
    label: options[0].label,
  });
  return (
    <div className="locationCharges">
      <div className="locationChargesContent">
        <p className="locationDeliveryText">If Order Amount is</p>

        <div style={{ marginLeft: "20px", width: "214px", marginTop: "-33px" }}>
          <SelectLabel
            placeholder="Select Rule"
            options={options}
            styles={{ height: "60px", borderRadius: "8px" }}
          />
        </div>
        <div style={{ marginLeft: "20px", marginTop: "20px" }}>
          <DatePickerInput
            style={{ width: "178px" }}
            type="text"
            label="Enter Order Amount"
          />
        </div>
        <p className="locationDeliveryText">Delivery Charge is</p>
        <div style={{ marginLeft: "20px", marginTop: "20px" }}>
          <DatePickerInput
            style={{ width: "178px" }}
            type="text"
            label="Enter Order Amount"
          />
        </div>
        {arrComp.length > 1 && (
          <img
            style={{ marginTop: "15px", marginLeft: "20px" }}
            src={deliveryDelete}
            alt="deliveryDelete"
          />
        )}
      </div>
    </div>
  );
}

export default LocationDeliveryCharges;
