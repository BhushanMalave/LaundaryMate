import React, { useState, useRef } from "react";
import "../loaction_management/LocationCountryDetails.css";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import "../loaction_management/LocationAddState.css";
import SearchButton from "../../components/search_button/SearchButton";
import { AddButton } from "../../components/buttons/Button";
import { SelectDropDown } from "../../components/select_drop_down/SelectDropDown";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import "../loaction_management/LocationAddCity.css";
import questionMark from "../../images/questionMark.png";
import "../../screens/loaction_management/LocationAddCpu.css";
import styles from "../../components/location_management_table/Table.module.css";
import { Toggle } from "../../components/toggle_button/ToggleButton";
import SelectLabel from "../../components/select_label.js/SelectLabel";
import DatePickerInput from "../../components/single_datepicker_input/DatePickerInput";
import { Link } from "@mui/material";

function LocationAddCpu({ crumbHeading, setModal8 }) {
  const [link1, setLink1] = useState(true);
  const [link2, setLink2] = useState(false);
  const [link3, setLink3] = useState(false);
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
        <p className="locationCountyHeadText1">Add New CPU</p>
        <div className="locationCountyStateButton">
          <SearchButton
            text="Cancel"
            onClick={() => {
              setModal8(false);
            }}
          />
          <AddButton
            onClick={() => {
              console.log("hello");
            }}
            text="Add CPU"
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
            }}
            style={{
              color: link1 ? "#0074BC" : "black",
              borderBottom: link1 ? "3px solid #0074BC" : "none",
            }}
            className="locationCountyAnchor"
            href="#con1"
          >
            CPU Details
          </a>
        </li>
        <li className="locationCountyLinkEle">
          <a
            onClick={() => {
              setLink1(false);
              setLink2(true);
              setLink3(false);
            }}
            style={{
              color: link2 ? "#0074BC" : "black",
              borderBottom: link2 ? "3px solid #0074BC" : "none",
            }}
            className="locationCountyAnchor"
            href="#con2"
          >
            Map to City
          </a>
        </li>
        <li className="locationCountyLinkEle">
          <a
            onClick={() => {
              setLink1(false);
              setLink2(false);
              setLink3(true);
            }}
            style={{
              color: link3 ? "#0074BC" : "black",
              borderBottom: link3 ? "3px solid #0074BC" : "none",
            }}
            className="locationCountyAnchor"
            href="#con3"
          >
            Select Shift
          </a>
        </li>
        {/* <li className="locationCountyLinkEle">
          <a
            onClick={() => {
              setLink1(false);
              setLink2(false);
              setLink3(false);
              setLink4(true);
            }}
            style={{
              color: link4 ? "#0074BC" : "black",
              borderBottom: link4 ? "3px solid #0074BC" : "none",
            }}
            className="locationCountyAnchor"
            href="#con4"
          >
            Interhub Vehicle Detail
          </a>
        </li> */}
      </div>
      <div className="locationCountyContent">
        <div id="con1" className="locationCreateStateContent">
          <div className="locationCountyCountryHeadDiv1">
            <p className="locationCountyCountryContentHead">CPU Details</p>
          </div>
          <div className="locationAddStateContent">
            <div
              style={{ marginLeft: "20px", width: "400px", marginTop: "-33px" }}
            >
              <SelectLabel
                placeholder="Status"
                options={options}
                styles={{ height: "60px" }}
              />
            </div>
          </div>

          <div
            style={{ marginTop: "60px" }}
            className="locationAddStateContent"
          >
            <div
              style={{ marginLeft: "20px", width: "400px", marginTop: "-33px" }}
            >
              <DatePickerInput type="text" label="Enter CPU Name" />
            </div>
            <div
              style={{ marginLeft: "20px", width: "400px", marginTop: "-33px" }}
            >
              <DatePickerInput type="text" label="Enter CPU Short Name" />
            </div>
          </div>
          <div
            style={{ marginTop: "60px" }}
            className="locationAddStateContent"
          >
            <div
              style={{ marginLeft: "20px", width: "400px", marginTop: "-33px" }}
            >
              <DatePickerInput type="text" label="Enter CPU Address" />
            </div>
            <div
              style={{ marginLeft: "20px", width: "400px", marginTop: "-33px" }}
            >
              <DatePickerInput type="text" label="Enter CPU Location" />
            </div>
            <div
              style={{ marginLeft: "20px", width: "400px", marginTop: "-33px" }}
            >
              <DatePickerInput type="text" label="Enter CPU Pincode" />
            </div>
          </div>
        </div>

        <div id="con2" className="locationCreateStateContent1">
          <div className="locationCountyCountryHeadDiv1">
            <p className="locationCountyCountryContentHead">Map to City</p>
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
                placeholder="Select City"
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
              marginTop: "20px",
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
            <div
              style={{ marginLeft: "20px", width: "400px", marginTop: "-33px" }}
            >
              <SelectLabel
                placeholder="Select City"
                options={options}
                styles={{ height: "60px" }}
                disable={true}
              />
            </div>
          </div>
        </div>

        <div id="con3" className="locationCreateCityContent">
          <div className="locationCpuShiftHead">
            <p className="locationAddCpuShiftText">Select Shift</p>
            <img
              className="locationCpuQuesImage"
              src={questionMark}
              alt="questionMark"
            />
          </div>
          <p className="locationAddCpuShiftLength">0 shift Selected</p>
          <div className="locationAddCpuTable">
            <table className={styles.table1}>
              <tbody>
                <tr className={styles.tableHeadingRow}>
                  <th className={styles.tableHeader}>Shift Name</th>
                  <th className={styles.tableHeader}>Shift Duration</th>
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
                        Select All
                      </p>
                    </div>
                  </th>
                </tr>

                <tr className={styles.tableRowItems}>
                  <td className={styles.tableCellTd1}>Shift 1</td>
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
                        Select
                      </p>
                    </div>
                  </td>
                </tr>

                <tr className={styles.tableRowItems}>
                  <td className={styles.tableCellTd1}>Shift 2</td>
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
                        Select
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationAddCpu;
