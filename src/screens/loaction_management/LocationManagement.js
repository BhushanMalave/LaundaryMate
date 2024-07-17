import React, { useEffect, useState } from "react";
import "../loaction_management/LocationManagement.css";
import { NavLink } from "react-router-dom";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import LocationCountry from "./LocationCountry";
import LocationState from "./LocationState";
import LocationCity from "./LocationCity";
import LocationCPU from "../loaction_management/LocationCPU";
import LocationProcessingLine from "./LocationProcessingLine";
import LocationWorkStation from "./LocationWorkStation";
import { Routes, Route } from "react-router-dom";
import LocationHubs from "../loaction_management/LocationHubs";
import LocationCountryDetails from "./LocationCountryDetails";
import { AddButton } from "../../components/buttons/Button";
import { LocationExportButton } from "../../components/buttons/Button";
import LocationStateDetails from "./LocationStateDetails";
import LocationAddState from "./LocationAddState";
import LocationAddCity from "./LocationAddCity";
import LocationCityDetails from "./LocationCityDetails";
import LocationCpuDetails from "./LocationCpuDetails";
import LocationAddCpu from "./LocationAddCpu";
import LocationHubDetails from "./LocationHubDetails";
import LocationAddHub from "./LocationAddHub";
import LocationAddProcess from "./LocationAddProcess";
import LocationAddWorkStation from "./LocationAddWorkStation";

function LocationManagement() {
  const data = [{ name: "hello" }];
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal4, setModal4] = useState(false);
  const [active, setActive] = useState(false);
  const [crumbHeading, setCrumbHeading] = useState("");
  const [state, setState] = useState(false);
  const [city, setCity] = useState(false);
  const [cpu, setCpu] = useState(false);
  const [hub, setHub] = useState(false);
  const [processLine, setProcessLine] = useState(false);
  const [work, setWork] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [modal7, setModal7] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal6, setModal6] = useState(false);
  const [modal5, setModal5] = useState(false);
  const [modal10, setModal10] = useState(false);
  const [modal8, setModal8] = useState(false);
  const [modal11, setModal11] = useState(false);
  const [modal12, setModal12] = useState(false);
  const [modal9, setModal9] = useState(false);

  const handleActive = () => {
    if (window.location.pathname === "/LocationManagement") {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  useEffect(() => {
    handleActive();
  }, []);
  return (
    <div className="locationManagementCon">
      {/* Details display modal section */}
      {modal && (
        <LocationCountryDetails
          setModal={setModal}
          crumbHeading={crumbHeading}
        />
      )}
      {modal2 && (
        <LocationStateDetails
          setModal2={setModal2}
          crumbHeading={crumbHeading}
        />
      )}
      {modal4 && (
        <LocationCityDetails
          setModal4={setModal4}
          crumbHeading={crumbHeading}
        />
      )}
      {modal7 && (
        <LocationHubDetails setModal7={setModal7} crumbHeading={crumbHeading} />
      )}

      {modal5 && (
        <LocationCpuDetails setModal5={setModal5} crumbHeading={crumbHeading} />
      )}

      {/* Adding data modal section */}

      {modal1 && (
        <LocationAddState setModal1={setModal1} crumbHeading={crumbHeading} />
      )}

      {modal3 && (
        <LocationAddCity setModal3={setModal3} crumbHeading={crumbHeading} />
      )}

      {modal6 && (
        <LocationAddHub setModal6={setModal6} crumbHeading={crumbHeading} />
      )}

      {modal8 && (
        <LocationAddCpu setModal8={setModal8} crumbHeading={crumbHeading} />
      )}
      {modal11 && (
        <LocationAddWorkStation
          setModal11={setModal11}
          crumbHeading={crumbHeading}
        />
      )}

      {modal10 && (
        <LocationAddProcess
          setModal10={setModal10}
          crumbHeading={crumbHeading}
        />
      )}

      {/* Location management main screen */}

      {!modal &&
        !modal1 &&
        !modal3 &&
        !modal2 &&
        !modal4 &&
        !modal5 &&
        !modal7 &&
        !modal6 &&
        !modal8 &&
        !modal10&&
        !modal11 &&
        !modal12 && <BreadCrumb title="Location Management" />}
      {!modal &&
        !modal1 &&
        !modal3 &&
        !modal2 &&
        !modal4 &&
        !modal5 &&
        !modal7 &&
        !modal6 &&
        !modal10&&
        !modal8 &&
        !modal11 &&
        !modal12 && (
          <div className="locationManagementContent">
            <div className="locationManagementHeading">
              <p className="locationManagementHeadingText">
                Location Management
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <LocationExportButton
                  text={
                    state
                      ? "Export State"
                      : city
                      ? "Export City"
                      : cpu
                      ? "Export CPU"
                      : hub
                      ? "Export Hub"
                      : processLine
                      ? "Export Processing Line"
                      : work
                      ? "Export Work Station"
                      : "Export Country"
                  }
                />
                {(state || city || hub || cpu || processLine || work) && (
                  <AddButton
                    onClick={() => {
                      if (state) {
                        setModal1(true);
                        setCrumbHeading("Add State");
                      }

                      if (city) {
                        setModal3(true);
                        setCrumbHeading("Add City");
                      }
                      if (hub) {
                        setModal6(true);
                        setCrumbHeading("Add Hub");
                      }
                      if (work) {
                        setModal11(true);
                        setCrumbHeading("Add New Work Station");
                      }
                      if (processLine) {
                        setModal10(true);
                        setCrumbHeading("Add Processing Line");
                      }

                      if (cpu) {
                        setModal8(true);
                        setCrumbHeading("Add CPU");
                      }
                    }}
                    text={
                      state
                        ? "Add New State"
                        : city
                        ? "Add New City"
                        : cpu
                        ? "Add New CPU"
                        : hub
                        ? "Add New Hub"
                        : processLine
                        ? "Add New Processing Line"
                        : "Add New Work Station"
                    }
                  />
                )}
              </div>
            </div>
            <div className="locationManagementNav">
              <NavLink
                className="locationNavLink1"
                onClick={() => {
                  setActive(true);
                  setState(false);
                  setCity(false);
                  setCpu(false);
                  setHub(false);
                  setProcessLine(false);
                  setWork(false);
                }}
                style={({ isActive }) => {
                  return {
                    borderBottom: active ? "3.5px solid #0074BC" : "none",
                    color: active ? "#0074BC" : "#9D9D9D",
                  };
                }}
                to="/LocationManagement"
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  Country&nbsp;&nbsp;&nbsp;
                  <div className="locationNavLink1Length">{data.length}</div>
                </div>
              </NavLink>
              <NavLink
                className="locationNavLink1"
                onClick={() => {
                  setActive(false);
                  setState(true);
                  setCity(false);
                  setCpu(false);
                  setHub(false);
                  setProcessLine(false);
                  setWork(false);
                }}
                style={({ isActive }) => {
                  return {
                    borderBottom: isActive ? "3.5px solid #0074BC" : "none",
                    color: isActive ? "#0074BC" : "#9D9D9D",
                  };
                }}
                to="LocationState"
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  State&nbsp;&nbsp;&nbsp;
                  <div className="locationNavLink1Length">{data.length}</div>
                </div>
              </NavLink>
              <NavLink
                className="locationNavLink1"
                onClick={() => {
                  setActive(false);
                  setState(false);
                  setCity(true);
                  setCpu(false);
                  setHub(false);
                  setProcessLine(false);
                  setWork(false);
                }}
                style={({ isActive }) => {
                  return {
                    borderBottom: isActive ? "3.5px solid #0074BC" : "none",
                    color: isActive ? "#0074BC" : "#9D9D9D",
                  };
                }}
                to="LocationCity"
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  City&nbsp;&nbsp;&nbsp;
                  <div className="locationNavLink1Length">{data.length}</div>
                </div>
              </NavLink>
              <NavLink
                className="locationNavLink1"
                onClick={() => {
                  setActive(false);
                  setState(false);
                  setCity(false);
                  setCpu(true);
                  setHub(false);
                  setProcessLine(false);
                  setWork(false);
                }}
                style={({ isActive }) => {
                  return {
                    borderBottom: isActive ? "3.5px solid #0074BC" : "none",
                    color: isActive ? "#0074BC" : "#9D9D9D",
                  };
                }}
                to="LocationCPU"
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  CPU&nbsp;&nbsp;&nbsp;
                  <div className="locationNavLink1Length">{data.length}</div>
                </div>
              </NavLink>
              <NavLink
                onClick={() => {
                  setActive(false);
                  setState(false);
                  setCity(false);
                  setCpu(false);
                  setHub(true);
                  setProcessLine(false);
                  setWork(false);
                }}
                className="locationNavLink1"
                style={({ isActive }) => {
                  return {
                    borderBottom: isActive ? "3.5px solid #0074BC" : "none",
                    color: isActive ? "#0074BC" : "#9D9D9D",
                  };
                }}
                to="LocationHubs"
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  Hubs&nbsp;&nbsp;&nbsp;
                  <div className="locationNavLink1Length">{data.length}</div>
                </div>
              </NavLink>
              <NavLink
                onClick={() => {
                  setActive(false);
                  setState(false);
                  setCity(false);
                  setCpu(false);
                  setHub(false);
                  setProcessLine(true);
                  setWork(false);
                }}
                className="locationNavLink1"
                style={({ isActive }) => {
                  return {
                    borderBottom: isActive ? "3.5px solid #0074BC" : "none",
                    color: isActive ? "#0074BC" : "#9D9D9D",
                  };
                }}
                to="LocationProcessingLine"
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  Processing Line&nbsp;&nbsp;&nbsp;
                  <div className="locationNavLink1Length">{data.length}</div>
                </div>
              </NavLink>
              <NavLink
                onClick={() => {
                  setActive(false);
                  setState(false);
                  setCity(false);
                  setCpu(false);
                  setHub(false);
                  setProcessLine(false);
                  setWork(true);
                }}
                className="locationNavLink1"
                style={({ isActive }) => {
                  return {
                    borderBottom: isActive ? "3.5px solid #0074BC" : "none",
                    color: isActive ? "#0074BC" : "#9D9D9D",
                  };
                }}
                to="LocationWorkStation"
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  Work Station&nbsp;&nbsp;&nbsp;
                  <div className="locationNavLink1Length">{data.length}</div>
                </div>
              </NavLink>
            </div>
            <Routes>
              <Route
                path="/"
                element={
                  <LocationCountry
                    setCrumbHeading={setCrumbHeading}
                    modal={modal}
                    setModal={setModal}
                    name="country"
                  />
                }
              />
              <Route
                path="LocationState"
                element={
                  <LocationState
                    setCrumbHeading={setCrumbHeading}
                    setModal2={setModal2}
                    name="state"
                  />
                }
              />
              <Route
                path="LocationCity"
                element={
                  <LocationCity
                    setModal4={setModal4}
                    setCrumbHeading={setCrumbHeading}
                    name="city"
                  />
                }
              />
              <Route
                path="LocationCPU"
                element={
                  <LocationCPU
                    setCrumbHeading={setCrumbHeading}
                    name="cpu"
                    setModal5={setModal5}
                  />
                }
              />
              <Route
                path="LocationHubs"
                element={
                  <LocationHubs
                    setCrumbHeading={setCrumbHeading}
                    setHub={setHub}
                    setModal7={setModal7}
                  />
                }
              />
              <Route
                path="LocationProcessingLine"
                element={<LocationProcessingLine name="process" />}
              />
              <Route
                path="LocationWorkStation"
                element={
                  <LocationWorkStation
                    setCrumbHeading={setCrumbHeading}
                    name="workStation"
                    setModal11={setModal11}
                  />
                }
              />
            </Routes>
          </div>
        )}
    </div>
  );
}

export default LocationManagement;
