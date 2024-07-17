import React, { useState, useRef } from "react";
import "../loaction_management/LocationCountryDetails.css";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import back from "../../images/back.png";
import mark from "../../images/questionMark.png";
import { data1, data2 } from "../../utils/Functions";
import Table3 from "../../components/location_management_table/Table3";
import "../../screens/loaction_management/LocationCpuDetails.css";
import DatePickerInput from "../../components/single_datepicker_input/DatePickerInput";
import SelectLabel from "../../components/select_label.js/SelectLabel";
import { AiFillEdit } from "react-icons/ai";
import { AddButton } from "../../components/buttons/Button";
import styles from "../../components/location_management_table/Table.module.css";
import { Toggle } from "../../components/toggle_button/ToggleButton";
import { Link } from "@mui/material";

function LocationCpuDetails({ crumbHeading, setModal5 }) {
  const [link1, setLink1] = useState(true);
  const [link2, setLink2] = useState(false);
  const [link3, setLink3] = useState(false);
  const [link4, setLink4] = useState(false);
  const [cpuDetails, setCpuDetails] = useState(false);
  const [mapCity, setMapCity] = useState(false);
  const [shift, setShift] = useState(false);
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

  //   const [link5, setLink5] = useState(false);

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
      <div className="locationCountyHeader">
        <img
          onClick={() => {
            setModal5(false);
          }}
          className="locationCountyHeadImg"
          src={back}
          alt="backBtn"
        />
        <p className="locationCountyHeadText">{crumbHeading}</p>
      </div>
      <div className="locationCountyLink">
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
            CPU Details
          </a>
        </li>
        <li className="locationCountyLinkEle">
          <a
            onClick={() => {
              setLink1(false);
              setLink2(true);
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
            Map to City
          </a>
        </li>
        <li className="locationCountyLinkEle">
          <a
            onClick={() => {
              setLink1(false);
              setLink2(false);
              setLink3(true);
              setLink4(false);
            }}
            style={{
              color: link3 ? "#0074BC" : "black",
              borderBottom: link3 ? "3px solid #0074BC" : "none",
            }}
            className="locationCountyAnchor"
            href="#con3"
          >
            Shift Details
          </a>
        </li>
        {/* <li className="locationCountyLinkEle">
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
            Interhub Vehicle Detail
          </a>
        </li> */}
        <li className="locationCountyLinkEle">
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
            Hub Details
          </a>
          {!link4 && (
            <img style={{ marginLeft: "4px" }} src={mark} alt="markImg" />
          )}
        </li>
      </div>
      <div className="locationCountyContent">
        <div id="con1" className="locationCountyStateContent1">
          {!cpuDetails && !mapCity && !shift && (
            <img
              style={{ cursor: "pointer" }}
              onClick={() => {
                setCpuDetails(true);
              }}
              src={require("../../images/edit.png")}
              className="edit-image"
            />
          )}

          {(mapCity || shift) && (
            <AiFillEdit
              style={{
                color: "#7C7B7B",
                opacity: 0.2,
                position: "absolute",
                right: "25px",
                top: "25px",
                height: "30px",
                width: "24px",
              }}
            />
          )}
          <div className="locationCountyCountryHeadDiv">
            <p className="locationCountyCountryContentHead">CPU Details</p>
          </div>

          <div className="locationCpuContentValue">
            <div className="locationCpuContent1">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "20px",
                  marginTop: "40px",
                }}
              >
                {!cpuDetails && <p className="countyText1">CPU ID</p>}
                {!cpuDetails && <p className="countyText2">CPU0001</p>}
                {cpuDetails && (
                  <div style={{ width: "350px", marginTop: "-20px" }}>
                    <DatePickerInput
                      disable={true}
                      type="text"
                      label="CPU ID"
                      style={{ backgroundColor: "#F8F8F8", width: "350px" }}
                      style1={{ backgroundColor: "#F8F8F8" }}
                    />
                  </div>
                )}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "40px",
                }}
              >
                {!cpuDetails && (
                  <p style={{ marginLeft: "375px" }} className="countyText1">
                    Status
                  </p>
                )}
                {!cpuDetails && (
                  <p
                    style={{ color: "#4DA63E", marginLeft: "375px" }}
                    className="countyText2"
                  >
                    Active
                  </p>
                )}
                {cpuDetails && (
                  <div
                    style={{
                      width: "350px",
                      marginTop: "-71px",
                      marginLeft: "40px",
                    }}
                  >
                    <SelectLabel
                      placeholder="Status"
                      options={options}
                      styles={{ height: "55px", borderRadius: "8px" }}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="locationCpuContent1">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "20px",
                  marginTop: "40px",
                }}
              >
                {!cpuDetails && <p className="countyText1">CPU Name</p>}
                {!cpuDetails && <p className="countyText2">Doddaballapura</p>}
                {cpuDetails && (
                  <div style={{ width: "350px", marginTop: "-20px" }}>
                    <DatePickerInput
                      type="text"
                      label="CPU Name"
                      style={{ width: "350px" }}
                    />
                  </div>
                )}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "40px",
                }}
              >
                {!cpuDetails && (
                  <p style={{ marginLeft: "325px" }} className="countyText1">
                    CPU Short Name
                  </p>
                )}
                {!cpuDetails && (
                  <p style={{ marginLeft: "325px" }} className="countyText2">
                    CPUDBP
                  </p>
                )}
                {cpuDetails && (
                  <div
                    style={{
                      width: "400px",
                      marginTop: "-20px",
                      marginLeft: "40px",
                    }}
                  >
                    <DatePickerInput
                      type="text"
                      label="CPU Short Name"
                      style={{ width: "350px" }}
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="locationCpuContent1">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "20px",
                  marginTop: "40px",
                }}
              >
                {!cpuDetails && <p className="countyText1">CPU Address</p>}
                {!cpuDetails && (
                  <p className="countyText2">
                    No 623,NO 4,Old622,10th C Main Rd
                  </p>
                )}
                {cpuDetails && (
                  <div style={{ width: "350px", marginTop: "-20px" }}>
                    <DatePickerInput
                      type="text"
                      label="CPU Address"
                      style={{ width: "350px" }}
                    />
                  </div>
                )}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "40px",
                }}
              >
                {!cpuDetails && (
                  <p style={{ marginLeft: "170px" }} className="countyText1">
                    CPU Location
                  </p>
                )}
                {!cpuDetails && (
                  <p style={{ marginLeft: "170px" }} className="countyText2">
                    CTR0001
                  </p>
                )}
                {cpuDetails && (
                  <div
                    style={{
                      width: "350px",
                      marginTop: "-20px",
                      marginLeft: "40px",
                    }}
                  >
                    <DatePickerInput
                      type="text"
                      label="CPU Location"
                      style={{ width: "350px" }}
                    />
                  </div>
                )}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "40px",
                }}
              >
                {!cpuDetails && <p className="countyText1">CPU Pincode</p>}
                {!cpuDetails && <p className="countyText2">CTR0001</p>}
                {cpuDetails && (
                  <div
                    style={{
                      width: "350px",
                      marginTop: "-18px",
                      marginLeft: "40px",
                    }}
                  >
                    <DatePickerInput
                      type="number"
                      label="CPU Pincode"
                      style={{ width: "350px" }}
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="locationCpuContent1">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "20px",
                  marginTop: "40px",
                }}
              >
                {!cpuDetails && <p className="countyText1">Created By</p>}
                {!cpuDetails && <p className="countyText2">CTR0001</p>}
                {cpuDetails && (
                  <div style={{ width: "350px", marginTop: "-18px" }}>
                    <DatePickerInput
                      type="text"
                      label="Created By"
                      style={{ width: "350px" }}
                    />
                  </div>
                )}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "40px",
                }}
              >
                {!cpuDetails && (
                  <p style={{ marginLeft: "370px" }} className="countyText1">
                    Created On
                  </p>
                )}
                {!cpuDetails && (
                  <p style={{ marginLeft: "370px" }} className="countyText2">
                    CTR0001
                  </p>
                )}
                {cpuDetails && (
                  <div
                    style={{
                      width: "350px",
                      marginTop: "-18px",
                      marginLeft: "40px",
                    }}
                  >
                    <DatePickerInput
                      type="text"
                      label="Created On"
                      style={{ width: "350px" }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          {cpuDetails && (
            <div className="updateStateDetailsBut">
              <p
                onClick={() => {
                  setCpuDetails(false);
                }}
                style={{
                  marginRight: "52px",
                  color: "#0074BC",
                  cursor: "pointer",
                }}
              >
                Cancel
              </p>
              <AddButton
                style={{ marginRight: "20px" }}
                text="Update CPU Details"
              />
            </div>
          )}
        </div>

        <div id="con2" className="locationCountyGstContent">
          {!cpuDetails && !mapCity && !shift && (
            <img
              style={{ cursor: "pointer" }}
              onClick={() => {
                setMapCity(true);
              }}
              src={require("../../images/edit.png")}
              className="edit-image"
            />
          )}

          {(cpuDetails || shift) && (
            <AiFillEdit
              style={{
                color: "#7C7B7B",
                opacity: 0.2,
                position: "absolute",
                right: "25px",
                top: "25px",
                height: "30px",
                width: "24px",
              }}
            />
          )}
          <div className="locationCountyCountryHeadDiv">
            <p className="locationCountyCountryContentHead">Map to City</p>
          </div>
          <div className="locationCpuContentValue">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "20px",
                marginTop: "40px",
              }}
            >
              {!mapCity && <p className="countyText1">State</p>}
              {!mapCity && <p className="countyText2">CTR0001</p>}
              {mapCity && (
                <div style={{ width: "350px", marginTop: "-20px" }}>
                  <DatePickerInput
                    type="text"
                    label="State"
                    style={{ width: "350px" }}
                  />
                </div>
              )}
            </div>
            <div className="locationCpuContent1">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "20px",
                  marginTop: "40px",
                  width: "40%",
                }}
              >
                {!mapCity && <p className="countyText1">Country</p>}
                {!mapCity && <p className="countyText2">CTR0001</p>}
                {mapCity && (
                  <div style={{ width: "350px", marginTop: "-20px" }}>
                    <DatePickerInput
                      type="text"
                      label="Country"
                      style={{ width: "350px" }}
                    />
                  </div>
                )}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "40px",
                }}
              >
                {!mapCity && <p className="countyText1">State</p>}
                {!mapCity && <p className="countyText2">CTR0001</p>}
                {mapCity && (
                  <div style={{ width: "350px", marginTop: "-20px" }}>
                    <DatePickerInput
                      type="text"
                      label="State"
                      style={{ width: "350px" }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          {mapCity && (
            <div className="updateStateDetailsBut">
              <p
                onClick={() => {
                  setMapCity(false);
                }}
                style={{
                  marginRight: "52px",
                  color: "#0074BC",
                  cursor: "pointer",
                }}
              >
                Cancel
              </p>
              <AddButton
                style={{ marginRight: "20px" }}
                text="Update Map to City"
              />
            </div>
          )}
        </div>
        <div id="con3" className="locationCountyGstContent">
          {!cpuDetails && !mapCity && !shift && (
            <img
              style={{ cursor: "pointer" }}
              onClick={() => {
                setShift(true);
              }}
              src={require("../../images/edit.png")}
              className="edit-image"
            />
          )}

          {(cpuDetails || mapCity) && (
            <AiFillEdit
              style={{
                color: "#7C7B7B",
                opacity: 0.2,
                position: "absolute",
                right: "25px",
                top: "25px",
                height: "30px",
                width: "24px",
              }}
            />
          )}
          <div className="locationCountyCountryHeadDiv">
            <p className="locationCountyCountryContentHead">Shift Details</p>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {!shift && (
              <Table3
                tableHeader={["Shift Name", "Shift Duration"]}
                data={data1}
                rowsPerPage={2}
                name="cpuShift"
              />
            )}
            {shift && (
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
            )}
          </div>
          {shift && (
            <div className="updateStateDetailsBut">
              <p
                onClick={() => {
                  setShift(false);
                }}
                style={{
                  marginRight: "52px",
                  color: "#0074BC",
                  cursor: "pointer",
                }}
              >
                Cancel
              </p>
              <AddButton
                style={{ marginRight: "20px" }}
                text="Update Shift Details"
              />
            </div>
          )}
        </div>

        {/* <div id="con3" className="locationCountyStateContent">
          <div className="locationCountyCountryHeadDiv1">
            <p className="locationCountyCountryContentHead">
              Interhub vehicle Detail
            </p>
          </div>
          <p className="locationCountyStateLength">1 CPU</p>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Table1
              tableHeader={[`CPU ID`, "CPU Name", "CPU Location", "Status"]}
              data={data1}
              rowsPerPage={3}
            />
          </div>
        </div> */}

        <div id="con4" className="locationCountyStateContent">
          <div className="locationCountyCountryHeadDiv1">
            <p className="locationCountyCountryContentHead">Hub Details</p>
            {!link4 && (
              <img
                style={{ marginLeft: "5px", marginBottom: "15px" }}
                src={mark}
                alt="questionMark"
              />
            )}
          </div>
          <p className="locationCountyStateLength">1 Hub</p>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Table3
              tableHeader={[`Hub ID`, "Hub Name", "City", "CPU", "Status"]}
              data={data2}
              rowsPerPage={3}
              name="cityHub"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationCpuDetails;
