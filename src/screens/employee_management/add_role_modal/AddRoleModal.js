import React, { useEffect, useState } from "react";
import { useStore } from "react-redux";
import { AddButton } from "../../../components/buttons/Button";
import SearchButton from "../../../components/search_button/SearchButton";
import SelectLabel from "../../../components/select_label.js/SelectLabel";
import "./AddRoleModal.css";

import {
  employeeAreaList,
  HubNameId,
  HubEmployeeRoleList,
  HubNameIdList,
  CpuRoleList,
  CPUIdList,CpuProcessingStationList
} from "./addRoleModalData";

const AddRoleModal = ({
  toggle,
  setToggle,
  employeeId,
  employeeName,
  editdata,
}) => {
  const divStyle = {
    display: toggle ? "block" : "none",
  };
  function closeModal(e) {
    e.stopPropagation();
    setToggle(false);
  }
  const [employeeArea, setEmployeeArea] = useState("");
  const [hubEmployeeRole, setHubEmployeeRole] = useState("");
  const [hubNameId, setHubNameId] = useState("");
  const [hubSecnondaryRole, setHubSecnondaryRole] = useState("");
  const [cpuRole, setCpuRole] = useState("")
  const [cpuId, setCpuId] = useState("")
  const [cpuProcessingStation,setCpuProcessingStation] = useState("")
  const [cpuSecnondaryRole, setCpuSecnondaryRole] = useState("");

  const value = [];
  const [state, setState] = useState(false)
const fun = () => {
      {HubNameId?.map(
        (item) =>
          (value = value.push({
            value: item.hubId.concat(",", item.hubName),
            label: item.hubId.concat(",", item.hubName),
          })))
    }
    console.log("===", value);
  };
  return (
    <div
      className="add-role-modal-main-container"
      style={divStyle}
      onClick={closeModal}
    >
      <div
        className="add-role-modal-content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="add-role-modal-header">
          <div className="add-role-modal-header-text">Add Role</div>
          <div className="add-role-modal-close-button-div" onClick={closeModal}>
            <img
              className="add-role-modal-close-button"
              src={require("../../../images/close.png")}
              alt=""
            />
          </div>
        </div>
        <div className="add-role-modal-inner-container">
          <div className="add-role-modal-modal-employee-name-id-div">
            <p className="add-role-modal-employee-name-id-placeholder">
              Employee Name & ID
            </p>
            <p className="add-role-modal-employee-name-id-text">
              {employeeName} ,{" "}
              <span className="add-role-modal-text-transform-uppercase">
                {employeeId}
              </span>{" "}
            </p>
          </div>

          <div className="add-role-modal-margin-top"
          onClick={()=>{setState(true)
          }}
          >
            <SelectLabel
              placeholder="Employee Area"
              options={employeeAreaList}
              styles={{
                width: "400px",
                height: " 58px",
                backgroundColor: "white",
                borderColor: "#C1C1C1",
                borderWidth: "1px",
                borderRadius: "8px",
                paddingTop: "5px",
                textAlign: "justify",
                paddingLeft: "15px",
                // paddingRight:'20px'
              }}
              containerStyles={{
                width: "400px",
                marginTop: "0px",
              }}
              disable={false}
              getValue={setEmployeeArea}
            />
          </div>
          {employeeArea === "Hub" ? (
            <>
              <div className="add-role-modal-margin-top">
                <SelectLabel
                  placeholder="Employee Role"
                  options={HubEmployeeRoleList}
                  styles={{
                    width: "400px",
                    height: " 58px",
                    backgroundColor: "white",
                    borderColor: "#C1C1C1",
                    borderWidth: "1px",
                    borderRadius: "8px",
                    paddingTop: "5px",
                    paddingLeft: "15px",
                  }}
                  containerStyles={{
                    width: "400px",
                    marginTop: "0px",
                  }}
                  disable={false}
                  getValue={setHubEmployeeRole}
                />
              </div>
              <div className="add-role-modal-margin-top">
                <SelectLabel
                  placeholder="Hub Name & ID"
                  options={value}
                  styles={{
                    width: "400px",
                    height: " 58px",
                    backgroundColor: "white",
                    borderColor: "#C1C1C1",
                    borderWidth: "1px",
                    borderRadius: "8px",
                    paddingTop: "5px",
                    paddingLeft: "15px",
                  }}
                  containerStyles={{
                    width: "400px",
                    marginTop: "0px",
                  }}
                  disable={false}
                  getValue={setHubNameId}
                />
              </div>
              <div className="add-role-modal-margin-top">
                <SelectLabel
                  placeholder="Select Secondary Employee Role(s)"
                  options={HubEmployeeRoleList}
                  styles={{
                    width: "400px",
                    height: " 58px",
                    backgroundColor: "white",
                    borderColor: "#C1C1C1",
                    borderWidth: "1px",
                    borderRadius: "8px",
                    paddingTop: "5px",
                    paddingLeft: "15px",
                  }}
                  containerStyles={{
                    width: "400px",
                    marginTop: "0px",
                  }}
                  disable={false}
                  getValue={setHubSecnondaryRole}
                />
              </div>
            </>
          ) : (
            <>
              {employeeArea === "CPU" ? (
                <>
                  <div className="add-role-modal-margin-top">
                    <SelectLabel
                      placeholder="Employee Role"
                      options={CpuRoleList}
                      styles={{
                        width: "400px",
                        height: " 58px",
                        backgroundColor: "white",
                        borderColor: "#C1C1C1",
                        borderWidth: "1px",
                        borderRadius: "8px",
                        paddingTop: "5px",
                        paddingLeft: "15px",
                      }}
                      containerStyles={{
                        width: "400px",
                        marginTop: "0px",
                      }}
                      disable={false}
                      getValue={setCpuRole}
                    />
                  </div>
                  <div className="add-role-modal-margin-top">
                    <SelectLabel
                      placeholder="CPU"
                      options={CPUIdList}
                      styles={{
                        width: "400px",
                        height: " 58px",
                        backgroundColor: "white",
                        borderColor: "#C1C1C1",
                        borderWidth: "1px",
                        borderRadius: "8px",
                        paddingTop: "5px",
                        paddingLeft: "15px",
                      }}
                      containerStyles={{
                        width: "400px",
                        marginTop: "0px",
                      }}
                      disable={false}
                      getValue={setCpuId}
                    />
                  </div>
                  <div className="add-role-modal-margin-top">
                    <SelectLabel
                      placeholder="Processing Station"
                      options={CpuProcessingStationList}
                      styles={{
                        width: "400px",
                        height: " 58px",
                        backgroundColor: "white",
                        borderColor: "#C1C1C1",
                        borderWidth: "1px",
                        borderRadius: "8px",
                        paddingTop: "5px",
                        paddingLeft: "15px",
                      }}
                      containerStyles={{
                        width: "400px",
                        marginTop: "0px",
                      }}
                      disable={false}
                      getValue={setCpuProcessingStation}
                    />
                  </div>

                  <div className="add-role-modal-margin-top">
                    <SelectLabel
                      placeholder="Select Secondary Employee Role(s)"
                      options={CpuRoleList}
                      styles={{
                        width: "400px",
                        height: " 58px",
                        backgroundColor: "white",
                        borderColor: "#C1C1C1",
                        borderWidth: "1px",
                        borderRadius: "8px",
                        paddingTop: "5px",
                        paddingLeft: "15px",
                      }}
                      containerStyles={{
                        width: "400px",
                        marginTop: "0px",
                      }}
                      disable={false}
                      getValue={setCpuSecnondaryRole}
                    />
                  </div>
                </>
              ) : (
                <></>
              )}
            </>
          )}
          <div className="add-role-modal-bottom-container">
            <AddButton
              text={"Add Role"}
              style={{
                width: "110px",
                height: "44px",
                borderRadius: "8px",
                marginRight: "30px",
              }}
            />
            <SearchButton
              text={"Cancel"}
              style={{
                width: "110px",
                height: "44px",
                borderRadius: "8px",
              }}
              onClick={closeModal}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRoleModal;
