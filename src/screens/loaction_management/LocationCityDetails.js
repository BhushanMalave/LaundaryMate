import React, { useState } from "react";
import "../loaction_management/LocationCountryDetails.css";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import back from "../../images/back.png";
import mark from "../../images/questionMark.png";
import Table1 from "../../components/location_management_table/Table1";
import { data1, data2 } from "../../utils/Functions";
import Table3 from "../../components/location_management_table/Table3";
import DatePickerInput from "../../components/single_datepicker_input/DatePickerInput";
import SelectLabel from "../../components/select_label.js/SelectLabel";
import { AiFillEdit } from "react-icons/ai";
import { AddButton } from "../../components/buttons/Button";
import { Link } from "@mui/material";

function LocationCityDetails({ crumbHeading, setModal4 }) {
  const [link1, setLink1] = useState(true);
  const [link2, setLink2] = useState(false);
  const [link3, setLink3] = useState(false);
  const [link4, setLink4] = useState(false);
  const [link5, setLink5] = useState(false);
  const [cityDetails, setCityDetails] = useState(false);
  const [mapState, setMapState] = useState(false);
  const [delivery, setDelivery] = useState(false);
  const [cpuDetails, setCpuDetails] = useState(false);
  const [hubDetails, setHubDetails] = useState(false);

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
            setModal4(false);
            console.log("hello");
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
            Map to State
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
            Delivery Charges
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
      </div>
      <div className="locationCountyContent">
        <div id="con1" className="locationCountyStateContent1">
          {!cityDetails &&
            !delivery &&
            !cpuDetails &&
            !hubDetails &&
            !mapState && (
              <img
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setCityDetails(true);
                }}
                src={require("../../images/edit.png")}
                className="edit-image"
              />
            )}

          {(delivery || cpuDetails || hubDetails || mapState) && (
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
            <p className="locationCountyCountryContentHead">Country Details</p>
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
              {!cityDetails && <p className="countyText1">City ID</p>}
              {!cityDetails && <p className="countyText2">CTR0001</p>}
              {cityDetails && (
                <div style={{ width: "400px", marginTop: "-20px" }}>
                  <DatePickerInput
                    disable={true}
                    type="text"
                    label="City ID"
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
              {!cityDetails && <p className="countyText1">Status</p>}
              {!cityDetails && (
                <p style={{ color: "#4DA63E" }} className="countyText2">
                  CTR0001
                </p>
              )}
              {cityDetails && (
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
              {!cityDetails && <p className="countyText1">City Name</p>}
              {!cityDetails && <p className="countyText2">CTR0001</p>}
              {cityDetails && (
                <div style={{ width: "400px", marginTop: "-20px" }}>
                  <DatePickerInput type="text" label="City Name" />
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
              {!cityDetails && <p className="countyText1">City Short Name</p>}
              {!cityDetails && <p className="countyText2">CTR0001</p>}
              {cityDetails && (
                <div
                  style={{
                    marginLeft: "40px",
                    width: "400px",
                    marginTop: "-20px",
                  }}
                >
                  <DatePickerInput type="text" label="City Short Name" />
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
              {!cityDetails && <p className="countyText1">Created By</p>}
              {!cityDetails && <p className="countyText2">CTR0001</p>}
              {cityDetails && (
                <div style={{ width: "400px", marginTop: "-20px" }}>
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
              {!cityDetails && <p className="countyText1">Created On</p>}
              {!cityDetails && <p className="countyText2">CTR0001</p>}
              {cityDetails && (
                <div
                  style={{
                    marginLeft: "40px",
                    width: "400px",
                    marginTop: "-20px",
                  }}
                >
                  <DatePickerInput type="text" label="Created On" />
                </div>
              )}
            </div>
          </div>
          {cityDetails && (
            <div className="updateStateDetailsBut">
              <p
                onClick={() => {
                  setCityDetails(false);
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
                text="Update City Details"
              />
            </div>
          )}
        </div>
        {/*  */}

        <div id="con2" className="locationCountyGstContent">
          {!cityDetails &&
            !delivery &&
            !cpuDetails &&
            !hubDetails &&
            !mapState && (
              <img
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setMapState(true);
                }}
                src={require("../../images/edit.png")}
                className="edit-image"
              />
            )}

          {(delivery || cpuDetails || hubDetails || cityDetails) && (
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
            <p className="locationCountyCountryContentHead">Map to State</p>
            {!link2 && (
              <img
                style={{ marginLeft: "5px", marginTop: "20px" }}
                src={mark}
                alt="questionMark"
              />
            )}
          </div>
          <div className="locationCountyGstContentValue1">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "20px",
                marginTop: "40px",
                width: "40%",
              }}
            >
              {!mapState && <p className="countyText1">State</p>}
              {!mapState && <p className="countyText2">CTR0001</p>}
              {mapState && (
                <div style={{ width: "400px", marginTop: "-20px" }}>
                  <DatePickerInput type="text" label="State" />
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
              {!mapState && <p className="countyText1">Country</p>}
              {!mapState && <p className="countyText2">CTR0001</p>}
              {mapState && (
                <div
                  style={{
                    marginLeft: "40px",
                    width: "400px",
                    marginTop: "-20px",
                  }}
                >
                  <DatePickerInput type="text" label="Country" />
                </div>
              )}
            </div>
          </div>
          {mapState && (
            <div className="updateStateDetailsBut">
              <p
                onClick={() => {
                  setMapState(false);
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
                text="Update Map to State"
              />
            </div>
          )}
        </div>
        <div id="con3" className="locationCountyGstContent">
          {!cityDetails &&
            !delivery &&
            !cpuDetails &&
            !hubDetails &&
            !mapState && (
              <img
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setDelivery(true);
                }}
                src={require("../../images/edit.png")}
                className="edit-image"
              />
            )}

          {(mapState || cpuDetails || hubDetails || cityDetails) && (
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
            <p className="locationCountyCountryContentHead">Delivery Charges</p>
            {!link3 && (
              <img
                style={{ marginLeft: "5px", marginTop: "20px" }}
                src={mark}
                alt="questionMark"
              />
            )}
          </div>
          <div className="locationCountyGstContentValue1">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "20px",
                marginTop: "40px",
                width: "40%",
              }}
            >
              {!delivery && <p className="countyText1">Delivery Fees</p>}
              {!delivery && <p className="countyText2">CTR0001</p>}
              {delivery && (
                <div
                  style={{
                    width: "400px",
                    marginTop: "-20px",
                  }}
                >
                  <DatePickerInput type="text" label="Country" />
                </div>
              )}
            </div>
          </div>
          {delivery && (
            <div className="updateStateDetailsBut">
              <p
                onClick={() => {
                  setDelivery(false);
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
                text="Update Delivery Charges"
              />
            </div>
          )}
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

export default LocationCityDetails;
