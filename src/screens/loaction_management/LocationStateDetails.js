import React, { useState } from "react";
import "../loaction_management/LocationStateDetails.css";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import back from "../../images/back.png";
import mark from "../../images/questionMark.png";
import Table1 from "../../components/location_management_table/Table1";
import { data1, data2 } from "../../utils/Functions";
import Table3 from "../../components/location_management_table/Table3";
import DatePickerInput from "../../components/single_datepicker_input/DatePickerInput";
import SelectLabel from "../../components/select_label.js/SelectLabel";
import { AddButton } from "../../components/buttons/Button";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "@mui/material";

function LocationStateDetails({ crumbHeading, setModal2 }) {
  const [link1, setLink1] = useState(true);
  const [link2, setLink2] = useState(false);
  const [link3, setLink3] = useState(false);
  const [link4, setLink4] = useState(false);
  const [link5, setLink5] = useState(false);
  const [stateDetails, setStateDetails] = useState(false);
  const [gstDetails, setGstDetails] = useState(false);

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
            setModal2(false);
          }}
          className="locationCountyHeadImg"
          src={back}
          alt="backBtn"
        />
        <p className="locationCountyHeadText">{crumbHeading}</p>
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
                setLink5(false);
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
            {!link1 && (
              <img style={{ marginLeft: "4px" }} src={mark} alt="markImg" />
            )}
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
              GST Charges
            </a>
            {!link2 && (
              <img style={{ marginLeft: "4px" }} src={mark} alt="markImg" />
            )}
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
              City Details
            </a>
            {!link3 && (
              <img style={{ marginLeft: "4px" }} src={mark} alt="markImg" />
            )}
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
              CPU Details
            </a>
            {!link4 && (
              <img style={{ marginLeft: "4px" }} src={mark} alt="markImg" />
            )}
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
              Hub Details
            </a>
            {!link5 && (
              <img style={{ marginLeft: "4px" }} src={mark} alt="markImg" />
            )}
          </li>
        </ul>
      </div>
      <div className="locationCountyContent">
        <div id="con1" className="locationCountyStateContent1">
          {!stateDetails && !gstDetails && (
            <img
              style={{ cursor: "pointer" }}
              onClick={() => {
                if (!gstDetails) setStateDetails(true);
              }}
              src={require("../../images/edit.png")}
              className="edit-image"
            />
          )}

          {gstDetails && (
            <AiFillEdit
              style={{
                color: "#7C7B7B",
                opacity:0.2,
                position: "absolute",
                right: "25px",
                top: "25px",
                height:"30px",
                width:"24px"
              }}
            />
          )}
          <div className="locationCountyCountryHeadDiv">
            <p className="locationCountyCountryContentHead">State Details</p>
            {!link1 && (
              <img
                style={{ marginLeft: "5px", marginTop: "20px" }}
                src={mark}
                alt="questionMark"
              />
            )}
          </div>
          <div className="locationCountyCountryContentValue">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "20px",
                marginTop: "40px",
                width: "40%",
              }}
            >
              {!stateDetails && <p className="countyText1">State ID</p>}
              {!stateDetails && <p className="countyText2">CTR0001</p>}

              {stateDetails && (
                <div style={{ width: "400px", marginTop: "-20px" }}>
                  <DatePickerInput
                    disable={true}
                    type="text"
                    label="State ID"
                    style={{ backgroundColor: "#F8F8F8" }}
                    style1={{ backgroundColor: "#F8F8F8" }}
                  />
                </div>
              )}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "20px",
                marginTop: "40px",
                width: "40%",
              }}
            >
              {!stateDetails && <p className="countyText1">Status</p>}
              {!stateDetails && (
                <p style={{ color: "#4DA63E" }} className="countyText2">
                  CTR0001
                </p>
              )}
              {stateDetails && (
                <div
                  style={{
                    marginLeft: "40px",
                    width: "400px",
                    marginTop: "-71px",
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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "20px",
                marginTop: "40px",
                width: "40%",
              }}
            >
              {!stateDetails && <p className="countyText1">State Name</p>}
              {!stateDetails && <p className="countyText2">CTR0001</p>}
              {stateDetails && (
                <div style={{ width: "400px", marginTop: "-20px" }}>
                  <DatePickerInput type="text" label="State Name" />
                </div>
              )}
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "20px",
                marginTop: "40px",
                width: "40%",
              }}
            >
              {!stateDetails && <p className="countyText1">State Short Name</p>}
              {!stateDetails && <p className="countyText2">CTR0001</p>}

              {stateDetails && (
                <div
                  style={{
                    width: "400px",
                    marginTop: "-20px",
                    marginLeft: "40px",
                  }}
                >
                  <DatePickerInput type="text" label="State Short Name" />
                </div>
              )}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "20px",
                marginTop: "40px",
                width: "40%",
              }}
            >
              {!stateDetails && <p className="countyText1">Created By</p>}
              {!stateDetails && <p className="countyText2">CTR0001</p>}
              {stateDetails && (
                <div
                  style={{
                    width: "400px",
                    marginTop: "-20px",
                  }}
                >
                  <DatePickerInput type="text" label="Created By" />
                </div>
              )}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "20px",
                marginTop: "40px",
                width: "40%",
              }}
            >
              {!stateDetails && <p className="countyText1">Created On</p>}
              {!stateDetails && <p className="countyText2">CTR0001</p>}
              {stateDetails && (
                <div
                  style={{
                    width: "400px",
                    marginTop: "-20px",
                    marginLeft: "40px",
                  }}
                >
                  <DatePickerInput type="text" label="Created On" />
                </div>
              )}
            </div>
          </div>
          {stateDetails && (
            <div className="updateStateDetailsBut">
              <p
                onClick={() => {
                  setStateDetails(false);
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
                text="Update State Details"
              />
            </div>
          )}
        </div>
        <div id="con2" className="locationCountyGstContent">
          {!gstDetails && !stateDetails && (
            <img
              style={{ cursor: "pointer" }}
              onClick={() => {
                if (!stateDetails) setGstDetails(true);
              }}
              src={require("../../images/edit.png")}
              className="edit-image"
            />
          )}

          {stateDetails && (
            <AiFillEdit
            color="#7C7B7B"
              style={{
                position: "absolute",
                right: "25px",
                top: "25px",
                height:"22px",
                width:"22px",
                opacity:0.2
              }}
            />
          )}

          <div className="locationCountyCountryHeadDiv">
            <p className="locationCountyCountryContentHead">GST Charges</p>
            {!link2 && (
              <img
                style={{ marginLeft: "5px", marginTop: "20px" }}
                src={mark}
                alt="questionMark"
              />
            )}
          </div>
          <div className="locationCountyGstContentValue">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "20px",
                marginTop: "40px",
                width: "40%",
              }}
            >
              {!gstDetails && <p className="countyText1">Unique GST Number</p>}
              {!gstDetails && <p className="countyText2">CTR0001</p>}
              {gstDetails && (
                <div
                  style={{
                    width: "400px",
                    marginTop: "-20px",
                  }}
                >
                  <DatePickerInput type="text" label="Unique GST Number" />
                </div>
              )}
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "20px",
                marginTop: "40px",
                width: "40%",
              }}
            >
              {!gstDetails && <p className="countyText1">SGST</p>}
              {!gstDetails && <p className="countyText2">CTR0001</p>}
              {gstDetails && (
                <div
                  style={{
                    width: "400px",
                    marginTop: "-20px",
                  }}
                >
                  <DatePickerInput type="text" label="SGST" />
                </div>
              )}
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "20px",
                marginTop: "40px",
                width: "40%",
              }}
            >
              {!gstDetails && <p className="countyText1">CGST</p>}
              {!gstDetails && <p className="countyText2">CTR0001</p>}
              {gstDetails && (
                <div
                  style={{
                    width: "400px",
                    marginTop: "-20px",
                  }}
                >
                  <DatePickerInput type="text" label="CGST" />
                </div>
              )}
            </div>
          </div>
          {gstDetails && (
            <div className="updateStateDetailsBut">
              <p
                onClick={() => {
                  setGstDetails(false);
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
                text="Update GST Details"
              />
            </div>
          )}
        </div>

        <div id="con3" className="locationCountyStateContent">
          <div className="locationCountyCountryHeadDiv1">
            <p className="locationCountyCountryContentHead">City Details</p>
            {!link3 && (
              <img
                style={{ marginLeft: "5px", marginTop: "20px" }}
                src={mark}
                alt="questionMark"
              />
            )}
          </div>
          <p className="locationCountyStateLength">1 City</p>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Table1
              tableHeader={[
                `City ID`,
                "City Name",
                "Delivery Charges",
                "Status",
              ]}
              data={data1}
              rowsPerPage={3}
            />
          </div>
        </div>

        <div id="con4" className="locationCountyStateContent">
          <div className="locationCountyCountryHeadDiv1">
            <p className="locationCountyCountryContentHead">CPU Details</p>
            {!link4 && (
              <img
                style={{ marginLeft: "5px", marginTop: "20px" }}
                src={mark}
                alt="questionMark"
              />
            )}
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
        </div>

        <div id="con5" className="locationCountyStateContent">
          <div className="locationCountyCountryHeadDiv1">
            <p className="locationCountyCountryContentHead">Hub Details</p>
            {!link5 && (
              <img
                style={{ marginLeft: "5px", marginTop: "20px" }}
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

export default LocationStateDetails;
