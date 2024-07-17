import { Link } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import { ContentBox } from "../../components/buttons/Button";

export default function DriverDetailsPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  return (
    <div>
      <BreadCrumb title="Driver Details">
        <Link
          underline="none"
          color="#0074BC"
          href="/VehicleandDriverManagement"
          className="bread-crumb-link"
        >
          Vehicle and Driver Management
        </Link>
      </BreadCrumb>

      <div className="content-container">
        <div className="vehicle-details-container-main">
          <div className="main-heading-vehicle-details">
            <div className="main-heading-container">
              <div className="vehicle-details-header-section">
                <img
                  className="left-arrow"
                  src={require("../../images/left_arrow.png")}
                  alt="arrow"
                  onClick={() => navigate("/VehicleandDriverManagement")}
                />
                <p className="details-heading-vehicle-details">
                  {state?.driverId}
                </p>
              </div>
              <div className="main-heading-image-button-container">
                <img
                  src={require("../../images/DeleteButton.png")}
                  alt="ExportDisabledButton"
                  className="export-button"
                />
                <img
                  src={require("../../images/EditButton.png")}
                  alt="AddNewVehicleButton"
                />
              </div>
            </div>
            <div className="linking-section-vehicledetails">
              <a href="#vehicledetails" className="vehicle-details">
                Driver Details
              </a>
            </div>
            <div className="vehicle-details-container" id="vehicledetails">
              <p className="vehicle-details-container-heading">
                Driver Details
              </p>

              <div className="name-gender-dob-mblno-section">
                <ContentBox heading="Driver ID" content="Scheshachala B" />
                <ContentBox heading="Driver Name" content="Male" />
                <ContentBox heading="Contact Number" content="10-02-1987" />
                <ContentBox heading="Hub ID" content="9876543210" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
