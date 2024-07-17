import React from "react";
import "./AddOnDetails.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BreadCrumb from "../../../components/breadcrumb/BreadCrumb";
import SearchButton from "../../../components/search_button/SearchButton";
import { ContentBox } from "../../../components/buttons/Button";
import { Link } from "@mui/material";
import ActiveInactiveSelect from "../../../components/active_inactive_select.js/ActiveInactiveSelect";

export default function AddOnDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();
  return (
    <div>
      <BreadCrumb title={state?.AddOnId}>
        <Link
          underline="none"
          color="#0074BC"
          href="/CatalogueManagement"
          className="bread-crumb-link"
        >
          Catalogue Management
        </Link>
      </BreadCrumb>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "28px 45px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <img
            src={require("../../../images/inc_back.png")}
            alt="back_icon"
            onClick={() => {
              navigate("/CatalogueManagement");
            }}
            height="15px"
            width="25px"
          />
          <div
            style={{
              fontFamily: "Bold",
              fontStyle: "normal",
              fontSize: "32px",
              lineHeight: " 40px",
              color: "#181818",
              marginLeft: "10px",
            }}
          >
            {state?.AddOnId}
          </div>
        </div>
        <SearchButton
          text={"Edit"}
          style={{ backgroundColor: "white" }}
          onClick={() => {
            navigate("/AddOnDetailsEdit");
          }}
        />
      </div>
      <div className="id-linking-section">
        <a className="id-personal-details" href="#section1">
          Details{" "}
        </a>
        <a className="id-sub-add-wall-order" href="#section2">
          Add-On Info
        </a>
      </div>
      <div className="addon-personal-details-container" id="section1">
        <p
          className="personal-details-container-heading"
          style={{ marginTop: "30px" }}
        >
          Details
        </p>
        <div className="name-gender-dob-mblno-section">
          <ContentBox heading="Add-On  ID" content="AD0001" />
          <ContentBox heading="Add-On Type" content="Packaging" />
          <ContentBox heading="Add-On Name" content="Single Pack" />
          <div>
            <ContentBox heading="Status" />
            <div style={{ marginTop: "10px" }}></div>
            <ActiveInactiveSelect status="active" />
          </div>
        </div>
        <div
          className="name-gender-dob-mblno-section"
          style={{ marginTop: "40px" }}
        >
          <ContentBox heading="Add-On Price" content="₹ 10.00" />
          <div>
            <ContentBox heading="Add-On Image" />
            <div style={{ marginTop: "10px" }}></div>
            <img
              src={require("../../../images/menshirtpng.png")}
              alt="shirt"
              width={34}
              height={34}
              style={{ marginLeft: "30px" }}
            />
          </div>
          <ContentBox heading="SGST %" content="18%" />
          <ContentBox heading="CGST %" content="18%" />
        </div>
      </div>
      <div className="id-personal-details-container2" id="section2">
        <p
          className="personal-details-container-heading"
          style={{ marginTop: "10px" }}
        >
          {" "}
          Add-On Info
        </p>
        <div className="addon-info">
          <div className="add-content-box-container">
            <p className="add-content-box-heading">Title</p>
            <p className="add-content-box-content">What is a Single Pack?</p>
          </div>
          <div
            className="add-content-box-container"
            style={{ marginTop: "40px" }}
          >
            <p className="add-content-box-heading">Description</p>
            <p className="add-content-box-content">
              Want each piece packed single, not ready to mingle? No, that’s not
              unreasonable. To each his own.
            </p>
          </div>
          <div
            className="add-content-box-container"
            style={{ marginTop: "40px" }}
          >
            <p className="add-content-box-heading">Video URL</p>
            <p className="add-content-box-content">
              https://www.youtube.com/watch?v=2zFhQxKs-jE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
