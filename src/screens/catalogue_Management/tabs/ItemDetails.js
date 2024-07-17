import React from "react";
import "./ItemDetails.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BreadCrumb from "../../../components/breadcrumb/BreadCrumb";
import SearchButton from "../../../components/search_button/SearchButton";
import { ContentBox } from "../../../components/buttons/Button";
import { Link } from "@mui/material";
import ActiveInactiveSelect from "../../../components/active_inactive_select.js/ActiveInactiveSelect";
export const ItemDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  return (
    <div>
      <BreadCrumb title={state?.ServiceId}>
        <Link
          underline="none"
          color="#0074BC"
          href="/CatalogueManagement"
          className="bread-crumb-link"
        >
          Capacity and Slot Management
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
            {state?.ServiceId}
          </div>
        </div>
        <SearchButton
          text={"Edit"}
          style={{ backgroundColor: "white" }}
          onClick={() => {
            navigate("/ItemDetailsEdit");
          }}
        />
      </div>
      <div className="id-linking-section">
        <a className="id-personal-details" href="#section1">
          Details{" "}
        </a>
        <a className="id-sub-add-wall-order" href="#section2">
          Price Details
        </a>
        <a className="id-sub-add-wall-order" href="#section3">
          Add-Ons
        </a>
      </div>
      <div className="id-personal-details-container" id="section1">
        <p
          className="personal-details-container-heading"
          style={{ marginTop: "30px" }}
        >
          Details
        </p>
        <div className="name-gender-dob-mblno-section">
          <ContentBox heading=" Item Name" content="Shirt" />
          <ContentBox heading="Service" content="Wash + Fold" />
          <ContentBox heading="Category" content="Men" />
          <div>
            <ContentBox heading="Primary Phone number" />
            <div style={{ marginTop: "10px" }}></div>
            <ActiveInactiveSelect status="active" />
          </div>
        </div>
        <div className="email-box">
          <ContentBox heading="Item Code" content="1001" />
        </div>
      </div>
      <div className="id-personal-details-container2" id="section2">
        <p
          className="personal-details-container-heading"
          style={{ marginTop: "30px" }}
        >
          {" "}
          Price Details
        </p>
        <div className="name-gender-dob-mblno-section">
          <ContentBox heading="Item Price (INR)" content="₹ 20.00" />
          <ContentBox heading="Item Weight (KG’s)" content="0.25" />
          <ContentBox
            heading="Water Consumption per wash (Litres)"
            content="5"
          />
          <div>
            <ContentBox heading="Item image / Icon" />
            <div style={{ marginTop: "10px" }}></div>
            <img
              src={require("../../../images/menshirtpng.png")}
              alt="shirt"
              width={34}
              height={34}
              style={{ marginLeft: "30px" }}
            />
          </div>
        </div>
      </div>
      <div className="id-personal-details-container3" id="section3">
        <p
          className="personal-details-container-heading"
          style={{ marginTop: "30px" }}
        >
          {" "}
          Add-On
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            // justifyContent: "space-between",
            // alignItems: "center",
          }}
        >
          <div
            style={{
              marginTop: "30px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontFamily: "Bold",
                fontStyle: "normal",

                fontSize: "14px",
                lineHeight: "18px",

                color: "#000000",
              }}
            >
              Packaging
            </div>
            <div className="id-mainbox">
              <div className="id-mainbox-1">
                <div>Multipack</div>
              </div>
              <div className="id-mainbox-2">₹ 00.00</div>
            </div>
            <div className="id-mainbox">
              <div className="id-mainbox-1">
                <div>Single pack</div>
              </div>
              <div className="id-mainbox-2">₹ 08.00</div>
            </div>
          </div>

          <div
            style={{
              marginTop: "30px",
              display: "flex",
              flexDirection: "column",
              marginLeft: "400px",
            }}
          >
            <div
              style={{
                fontFamily: "Bold",
                fontStyle: "normal",

                fontSize: "14px",
                lineHeight: "18px",

                color: "#000000",
              }}
            >
              Packaging
            </div>
            <div className="id-mainbox" style={{}}>
              <div className="id-mainbox-1">
                <div>Starch</div>
              </div>
              <div className="id-mainbox-2">₹ 00.00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
