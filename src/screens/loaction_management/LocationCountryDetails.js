import React, { useState } from "react";
import "../loaction_management/LocationCountryDetails.css";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import back from "../../images/back.png";
import mark from "../../images/questionMark.png";
import Table1 from "../../components/location_management_table/Table1";
import { data1, data2 } from "../../utils/Functions";
import Table3 from "../../components/location_management_table/Table3";
import { Link } from "@mui/material";

function LocationCountryDetails({ crumbHeading, setModal }) {
  const [link1, setLink1] = useState(true);
  const [link2, setLink2] = useState(false);
  const [link3, setLink3] = useState(false);
  const [link4, setLink4] = useState(false);
  const [link5, setLink5] = useState(false);

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
            setModal(false);
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
            Country Details
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
            State Details
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
      </div>
      <div className="locationCountyContent">
        <div id="con1" className="locationCountyCountryContent">
          <div className="locationCountyCountryHeadDiv">
            <p className="locationCountyCountryContentHead">Country Details</p>
            {!link1 && (
              <img
                style={{ marginLeft: "5px" }}
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
              <p className="countyText1">Country ID</p>
              <p className="countyText2">CTR0001</p>
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
              <p className="countyText1">Status</p>
              <p style={{ color: "#4DA63E" }} className="countyText2">
                CTR0001
              </p>
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
              <p className="countyText1">Country Name</p>
              <p className="countyText2">CTR0001</p>
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
              <p className="countyText1">Country Short Name</p>
              <p className="countyText2">CTR0001</p>
            </div>
          </div>
        </div>

        <div id="con2" className="locationCountyStateContent">
          <div className="locationCountyCountryHeadDiv1">
            <p className="locationCountyCountryContentHead1">State Details</p>
            {!link2 && (
              <img
                style={{ marginLeft: "5px" }}
                src={mark}
                alt="questionMark"
              />
            )}
          </div>
          <p className="locationCountyStateLength">1 state</p>
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
                `State ID`,
                "State Name",
                "Delivery Charges",
                "Status",
              ]}
              data={data1}
              rowsPerPage={3}
            />
          </div>
        </div>

        <div id="con3" className="locationCountyStateContent">
          <div className="locationCountyCountryHeadDiv1">
            <p className="locationCountyCountryContentHead1">City Details</p>
            {!link3 && (
              <img
                style={{ marginLeft: "5px" }}
                src={mark}
                alt="questionMark"
              />
            )}
          </div>
          <p className="locationCountyStateLength">1 city</p>
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
                `State ID`,
                "State Name",
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
            <p className="locationCountyCountryContentHead1">CPU Details</p>
            {!link4 && (
              <img
                style={{ marginLeft: "5px" }}
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
            <p className="locationCountyCountryContentHead1">Hub Details</p>
            {!link5 && (
              <img
                style={{ marginLeft: "5px" }}
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
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationCountryDetails;
