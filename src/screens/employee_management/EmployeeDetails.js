import React, { useState } from "react";
import { Link } from "@mui/material";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import "./EmployeeDetails.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Toggle } from "../../components/toggle_button/ToggleButton";
import { ContentBox } from "../../components/buttons/Button";
import LoginDetailsModal from "./login_details_modal/LoginDetailsModal";
import EmpDetEditModal from "./edit_modal/EmpDetEditModal";

const EmployeeDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  // const loction = useLocation();
  const [enable, setEnable] = useState(false);
  const [loginDetails, setLoginDetails] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [employeeDetails, setEmployeeDetails] = useState({
    employeeId: "",
    employeeName: "",
  });
  return (
    <>
      {/* <div className="employee-details-main-container"> */}
      <BreadCrumb title={"Employee Details"}>
        <Link
          underline="none"
          color="#0074BC"
          href="/EmployeeManagement"
          className="bread-crumb-link"
        >
          Employee Management
        </Link>
      </BreadCrumb>

      <div className="employee-details-container">
        <div className="employee-details--main-heading">
          <div className="employee-details-main-header">
            <div className="empoyee-details-back-div">
              <img
                src={require("../../images/back.png")}
                alt={"back"}
                className={"empoyee-details-back-icon"}
                onClick={() => {
                  navigate("/EmployeeManagement");
                }}
              />
              <p className="empoyee-details-back-employee-id">LM02162</p>
            </div>
            <div className="employee-details-main-header-right">
              <div className="empoyee-details-header-enable-div">
                <p
                  className={
                    +enable
                      ? "empoyee-details-header-Inactive "
                      : "empoyee-details-header-enableText"
                  }
                >
                  Disable
                </p>
                <div className="empoyee-details-header-toggle-switch">
                  <Toggle
                    enable={enable}
                    setEnable={setEnable}
                    onClick={enable}
                  />
                </div>

                <p
                  className={
                    enable
                      ? "empoyee-details-header-enableText"
                      : "empoyee-details-header-Inactive "
                  }
                >
                  Enable
                </p>
              </div>

              <img
                src={require("../../images/LoginDetailsButton.png")}
                alt={"Login Details"}
                className={"employee-details-login-details-button"}
                onClick={() => setLoginDetails(true)}
              />
            </div>
          </div>

          <div className="employee-details-linking-section">
            <a
              className="employee-details-personal-details"
              href="#employementdetails"
              // state={state}
            >
              Employment Details{" "}
            </a>
            <a className="sub-add-wall-order" href="#personaldetails">
              Personal Details
            </a>
            <a className="sub-add-wall-order" href="#employeerole">
              Employee Role
            </a>
          </div>

          <div className="empoyee-details-section-div " id="employementdetails">
            <p className="empoyee-details-Section-Heading-Text">
              Employement Details
            </p>

            <div className="empoyee-details-section-content-div empoyee-details-section-content-first-div-margin-top">
              <ContentBox heading="Employee ID" content="LM02162" />
              <ContentBox heading="City ID" content="CT012" />
              <ContentBox heading="Employment Details" content="Permanent" />
              <ContentBox heading="Joining Date" content="01-01-2021" />
            </div>
            <div className="empoyee-details-section-content-div">
              <ContentBox heading="Department" content="Hub" />
              <ContentBox heading="Work Location" content="Bengaluru" />
              <ContentBox />
              <ContentBox />
            </div>
          </div>

          <div
            className="empoyee-details-section-div employee-details-section-div-margintop"
            id="personaldetails"
          >
            <p className="empoyee-details-Section-Heading-Text">
              Personal Details
            </p>
            <div className="empoyee-details-section-content-div empoyee-details-section-content-first-div-margin-top ">
              <ContentBox heading="Name" content={""} />
              <ContentBox heading="Gender" content="CT012" />
              <ContentBox heading="DOB" content="Permanent" />
              <ContentBox heading="Mobile" content="01-01-2021" />
            </div>
            <div className="empoyee-details-section-content-div">
              <ContentBox heading="PAN Number" content="Hub" />
              <ContentBox heading="Aadhar Number" content="Bengaluru" />
              <ContentBox
                heading="Driver’s License "
                content="RJ-13/DLC/12/ 123456"
              />
              <ContentBox
                heading="Alternate Mobile Number"
                content="9876543210"
              />
            </div>
            <div className="empoyee-details-section-content-div">
              <ContentBox
                heading="Home Address"
                content="Home Sweet Home
              #24, 3rd main, Hanumantha
              nagara, 3rd block, 
              Bengaluru - 560036"
                style={{ width: 216 }}
              />
              <ContentBox
                heading="Parents Address"
                content="Home Sweet Home
              #24, 3rd main, Hanumantha
              nagara, 3rd block, 
              Bengaluru - 560036"
                style={{ width: 216 }}
              />
              <ContentBox heading="Blood Group" content="O+" />
              <ContentBox heading="PC ID" content="PCID018562" />
            </div>
            <div className="empoyee-details-section-content-div">
              <ContentBox heading="Station Id" content="STID87561" />
              <ContentBox heading="Hub ID" content="HID67784" />
              <ContentBox heading="Shift ID" content="SHID16856" />
              <ContentBox
                heading="Alternate Mobile Number"
                content="9876543210"
              />
            </div>
          </div>

          <div
            className="empoyee-details-section-div employee-details-section-div-margintop"
            id="employeerole"
          >
            <div className="empoyee-details-Section-Employee-Role">
              <p className="empoyee-details-Section-Heading-Text">
                Employee Role
              </p>
              <img
                src={require("../../images/edit_pen.png")}
                className="empoyee-details_edit"
                onClick={() => {
                  setEditModal(true);
                  setEmployeeDetails({
                    employeeId: "LM02162",
                    employeeName: "Ankjhn bwev",
                  });
                }}
              />
            </div>

            <div className="empoyee-details-section-content-div empoyee-details-section-content-first-div-margin-top ">
              <ContentBox heading="Role" content="Hub Manager" />
              <ContentBox heading="Hub Name" content="Bommasandra, HB002010" />
              <ContentBox heading="Hub ID" content="HB002010" />
              <ContentBox heading="City" content="Bengaluru" />

              {/* <ContentBox heading="Role" content="Hub Manager" />
            <ContentBox heading="CPU Name" content="Bommasandra, HB002010" />
            <ContentBox heading="CPU ID" content="HB002010" />
            <ContentBox heading="City" content="Bengaluru" /> */}
            </div>
            <div className="empoyee-details-section-content-div">
              <ContentBox
                heading="Secondary Role(s)"
                content="Shift Manager, Inspector"
              />
              <ContentBox />
              <ContentBox />
              <ContentBox />
            </div>
          </div>
        </div>
        <LoginDetailsModal toggle={loginDetails} setToggle={setLoginDetails} />
        <EmpDetEditModal
          toggle={editModal}
          setToggle={setEditModal}
          employeeId={employeeDetails.employeeId}
          employeeName={employeeDetails.employeeName}
        />
      </div>
      {/* </div> */}
    </>
  );
};

export default EmployeeDetails;
