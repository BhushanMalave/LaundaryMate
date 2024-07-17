import React, { useRef, useState } from "react";
import "../loaction_management/LocationCountryDetails.css";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import "../loaction_management/LocationAddState.css";
import "./LocationAddHub.css";
import SearchButton from "../../components/search_button/SearchButton";
import { AddButton } from "../../components/buttons/Button";
import { SelectDropDown } from "../../components/select_drop_down/SelectDropDown";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Toggle } from "../../components/toggle_button/ToggleButton";
import styles from "../../components/location_management_table/Table.module.css";
import "./LocationAddHub.css";
import { Link } from "@mui/material";
import SelectLabel from "../../components/select_label.js/SelectLabel";
import DatePickerInput from "../../components/single_datepicker_input/DatePickerInput";

function LocationAddHub({ crumbHeading, setModal6 }) {
  const [link1, setLink1] = useState(true);
  const [link2, setLink2] = useState(false);
  const [link3, setLink3] = useState(false);
  const [link4, setLink4] = useState(false);
  const [enable, setEnable] = useState(false);
  const [enable1, setEnable1] = useState(false);
  const [enable2, setEnable2] = useState(false);
  const disAll = useRef(null);
  const selAll = useRef(null);
  const disAll1 = useRef(null);
  const selAll1 = useRef(null);
  const disAll2 = useRef(null);
  const selAll2 = useRef(null);

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
        <p className="locationCountyHeadText1">Add New Hub</p>
        <div className="locationCountyStateButton">
          <SearchButton
            text="Cancel"
            onClick={() => {
              setModal6(false);
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
        <ul className="locationCountyLinkContent">
          <li className="locationCountyLinkEle">
            <a
              onClick={() => {
                setLink1(true);
                setLink2(false);
                setLink3(false);
                setLink4(false);
              }}
              style={{
                color: link1 ? "#0074BC" : "black",
                borderBottom: link1 ? "3px solid #0074BC" : "none",
              }}
              className="locationCountyAnchor"
              href="#con1"
            >
              Hub Details
            </a>
          </li>
          <li className="locationCountyLinkEle">
            <a
              onClick={() => {
                setLink2(true);
                setLink1(false);
                setLink3(false);
                setLink4(false);
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
          <li className="locationCountyLinkEle">
            <a
              onClick={() => {
                setLink3(true);
                setLink1(false);
                setLink2(false);
                setLink4(false);
              }}
              style={{
                color: link2 ? "#0074BC" : "black",
                borderBottom: link2 ? "3px solid #0074BC" : "none",
              }}
              className="locationCountyAnchor"
              href="#con3"
            >
              Set Location
            </a>
          </li>
          <li className="locationCountyLinkEle">
            <a
              onClick={() => {
                setLink4(true);
                setLink1(false);
                setLink2(false);
                setLink3(false);
              }}
              style={{
                color: link2 ? "#0074BC" : "black",
                borderBottom: link2 ? "3px solid #0074BC" : "none",
              }}
              className="locationCountyAnchor"
              href="#con4"
            >
              Select Slot
            </a>
          </li>
        </ul>
      </div>
      <div className="locationCountyContent">
        <div id="con1" className="locationCreateHubContent">
          <div className="locationCountyCountryHeadDiv1">
            <p className="locationCountyHubContentHead">Hub Details</p>
          </div>
          <div
            style={{ marginLeft: "20px", width: "400px", marginTop: "-33px" }}
          >
            <SelectLabel
              placeholder="Select Type of Stage"
              options={options}
              styles={{ height: "60px", backgroundColor: "#ffffff" }}
              styles1={{ backgroundColor: "#ffffff" }}
            />
          </div>

          <div className="locationAddStateContent">
            <div
              style={{ marginLeft: "20px", width: "400px", marginTop: "20px" }}
            >
              <DatePickerInput
                type="text"
                label="Enter Hub Name"
                style={{ backgroundColor: "#F8F8F8" }}
              />
            </div>

            <div
              style={{ marginLeft: "20px", width: "400px", marginTop: "20px" }}
            >
              <DatePickerInput
                type="text"
                label="Enter Hub Short Name"
                style={{ backgroundColor: "#F8F8F8" }}
              />
            </div>
          </div>
          <div className="locationAddStateContent">
            <div
              style={{ marginLeft: "20px", width: "400px", marginTop: "20px" }}
            >
              <DatePickerInput
                type="text"
                label="Enter Hub Address Line 1"
                style={{ backgroundColor: "#F8F8F8" }}
              />
            </div>
            <div
              style={{ marginLeft: "20px", width: "400px", marginTop: "20px" }}
            >
              <DatePickerInput
                type="text"
                label="Enter Hub Location"
                style={{ backgroundColor: "#F8F8F8" }}
              />
            </div>
            <div
              style={{ marginLeft: "20px", width: "400px", marginTop: "20px" }}
            >
              <DatePickerInput
                type="text"
                label="Enter Hub Pincode"
                style={{ backgroundColor: "#F8F8F8" }}
              />
            </div>
          </div>
        </div>

        <div id="con2" className="locationCreateStateContent">
          <div className="locationCountyCountryHeadDiv1">
            <p className="locationCountyHubContentHead">Map to Location</p>
          </div>
          <div
            style={{ marginLeft: "20px", width: "400px", marginTop: "-33px" }}
          >
            <SelectLabel
              placeholder="Select Processing Center"
              options={options}
              styles={{ height: "60px", backgroundColor: "#ffffff" }}
              styles1={{ backgroundColor: "#ffffff" }}
            />
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              marginTop: "30px",
            }}
          >
            <div
              style={{ marginLeft: "20px", width: "400px", marginTop: "-33px" }}
            >
              <SelectLabel
                placeholder="Country"
                options={options}
                styles={{ height: "60px", backgroundColor: "#F8F8F8" }}
                styles1={{ backgroundColor: "#F8F8F8" }}
              />
            </div>
            <div
              style={{ marginLeft: "20px", width: "400px", marginTop: "-33px" }}
            >
              <SelectLabel
                placeholder="State"
                options={options}
                styles={{ height: "60px", backgroundColor: "#F8F8F8" }}
                styles1={{ backgroundColor: "#F8F8F8" }}
              />
            </div>
            <div
              style={{ marginLeft: "20px", width: "400px", marginTop: "-33px" }}
            >
              <SelectLabel
                placeholder="City"
                options={options}
                styles={{ height: "60px", backgroundColor: "#F8F8F8" }}
                styles1={{ backgroundColor: "#F8F8F8" }}
              />
            </div>
          </div>
        </div>
        <div id="con3" className="locationCreateStateContent">
          <div className="locationCountyCountryHeadDiv1">
            <p className="locationCountyHubContentHead">Set Location</p>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              marginTop: "30px",
            }}
          >
            <div
              style={{ marginLeft: "20px", width: "400px", marginTop: "20px" }}
            >
              <DatePickerInput
                type="text"
                label="Latitude"
                style={{ backgroundColor: "#ffffff" }}
              />
            </div>
            <div
              style={{ marginLeft: "20px", width: "400px", marginTop: "20px" }}
            >
              <DatePickerInput
                type="text"
                label="Longitude"
                style={{ backgroundColor: "#ffffff" }}
              />
            </div>
          </div>
        </div>

        <div id="con3" className="locationCreateStateContent">
          <div className="locationCountyCountryHeadDiv1">
            <p className="locationCountyHubContentHead">Select Slot</p>
          </div>
          <p
            style={{
              marginTop: "10px",
              marginLeft: "18px",
              fontSize: "14px",
              lineHeight: "18px",
              fontFamily: "regular",
              color: "#808080",
            }}
          >
            2 Slot Selected
          </p>
          <div className="locationAddCpuTable">
            <table className={styles.table1}>
              <tbody>
                <tr className={styles.tableHeadingRow}>
                  <th className={styles.tableHeader}>Slot Name</th>
                  <th className={styles.tableHeader}>Slot Duration</th>
                  <th className={styles.tableHeader1}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginRight: "-150px",
                      }}
                    >
                      <p ref={disAll}>Disable All</p>
                      <Toggle
                        enable={enable}
                        setEnable={setEnable}
                        disAll={disAll}
                        selAll={selAll}
                      />
                      <p ref={selAll} style={{ marginLeft: "70px" }}>
                        Enable All
                      </p>
                    </div>
                  </th>
                  <th className={styles.tableHeader2}>Availability</th>
                </tr>

                <tr className={styles.tableRowItems}>
                  <td className={styles.tableCellTd1}>Slot 1</td>
                  <td className={styles.tableCell}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <p>6AM - 10AM</p>
                      <p
                        style={{
                          marginTop: "6px",
                          fontSize: "12px",
                          fontFamily: "Regular",
                          lineHeight: "16px",
                          color: "#808080",
                        }}
                      >
                        4 Hours
                      </p>
                    </div>
                  </td>
                  <td className={styles.tableCell}>
                    {" "}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginRight: "-170px",
                      }}
                    >
                      <p ref={disAll1}>Disable</p>
                      <Toggle
                        setEnable={setEnable1}
                        enable={enable1}
                        disAll={disAll1}
                        selAll={selAll1}
                      />
                      <p
                        ref={selAll1}
                        style={{ marginLeft: "70px", color: "#808080" }}
                      >
                        Enable
                      </p>
                    </div>
                  </td>
                  <td className={styles.tableCellTd2}>
                    Always
                    <img
                      style={{ margin: "0px 0px 0px 10px" }}
                      src={require("../../images/arrow_drop_down.png")}
                    />
                  </td>
                </tr>

                <tr className={styles.tableRowItems}>
                  <td className={styles.tableCellTd1}>Slot 2</td>
                  <td className={styles.tableCell}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <p>6PM - 10PM</p>
                      <p
                        style={{
                          marginTop: "6px",
                          fontSize: "12px",
                          fontFamily: "Regular",
                          lineHeight: "16px",
                          color: "#808080",
                        }}
                      >
                        4 Hours
                      </p>
                    </div>
                  </td>
                  <td className={styles.tableCell}>
                    {" "}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginRight: "-170px",
                      }}
                    >
                      <p ref={disAll2}>Disable</p>
                      <Toggle
                        setEnable={setEnable2}
                        enable={enable2}
                        disAll={disAll2}
                        selAll={selAll2}
                      />
                      <p
                        ref={selAll2}
                        style={{ marginLeft: "70px", color: "#808080" }}
                      >
                        Enable
                      </p>
                    </div>
                  </td>
                  <td className={styles.tableCellTd2}>
                    Block for some days{" "}
                    <img
                      style={{ margin: "0px 0px 0px 10px" }}
                      src={require("../../images/arrow_drop_down.png")}
                    />
                    <p style={{ color: "#0074bc", margin: "5px 65px 0px 0px" }}>
                      Select Dates
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              marginTop: "30px",
            }}
          ></div>
        </div>
        <div id="con3" className="locationCreateStateContent">
          <div className="locationCountyCountryHeadDiv1">
            <p className="locationCountyHubContentHead">
              Interhub Vehicle Details
            </p>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
            <div
              style={{ marginLeft: "20px", width: "400px", marginTop: "-33px" }}
            >
              <SelectLabel
                placeholder="City"
                options={options}
                styles={{ height: "60px", backgroundColor: "#ffffff" }}
                styles1={{ backgroundColor: "#ffffff" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationAddHub;
