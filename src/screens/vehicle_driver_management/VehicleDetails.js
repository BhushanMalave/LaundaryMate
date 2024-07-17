
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import { Link } from "@mui/material";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";
import { ContentBox } from "../../components/buttons/Button";
import "./VehicleDetails.css";

export default function VehicleDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();
  return (
    <div>
      <BreadCrumb title="Vehicle Details">
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
                  {state?.vehicleId}-{state?.regNo}
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
                Vehicle Details
              </a>
              <a href="#vendordetails" className="vendor-details">
                Vendor Details
              </a>
            </div>
            <div className="vehicle-details-container" id="vehicledetails">
              <div className="vehicle-details-container-group">
                <p className="vehicle-details-container-heading">
                  Vehicle Details
                </p>
                <img
                  src={require("../../images/edit_pen.png")}
                  alt="ExportDisabledButton"
                  className="edit-pen-button"
                />
              </div>
              <div className="name-gender-dob-mblno-section">
                <ContentBox heading="Vehicle ID" content="Scheshachala B" />
                <ContentBox heading="Vehicle Status" content="Male" />
                <ContentBox
                  heading="Vehicle Registeration Number"
                  content="10-02-1987"
                />
                <ContentBox
                  heading="Date of Registration"
                  content="9876543210"
                />
                {/* <ContentBox heading="Fuel Type" content="9876543210" /> */}
              </div>
              <div className="vehicle-details-content-box">
                <ContentBox heading="Fuel Type" content="sheshb@gmail.com" />
                <ContentBox heading="Vehicle Type" content="9876543210" />
                <ContentBox heading="Capacity(Weight)" content="9876543210" />
                <ContentBox heading="Capacity(Volume)" content="9876543210" />
              </div>
              <div className="vehicle-details-content-box">
                <ContentBox heading="Hub ID" content="sheshb@gmail.com" />
                <ContentBox heading="Insurance Number" content="9876543210" />
                <ContentBox
                  heading="Insurance Expiry Date"
                  content="9876543210"
                />
                <ContentBox
                  heading="Fitness Expiry Date)"
                  content="9876543210"
                />
              </div>
              <div className="vehicle-details-content-box">
                <ContentBox heading="VIN Number" content="sheshb@gmail.com" />
                <ContentBox heading="PUC Validity" content="9876543210" />
                <ContentBox heading="Created By" content="9876543210" />
                <ContentBox heading="Created On" content="9876543210" />
              </div>
            </div>
            <div className="vendor-details-container" id="vendordetails">
              <div className="vehicle-details-container-group">
                <p className="vehicle-details-container-heading">
                  Vendor Details
                </p>
                <img
                  src={require("../../images/edit_pen.png")}
                  alt="ExportDisabledButton"
                  className="edit-pen-button"
                />
              </div>
              <div className="vendor-details-section">
                <div className="vendor-name-contentbox">
                  <ContentBox heading="Vendor Name" content="XYZ" />
                </div>
                <ContentBox heading="Vendor ID" content="CUSID001000" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
