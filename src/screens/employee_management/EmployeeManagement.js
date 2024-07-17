// import { Button } from "@mui/material";
import { border, color } from "@mui/system";
import React, { useState } from "react";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import { ExportButton, SyncButton } from "../../components/buttons/Button";
import SearchButton from "../../components/search_button/SearchButton";
// import SearchInput from "../../components/search_input/SearchInput";
import SearchInput2 from "../../components/search_input_2/SearchInput2";
import { SelectDropDown } from "../../components/select_drop_down/SelectDropDown";
import { obj } from "./EmployeeManagmentData";

import "./EmployeeManagement.css";
import EmployeeTable from "./EmployeeTable";
const EmployeeManagement = () => {
  const options1 = [
    {
      label: "All Role",
      value: "all role",
    },
    {
      label: "Mango",
      value: "mango",
    },
    {
      label: "Banana",
      value: "banana",
    },
  ];
  const options2 = [
    {
      label: "All Location",
      value: "all selects",
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
  const [selectAllRole, setSelectAllRole] = useState({
    label: options1[0].label,
    value: options1[0].value,
  });
  const [selectAllRoleView, setSelectAllRoleView] = useState(false);

  
  const [select, setSelect] = useState({
    value: options2[0].value,
    label: options2[0].label,
  });
  const [selectView, setSelectView] = useState(false);
  const [checked, setChecked] = useState(false);
  return (
    <div
      className="employee-management-container"
      onClick={(e) => {
        e.stopPropagation();
        setSelectView(false);
        setSelectAllRoleView(false);
      }}
    >
      <BreadCrumb title="Employee Management"></BreadCrumb>
      <div className="employee-management-container2">
        <div className="employee-management-header-div">
          <span className="employee-management-heading-text">
            Employee Management
          </span>
          <div className="employee-management-header-buttons-div">
            <ExportButton />
            <SyncButton />
          </div>
        </div>

        <div className="employee-management-filter-div">
          <div className="employee-management-filter-div-left">
            <SearchInput2
              placeholderText="Search by ID, Name, Mobile no."
              style={{ width: "315px", marginRight: "20px" }}
            />

            <SelectDropDown
              select={selectAllRole}
              setSelect={setSelectAllRole}
              options={options1}
              view={selectAllRoleView}
              setView={setSelectAllRoleView}
              style={{ width: "140px", marginRight: "20px" }}
              // onClick={(e)=>{e.stopPropagation()}}
            />
            <SelectDropDown
              select={select}
              setSelect={setSelect}
              options={options2}
              view={selectView}
              setView={setSelectView}
              style={{ width: "140px", marginRight: "20px" }}
            />

            <SearchButton text={"Search"} />
          </div>
          <label className="employee-management-checkbox-label">
            <input
              type={"checkbox"}
              checked={checked}
              onChange={() => {
                setChecked(!checked);
              }}
              className={checked ? "employee-management-checked" : ""}
            />
            Show only unassigned (2 Employees)
          </label>
        </div>
        <div className="employee-management-table">
          <EmployeeTable data={obj} rowsPerPage={8} />
        </div>
      </div>
    </div>
  );
};

export default EmployeeManagement;
