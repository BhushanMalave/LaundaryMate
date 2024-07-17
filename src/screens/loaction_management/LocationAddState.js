import React, { useState } from "react";
import "../loaction_management/LocationCountryDetails.css";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import "../loaction_management/LocationAddState.css";
import SearchButton from "../../components/search_button/SearchButton";
import { AddButton } from "../../components/buttons/Button";
import { SelectDropDown } from "../../components/select_drop_down/SelectDropDown";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import SelectLabel from "../../components/select_label.js/SelectLabel";
import DatePickerInput from "../../components/single_datepicker_input/DatePickerInput";
import { Link } from "@mui/material";

function LocationAddState({ crumbHeading, setModal1 }) {
  const [link1, setLink1] = useState(true);
  const [link2, setLink2] = useState(false);

  const options = [
    {
      label: "Status",
      value: "status",
    },
    {
      label: "Active",
      value: "active",
    },
    {
      label: "Disabled",
      value: "disabled",
    },
  ];
  const [select, setSelect] = useState({
    value: options[0].value,
    label: options[0].label,
  });

  return (
    <div className="locationCountyCon">
      <BreadCrumb title={`${crumbHeading}`}>
      <Link
          underline="none"
          color="#0074BC"
          href="/LocationManagement"
          className="bread-crumb-link"
        >
          Location Management
        </Link>
      </BreadCrumb>
      <div className="locationAddStateHeader">
        <p className="locationCountyHeadText1">Add New State</p>
        <div className="locationCountyStateButton">
          <SearchButton
            text="Cancel"
            onClick={() => {
              setModal1(false);
            }}
          />
          <AddButton
            onClick={() => {
              console.log("hello");
            }}
            text="Update"
            style={{ width: "124px" }}
          />
        </div>
      </div>
      <div className="locationCountyLink">
        <li className="locationCountyLinkEle">
          <a
            onClick={() => {
              setLink1(true);
              setLink2(false);
            }}
            style={{
              color: link1 ? "#0074BC" : "black",
              borderBottom: link1 ? "3px solid #0074BC" : "none",
            }}
            className="locationCountyAnchor"
            href="#con1"
          >
            State Details
          </a>
        </li>
        <li className="locationCountyLinkEle">
          <a
            onClick={() => {
              setLink1(false);
              setLink2(true);
            }}
            style={{
              color: link2 ? "#0074BC" : "black",
              borderBottom: link2 ? "3px solid #0074BC" : "none",
            }}
            className="locationCountyAnchor"
            href="#con2"
          >
            Add GST Details
          </a>
        </li>
      </div>
      <div className="locationCountyContent">
        <div id="con1" className="locationCreateStateContent">
          <div className="locationCountyCountryHeadDiv1">
            <p className="locationCountyCountryContentHead">State Details</p>
          </div>
          <div className="locationAddStateContent">
            <div
              style={{ marginLeft: "20px", width: "400px", marginTop: "-33px" }}
            >
              <SelectLabel
                placeholder="Select Type"
                options={options}
                styles={{ height: "60px", backgroundColor: "#F8F8F8" }}
                styles1={{ backgroundColor: "#F8F8F8" }}
              />
            </div>

            <div
              style={{ marginLeft: "20px", width: "400px", marginTop: "-33px" }}
            >
              <SelectLabel
                placeholder="State Name"
                options={options}
                styles={{ height: "60px", backgroundColor: "#F8F8F8" }}
                styles1={{ backgroundColor: "#F8F8F8" }}
              />
            </div>
            <div
              style={{ marginLeft: "20px", width: "400px", marginTop: "20px" }}
            >
              <DatePickerInput
                type="text"
                label="Enter State Short Name"
                style={{ backgroundColor: "#F8F8F8" }}
                style1={{ backgroundColor: "#F8F8F8" }}
              />
            </div>
            <div
              style={{ marginLeft: "20px", width: "400px", marginTop: "-33px" }}
            >
              <SelectLabel
                placeholder="Select City"
                options={options}
                styles={{ height: "60px", backgroundColor: "#F8F8F8" }}
                styles1={{ backgroundColor: "#F8F8F8" }}
              />
            </div>
          </div>
        </div>

        <div id="con2" className="locationCreateStateContent1">
          <div className="locationCountyCountryHeadDiv1">
            <p className="locationCountyCountryContentHead">Add GST Details</p>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
             <div
              style={{ marginLeft: "20px", width: "400px",marginTop:"20px"}}
            >
              <DatePickerInput
                type="text"
                label="Enter State Short Name"
                style={{ backgroundColor: "#F8F8F8" }}
                style1={{ backgroundColor: "#F8F8F8" }}
              />
            </div>
            <div
              style={{ marginLeft: "20px", width: "400px", marginTop: "20px" }}
            >
              <DatePickerInput
                type="text"
                label="Enter State Short Name"
                style={{ backgroundColor: "#F8F8F8" }}
                style1={{ backgroundColor: "#F8F8F8" }}
              />
            </div>
           <div
              style={{ marginLeft: "20px", width: "400px",marginTop:"20px"}}
            >
              <DatePickerInput
                type="text"
                label="Enter State Short Name"
                style={{ backgroundColor: "#F8F8F8" }}
                style1={{ backgroundColor: "#F8F8F8" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationAddState;
