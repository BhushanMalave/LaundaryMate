import "./CapacitySlotMgmt.css";
import React, { useState, useEffect } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import CpuCapacity from "./tabs/CpuCapacity";
import HubCapacity from "./tabs/HubCapacity";

function CapacitySlotMgmt() {
  const obj1 = [
    {
      cpuId: "CPU0001",
      cpuName: "PC01-Doddaballapur",
      city: "Banglore",
      noOfHubs: "04",
      shift: "02",
      status: "Active",
    },
    {
      cpuId: "CPU0002",
      cpuName: "PC02-Santhekatte",
      city: "Udupi",
      noOfHubs: "01",
      shift: "02",
      status: "Inactive",
    },
  ];
  const obj2 = [
    {
      cpuId: "HB0001",
      hubName: "Hub 1 - Jayanagar",
      city: "Banglore",
      slot: "02",
      status: "Active",
    },
    {
      cpuId: "HB0001",
      hubName: "Hub 1 - Jayanagar",
      city: "Banglore",
      slot: "02",
      status: "Inactive",
    },
  ];
  const [cpuCapacityData, setcpuCapacityData] = useState(obj1);
  const [hubCapacityData, sethubCapacityData] = useState(obj2);

  const [active, setActive] = useState(false);
  // const [driverDetails, setDriverDetails] = useState(false);

  const handleActive = () => {
    if (window.location.pathname === "/CapacitySlotManagement") {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  useEffect(() => {
    handleActive();
  }, []);

  return (
    <div className="capacity_container">
      <BreadCrumb title="Capacity & Slot Management"></BreadCrumb>
      <div className="main-heading-container">
        <p className="heading">Capacity & Slot Management</p>
      </div>
      <nav className="top-bar-container">
        <div className="navlink-container">
          <NavLink
            className={({ isActive }) =>
              active ? "active-link" : "inactive-link"
            }
            id="deliveryvehicle"
            to="/CapacitySlotManagement"
            onClick={() => {
              setActive(true);
              // setDriverDetails(false);
            }}
          >
            CPU Capacity
            <p className="number-count">{cpuCapacityData.length}</p>
          </NavLink>
        </div>
        <div className="navlink-container">
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-link" : "inactive-link"
            }
            to="hubCapacity"
            onClick={() => {
              setActive(false);
              // setDriverDetails(false);
            }}
          >
            Hub Capacity
            <p className="number-count">{hubCapacityData.length}</p>
          </NavLink>
        </div>
      </nav>
      <div className="content-container">
        <Routes>
          <Route
            path="/"
            element={<CpuCapacity cpuCapacityData={cpuCapacityData} />}
          />
          <Route
            path="hubCapacity"
            element={<HubCapacity hubCapacityData={hubCapacityData} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default CapacitySlotMgmt;
