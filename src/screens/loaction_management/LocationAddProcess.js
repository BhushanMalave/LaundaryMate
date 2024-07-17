import React, { useState } from "react";
import "../loaction_management/LocationCountryDetails.css";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import "../loaction_management/LocationAddState.css";
import SearchButton from "../../components/search_button/SearchButton";
import { AddButton } from "../../components/buttons/Button";
import SelectLabel from "../../components/select_label.js/SelectLabel";
import DatePickerInput from "../../components/single_datepicker_input/DatePickerInput";
import { Link } from "@mui/material";

function LocationAddProcess({ crumbHeading, setModal10 }) {
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
        <p className="locationCountyHeadText1">Add New Processing Station</p>
        <div className="locationCountyStateButton">
          <SearchButton
            text="Cancel"
            onClick={() => {
              setModal10(false);
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
            Processing Station Details
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
            Map to CPU
          </a>
        </li>
      </div>
      <div className="locationCountyContent">
        <div id="con1" className="locationCreateStateContent">
          <div className="locationCountyCountryHeadDiv1">
            <p className="locationCountyCountryContentHead">
              Processing Station Details
            </p>
          </div>
          <div className="locationAddStateContent4">
            <div style={{ marginLeft: "20px", width: "400px" }}>
              <SelectLabel
                placeholder="Status"
                options={options}
                styles={{ height: "60px" }}
              />
            </div>
            <div
              style={{ marginTop: "60px" }}
              className="locationProcessAddStation"
            >
              <div
                style={{
                  marginLeft: "20px",
                  width: "400px",
                  marginTop: "-33px",
                }}
              >
                <DatePickerInput
                  type="text"
                  label="Enter Processing Station Name"
                />
              </div>
              <div
                style={{
                  marginLeft: "20px",
                  width: "400px",
                  marginTop: "-33px",
                }}
              >
                <DatePickerInput
                  type="text"
                  label="Enter Processing Station Short Name"
                />
              </div>
            </div>
          </div>
        </div>

        <div id="con2" className="locationCreateStateContent7">
          <div className="locationCountyCountryHeadDiv1">
            <p className="locationCountyCountryContentHead">Map to CPU</p>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              marginLeft: "20px",
              marginTop: "-30px",
            }}
          >
            <SelectLabel
              placeholder="Select Processing Center "
              options={options}
              styles={{ height: "60px", width: "400px" }}
            />
            <div style={{ marginLeft: "20px" }}>
              <SelectLabel
                placeholder="Select Type"
                options={options}
                styles={{ height: "60px", width: "400px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationAddProcess;
