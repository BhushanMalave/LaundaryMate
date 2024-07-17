import { Link } from "@mui/material";
import React, { useState, useEffect } from "react";
import { NavLink, Outlet, Routes, Route, useNavigate } from "react-router-dom";
import {} from "react-router-dom";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import { SelectDropDown } from "../../components/select_drop_down/SelectDropDown";
import DeliveryVehicle from "./tabs/DeliveryVehicle";
import DriverDetails from "./tabs/DriverDetails";
import InterHubVehicle from "./tabs/InterHubVehicle";
import SelectLabel from "../../components/select_label.js/SelectLabel";
import "./VehicleDriverMgmt.css";
import DatePickerInput from "../../components/single_datepicker_input/DatePickerInput";

function VehicleDriverMgmt() {
  const vehicleStatus = [
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
  ];

  const obj = [
    {
      id: 1,
      vehicleId: "VH001000",
      regNo: "KA01-AD556",
      hubId: "HB00201",
      vehicleType: "TataAce",
      weight: "200KG",
      volume: "500m",
      vehicleStatus: "active",
    },
    {
      id: 2,
      vehicleId: "VH001001",
      regNo: "KA01-AD556",
      hubId: "HB00201",
      vehicleType: "TataAce",
      weight: "200KG",
      volume: "500m",
      vehicleStatus: "active",
    },
    {
      id: 3,
      vehicleId: "VH001002",
      regNo: "KA01-AD556",
      hubId: "HB00201",
      vehicleType: "TataAce",
      weight: "200KG",
      volume: "500m",
      vehicleStatus: "inactive",
    },
    {
      id: 4,
      vehicleId: "VH001003",
      regNo: "KA01-AD556",
      hubId: "HB00201",
      vehicleType: "TataAce",
      weight: "200KG",
      volume: "500m",
      vehicleStatus: "active",
    },
    {
      id: 5,
      vehicleId: "VH001004",
      regNo: "KA01-AD556",
      hubId: "HB00201",
      vehicleType: "TataAce",
      weight: "200KG",
      volume: "500m",
      vehicleStatus: "active",
    },
    {
      id: 6,
      vehicleId: "VH001005",
      regNo: "KA01-AD556",
      hubId: "HB00201",
      vehicleType: "TataAce",
      weight: "200KG",
      volume: "500m",
      vehicleStatus: "active",
    },
    {
      id: 7,
      vehicleId: "VH001006",
      regNo: "KA01-AD556",
      hubId: "HB00201",
      vehicleType: "TataAce",
      weight: "200KG",
      volume: "500m",
      vehicleStatus: "active",
    },
    {
      id: 8,
      vehicleId: "VH001007",
      regNo: "KA01-AD556",
      hubId: "HB00201",
      vehicleType: "TataAce",
      weight: "200KG",
      volume: "500m",
      vehicleStatus: "active",
    },
    {
      id: 9,
      vehicleId: "VH001008",
      regNo: "KA01-AD556",
      hubId: "HB00201",
      vehicleType: "TataAce",
      weight: "200KG",
      volume: "500m",
      vehicleStatus: "active",
    },
    {
      id: 10,
      vehicleId: "VH001009",
      regNo: "KA01-AD556",
      hubId: "HB00201",
      vehicleType: "TataAce",
      weight: "200KG",
      volume: "500m",
      vehicleStatus: "active",
    },
    {
      id: 11,
      vehicleId: "VH0010010",
      regNo: "KA01-AD556",
      hubId: "HB00201",
      vehicleType: "TataAce",
      weight: "200KG",
      volume: "500m",
      vehicleStatus: "active",
    },
  ];
  const driverDetailsObj = [
    {
      driverId: "DR00001",
      driverName: "Jakson",
      contactNo: "9876789756",
      licenseNo: "KA41220110067564",
    },
    {
      driverId: "DR00002",
      driverName: "Jakson",
      contactNo: "9876789756",
      licenseNo: "KA41220110067564",
    },
    {
      driverId: "DR00003",
      driverName: "Jakson",
      contactNo: "9876789756",
      licenseNo: "KA41220110067564",
    },
    {
      driverId: "DR00004",
      driverName: "Jakson",
      contactNo: "9876789756",
      licenseNo: "KA41220110067564",
    },
    {
      driverId: "DR00005",
      driverName: "Jakson",
      contactNo: "9876789756",
      licenseNo: "KA41220110067564",
    },
    {
      driverId: "DR00006",
      driverName: "Jakson",
      contactNo: "9876789756",
      licenseNo: "KA41220110067564",
    },
    {
      driverId: "DR00007",
      driverName: "Jakson",
      contactNo: "9876789756",
      licenseNo: "KA41220110067564",
    },
    {
      driverId: "DR00008",
      driverName: "Jakson",
      contactNo: "9876789756",
      licenseNo: "KA41220110067564",
    },
    {
      driverId: "DR00009",
      driverName: "Jakson",
      contactNo: "9876789756",
      licenseNo: "KA41220110067564",
    },
  ];
  const options = [
    {
      label: "All Status",
      value: "All Status",
    },
    {
      label: "Mango",
      value: "mango",
    },
    {
      label: "Banana",
      value: "banana",
    },
    {
      label: "Pineapple",
      value: "pineapple",
    },
  ];
  const [deliveryVehicleData, setDeliveryVehicleData] = useState(obj);
  const [driverDetailsdata, setDriverDetailsData] = useState(driverDetailsObj);
  const [active, setActive] = useState(false);
  const [driverDetails, setDriverDetails] = useState(false);
  const [addDriverDetailsState, setAddDriverDetailsState] = useState(false);
  const navigate = useNavigate();
  const [select, setSelect] = useState({
    value: options[0].value,
    label: options[0].label,
  });

  const handleActive = () => {
    if (window.location.pathname === "/VehicleandDriverManagement") {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  useEffect(() => {
    handleActive();
  }, []);

  return (
    <div className="vehicle-driver-container">
      <BreadCrumb title="Vehicle and Driver Management"></BreadCrumb>
      <div className="main-heading-container">
        <p className="heading">Vehicle and Driver Management</p>
        {deliveryVehicleData?.length > 0 && !driverDetails && (
          <div className="main-heading-image-button-container">
            <img
              src={require("../../images/ExportDisabledButton.png")}
              alt="ExportDisabledButton"
              className="export-button"
            />
            <img
              src={require("../../images/AddNewVehicleButton.png")}
              alt="AddNewVehicleButton"
              onClick={() => {
                navigate("/addnewdeliveryvehicle");
              }}
            />
          </div>
        )}
        {driverDetails && (
          <div className="vegicledriver-right-header">
            <SelectLabel
              options={vehicleStatus}
              placeholder="Hub Id"
              styles={{
                height: "58px",
                width: "285px",
              }}
              containerStyles={{
                height: "58px",
                width: "285px",
                marginTop:0,
                marginRight:87,
              }}
            />
            <div className="main-heading-image-button-container">
              <img
                src={require("../../images/ExportEnabledButton.png")}
                alt="ExportDisabledButton"
                className="export-button"
              />
              <img
                src={require("../../images/AddNewDriverDetailsContainer.png")}
                alt="AddNewDriverDetailsContainer"
                onClick={() => {
                  setAddDriverDetailsState(true);
                }}
              />
            </div>
          </div>
        )}
      </div>
      <nav className="top-bar-container">
        <div className="navlink-container">
          <NavLink
            className={({ isActive }) =>
              active ? "active-link" : "inactive-link"
            }
            id="deliveryvehicle"
            to="/VehicleandDriverManagement"
            onClick={() => {
              setActive(true);
              setDriverDetails(false);
            }}
          >
            Pickup/Delivery Vehicle
            <p className="number-count">{deliveryVehicleData.length}</p>
          </NavLink>
        </div>
        <div className="navlink-container">
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-link" : "inactive-link"
            }
            to="interhubvehicle"
            onClick={() => {
              setActive(false);
              setDriverDetails(false);
            }}
          >
            Interhub Vehicle
            <p className="number-count">0</p>
          </NavLink>
        </div>
        <div className="navlink-container">
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-link" : "inactive-link"
            }
            to="driverdetails"
            onClick={() => {
              setActive(false);
              setDriverDetails(true);
            }}
          >
            Driver Details
            <p className="number-count">{driverDetailsdata.length}</p>
          </NavLink>
        </div>
      </nav>
      <div className="content-container">
        <Routes>
          <Route
            path="/"
            element={
              <DeliveryVehicle deliveryVehicleData={deliveryVehicleData} />
            }
          />
          <Route
            path="driverdetails"
            element={<DriverDetails driverDetailsdata={driverDetailsdata} />}
          />
          <Route path="interhubvehicle" element={<InterHubVehicle />} />
        </Routes>
      </div>
      {addDriverDetailsState && (
        <>
          <div className="adddriver_main">
            <div className="adddriver_maindiv">
              <div
                style={{
                  fontFamily: "Bold",
                  fontStyle: "normal",
                  padding: "40px 40px 0px  40px",
                  fontSize: "18px",
                  lineHeight: "24px",
                  color: " #181818",
                }}
              >
                Add Driver Details
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "0px 40px 0px  40px",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <SelectLabel
                  options={vehicleStatus}
                  placeholder="Driver Name"
                  styles={{
                    height: "58px",
                    width: "400px",
                  }}
                  containerStyles={{
                    marginTop: 24,
                  }}
                />
                <div style={{ marginTop: 24 }}>
                  <DatePickerInput label="Driver Contact Number" type="text" />
                </div>
                <div style={{ marginTop: 24 }}>
                  <DatePickerInput label="Driving License Number" type="text" />
                </div>
                <SelectLabel
                  options={vehicleStatus}
                  placeholder="Hub ID"
                  styles={{
                    height: "58px",
                    width: "400px",
                  }}
                  containerStyles={{
                    marginTop: 24,
                  }}
                />
              </div>
              <img
                src={require("../../images/AddBottonLong.png")}
                alt="addbtn"
                className="adddriver_btn1"
                onClick={() => {
                  setAddDriverDetailsState(false);
                }}
              />
              <img
                src={require("../../images/CancelButtonLong.png")}
                alt="cancle_btn"
                className="adddriver_btn2"
                onClick={() => {
                  setAddDriverDetailsState(false);
                }}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default VehicleDriverMgmt;
