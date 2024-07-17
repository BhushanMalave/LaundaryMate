import React, { useState } from "react";
import "../loaction_management/LocationCountryDetails.css";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import "../loaction_management/LocationAddState.css";
import SearchButton from "../../components/search_button/SearchButton";
import { AddButton } from "../../components/buttons/Button";
import { SelectDropDown } from "../../components/select_drop_down/SelectDropDown";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LocationDeliveryCharges from "../../components/location_management_table/LocationDeliveryCharges";
import addDelivery from "../../images/addDelivery.png";
import "../loaction_management/LocationAddCity.css";
import questionMark from "../../images/questionMark.png";
import Table3 from "../../components/location_management_table/Table3";
import SelectLabel from "../../components/select_label.js/SelectLabel";
import DatePickerInput from "../../components/single_datepicker_input/DatePickerInput";
import { Link } from "@mui/material";

function LocationAddCity({ crumbHeading, setModal3 }) {
  const [link1, setLink1] = useState(true);
  const [link2, setLink2] = useState(false);
  const [link3, setLink3] = useState(false);
  const [link4, setLink4] = useState(false);
  const [link5, setLink5] = useState(false);
  const [arrComp, setArrComp] = useState([{ id: 1, name: "tata" }]);
  const [addShift, setAddShift] = useState([]);
  const [addSlot, setAddSlot] = useState([]);

  function addComponent() {
    setArrComp((preVal) => [
      ...preVal,
      { id: Math.floor(Math.random() * 100), name: "hello" },
    ]);
  }

  function addShiftArr(val) {
    setAddShift((prevVal) => [...prevVal, val]);
  }

  function addSlotArr(val) {
    setAddSlot((prevVal) => [...prevVal, val]);
  }

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

  const options1 = [
    {
      label: "6 AM",
      value: "6 AM",
    },
  ];

  const options2 = [
    {
      label: "10 AM",
      value: "10 AM",
    },
  ];

  const [select, setSelect] = useState({
    value: options[0].value,
    label: options[0].label,
  });
  const [select1, setSelect1] = useState({
    value: options[0].value,
    label: options[0].label,
  });
  const [select2, setSelect2] = useState({
    value: options[0].value,
    label: options[0].label,
  });

  const [shiftText, setShiftText] = useState("");

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
        <p className="locationCountyHeadText1">Add New City</p>
        <div className="locationCountyStateButton">
          <SearchButton
            text="Cancel"
            onClick={() => {
              setModal3(false);
            }}
          />
          <AddButton
            onClick={() => {
              console.log("hello");
            }}
            text="Add City"
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
              setLink3(false);
              setLink4(false);
              setLink5(false);
            }}
            style={{
              color: link1 ? "#0074BC" : "black",
              borderBottom: link1 ? "3px solid #0074BC" : "none",
            }}
            className="locationCountyAnchor"
            href="#con1"
          >
            City Details
          </a>
        </li>
        <li className="locationCountyLinkEle">
          <a
            onClick={() => {
              setLink1(false);
              setLink2(true);
              setLink3(false);
              setLink4(false);
              setLink5(false);
            }}
            style={{
              color: link2 ? "#0074BC" : "black",
              borderBottom: link2 ? "3px solid #0074BC" : "none",
            }}
            className="locationCountyAnchor"
            href="#con2"
          >
            Map to State
          </a>
        </li>
        <li className="locationCountyLinkEle">
          <a
            onClick={() => {
              setLink1(false);
              setLink2(false);
              setLink3(true);
              setLink4(false);
              setLink5(false);
            }}
            style={{
              color: link3 ? "#0074BC" : "black",
              borderBottom: link3 ? "3px solid #0074BC" : "none",
            }}
            className="locationCountyAnchor"
            href="#con3"
          >
            Delivery Charges
          </a>
        </li>
        <li className="locationCountyLinkEle">
          <a
            onClick={() => {
              setLink1(false);
              setLink2(false);
              setLink3(false);
              setLink4(true);
              setLink5(false);
            }}
            style={{
              color: link4 ? "#0074BC" : "black",
              borderBottom: link4 ? "3px solid #0074BC" : "none",
            }}
            className="locationCountyAnchor"
            href="#con4"
          >
            Add Shift
          </a>
        </li>
        <li className="locationCountyLinkEle">
          <a
            onClick={() => {
              setLink1(false);
              setLink2(false);
              setLink3(false);
              setLink4(false);
              setLink5(true);
            }}
            style={{
              color: link5 ? "#0074BC" : "black",
              borderBottom: link5 ? "3px solid #0074BC" : "none",
            }}
            className="locationCountyAnchor"
            href="#con5"
          >
            Add Slot
          </a>
        </li>
      </div>
      <div className="locationCountyContent">
        <div id="con1" className="locationCreateStateContent">
          <div className="locationCountyCountryHeadDiv1">
            <p className="locationCountyCountryContentHead">City Details</p>
          </div>
          <div className="locationAddStateContent">
            <div
              style={{ marginLeft: "20px", width: "400px", marginTop: "-33px" }}
            >
              <SelectLabel
                placeholder="Select City"
                options={options}
                styles={{ height: "60px" }}
              />
            </div>
          </div>

          <div
            style={{ marginTop: "40px" }}
            className="locationAddStateContent"
          >
            <div
              style={{ marginLeft: "20px", width: "400px", marginTop: "-33px" }}
            >
              <DatePickerInput type="text" label="Enter City Name" />
            </div>
            <div
              style={{ marginLeft: "20px", width: "400px", marginTop: "-33px" }}
            >
              <DatePickerInput type="text" label="Enter City Short Name" />
            </div>
          </div>
        </div>

        <div id="con2" className="locationCreateStateContent1">
          <div className="locationCountyCountryHeadDiv1">
            <p className="locationCountyCountryContentHead">Map to State</p>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{ marginLeft: "20px", width: "400px", marginTop: "-33px" }}
            >
              <SelectLabel
                placeholder="Select State"
                options={options}
                styles={{ height: "60px" }}
              />
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              marginTop: "40px",
            }}
          >
            <div
              style={{ marginLeft: "20px", width: "400px", marginTop: "-33px" }}
            >
              <SelectLabel
                placeholder="Country"
                options={options}
                styles={{ height: "60px" }}
                disable={true}
              />
            </div>
          </div>
        </div>

        <div id="con3" className="locationCreateCityContent">
          <div className="locationCountyCountryHeadDiv1">
            <p className="locationCountyCountryContentHead">Delivery Charges</p>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              {arrComp.map((ele) => {
                return (
                  <LocationDeliveryCharges
                    key={ele.id}
                    arrComp={arrComp}
                    addComponent={addComponent}
                  />
                );
              })}
            </div>
            <img
              onClick={addComponent}
              style={{
                marginTop: "18px",
                marginLeft: "20px",
                width: "58px",
                height: "58px",
              }}
              src={addDelivery}
              alt="addDelivery"
            />
          </div>
        </div>

        <div id="con4" className="locationCreateCityContent">
          <div className="locationCountyCountryHeadDiv1">
            <p className="locationCountyCountryContentHead">Add Shift</p>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="locationCityShift">
              <div
                style={{
                  marginLeft: "20px",
                  width: "214px",
                  marginTop: "-33px",
                }}
              >
                <SelectLabel
                  placeholder="Select Shift Type"
                  options={options}
                  styles={{ height: "60px", borderRadius: "8px" }}
                />
              </div>
              <div style={{ marginLeft: "20px", marginTop: "20px" }}>
                <DatePickerInput
                  style={{ width: "178px" }}
                  type="text"
                  label="Enter Shift Name"
                />
              </div>
              <p className="locationShiftText">Shift Duration</p>
              <img
                style={{ marginLeft: "7px" }}
                src={questionMark}
                alt="questionMark"
              />
              <div
                style={{
                  marginLeft: "20px",
                  width: "214px",
                  marginTop: "-33px",
                }}
              >
                <SelectLabel
                  placeholder="From Time"
                  options={options}
                  styles={{ height: "60px", borderRadius: "8px" }}
                />
              </div>
              <p className="locationShiftText1">to</p>
              <div
                style={{
                  marginLeft: "20px",
                  width: "214px",
                  marginTop: "-33px",
                }}
              >
                <SelectLabel
                  placeholder="To Time"
                  options={options}
                  styles={{ height: "60px", borderRadius: "8px" }}
                />
              </div>
              <SearchButton
                style={{
                  marginLeft: "20px",
                  marginTop: "20px",
                  backgroundColor: "white",
                }}
                text="Add"
                onClick={() => {
                  addShiftArr({
                    id: Math.floor(Math.random() * 100),
                    shiftType: select.value,
                    shiftName: shiftText,
                    shiftDuration: `${select1.value} - ${select2.value}`,
                  });
                }}
              />
            </div>
          </div>
          <p className="locationShiftLengthText">{addShift.length} Shift</p>
          <div className="locationShiftTable">
            {addShift.length > 0 ? (
              <Table3
                tableHeader={[
                  `Shift Type`,
                  "Shift Name",
                  "Shift Duration",
                  "Action",
                ]}
                data={addShift}
                rowsPerPage={2}
                name="shift"
              />
            ) : null}
          </div>
        </div>

        <div id="con5" className="locationCreateCityContent">
          <div className="locationCountyCountryHeadDiv1">
            <p className="locationCountyCountryContentHead">Add Slot</p>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="locationCityShift">
              <div
                style={{
                  marginLeft: "20px",
                  width: "214px",
                  marginTop: "-33px",
                }}
              >
                <SelectLabel
                  placeholder="Select Slot Type"
                  options={options}
                  styles={{ height: "60px", borderRadius: "8px" }}
                />
              </div>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    mt: 2.2,
                    ml: 1.5,
                    width: "220px",
                    borderRadius: "8px",
                    backgroundColor: "white",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  onChange={(val) => {
                    setShiftText(val.target.value);
                  }}
                  id="filled-basic"
                  label="Enter Slot Name"
                />
              </Box>
              <p className="locationShiftText">Slot Duration</p>
              <img
                style={{ marginLeft: "7px" }}
                src={questionMark}
                alt="questionMark"
              />
              <div
                style={{
                  marginLeft: "20px",
                  width: "214px",
                  marginTop: "-33px",
                }}
              >
                <SelectLabel
                  placeholder="From Time"
                  options={options}
                  styles={{ height: "60px", borderRadius: "8px" }}
                />
              </div>
              <p className="locationShiftText1">to</p>
              <div
                style={{
                  marginLeft: "20px",
                  width: "214px",
                  marginTop: "-33px",
                }}
              >
                <SelectLabel
                  placeholder="To Time"
                  options={options}
                  styles={{ height: "60px", borderRadius: "8px" }}
                />
              </div>
              <SearchButton
                style={{
                  marginLeft: "20px",
                  marginTop: "20px",
                  backgroundColor: "white",
                }}
                text="Add"
                onClick={() => {
                  addSlotArr({
                    id: Math.floor(Math.random() * 100),
                    slotType: select.value,
                    slotName: shiftText,
                    slotDuration: `${select1.value} - ${select2.value}`,
                  });
                }}
              />
            </div>
          </div>
          <p className="locationShiftLengthText">{addShift.length} Slot</p>
          <div className="locationShiftTable">
            {addSlot.length > 0 ? (
              <Table3
                tableHeader={[
                  `Slot Type`,
                  "Slot Name",
                  "Slot Duration",
                  "Action",
                ]}
                data={addSlot}
                rowsPerPage={2}
                name="slot"
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationAddCity;
