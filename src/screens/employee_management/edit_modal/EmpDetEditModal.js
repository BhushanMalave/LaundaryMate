import React, { useState } from "react";
import SelectLabel from "../../../components/select_label.js/SelectLabel";
import "./EmpDetEditModal.css";

import { AddButton } from "../../../components/buttons/Button";
import SearchButton from "../../../components/search_button/SearchButton";
import SelectLabelEdit from "../../../components/select_label_edit/SelectLabelEdit";
import {
  DriverName,
  vehicleNumber,
} from "../../route_plan_management/RoutePlanData";

import {
  employeeAreaList,
  HubNameId,
  HubEmployeeRoleList,
  HubNameIdList,
  CpuRoleList,
  CPUIdList,
  CpuProcessingStationList,
} from "../add_role_modal/addRoleModalData";

const EmpDetEditModal = ({
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

  const [employeeArea, setEmployeeArea] = useState({
    label: "CPU",
    value: "CPU",
  });
  const [hubEmployeeRole, setHubEmployeeRole] = useState({
    value:"Hub Manager",
    label:"Hub Manager"
});
  const [hubNameId, setHubNameId] = useState( {
    hubName:"Jayanagar",
    hubId:"HB0001"
});
  const [hubSecnondaryRole, setHubSecnondaryRole] = useState({
    value:"Hub Manager",
    label:"Hub Manager"
});
  const [cpuRole, setCpuRole] = useState("");
  const [cpuId, setCpuId] = useState("");
  const [cpuProcessingStation, setCpuProcessingStation] = useState("");
  const [cpuSecnondaryRole, setCpuSecnondaryRole] = useState("");

  const value = [];
  const [state, setState] = useState(false);
  const fun = () => {
    {
      HubNameId?.map(
        (item) =>
          (value = value.push({
            value: item.hubId.concat(",", item.hubName),
            label: item.hubId.concat(",", item.hubName),
          }))
      );
    }
    console.log("===", value);
  };
  return (
    <div
      className="emp-det-edit-modal-main-container"
      style={divStyle}
      onClick={closeModal}
    >
      <div
        className="emp-det-edit-modal-content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="emp-det-edit-modal-header">
          <div className="emp-det-edit-modal-header-text">Add Role</div>
          <div
            className="emp-det-edit-modal-close-button-div"
            onClick={closeModal}
          >
            <img
              className="emp-det-edit-modal-close-button"
              src={require("../../../images/close.png")}
              alt=""
            />
          </div>
        </div>
        <div className="emp-det-edit-modal-inner-container">
          <div className="emp-det-edit-modal-modal-employee-name-id-div">
            <p className="emp-det-edit-modal-employee-name-id-placeholder">
              Employee Name & ID
            </p>
            <p className="emp-det-edit-modal-employee-name-id-text">
              {employeeName} ,{" "}
              <span className="emp-det-edit-modal-text-transform-uppercase">
                {employeeId}
              </span>{" "}
            </p>
          </div>

          <div
            className="emp-det-edit-modal-margin-top"
            onClick={() => {
              setState(true);
            }}
          >
            <SelectLabelEdit
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
              value={employeeArea}
            />
          </div>
          {employeeArea?.label === "Hub" ? (
            <>
              <div className="emp-det-edit-modal-margin-top">
                <SelectLabelEdit
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
                  value={hubEmployeeRole}
                />
              </div>
              <div className="emp-det-edit-modal-margin-top">
                <SelectLabelEdit
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
                  value={hubNameId}
                />
              </div>
              <div className="emp-det-edit-modal-margin-top">
                <SelectLabelEdit
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
                  value={hubSecnondaryRole}
                />
              </div>
            </>
          ) : (
            <>
              {employeeArea?.label === "CPU" ? (
                <>
                  <div className="emp-det-edit-modal-margin-top">
                    <SelectLabelEdit
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
                      value={cpuRole}
                    />
                  </div>
                  <div className="emp-det-edit-modal-margin-top">
                    <SelectLabelEdit
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
                      value={cpuId}
                    />
                  </div>

                  <div className="emp-det-edit-modal-margin-top">
                    <SelectLabelEdit
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
                      value={cpuProcessingStation}
                    />
                  </div>

                  <div className="emp-det-edit-modal-margin-top">
                    <SelectLabelEdit
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
                      value={cpuSecnondaryRole}
                    />
                  </div>
                </>
              ) : (
                <></>
              )}
            </>
          )}
          <div className="emp-det-edit-modal-bottom-container">
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

export default EmpDetEditModal;
