import React, { useState } from "react";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import { ExportButton, SyncButton } from "../../components/buttons/Button";
import SearchButton from "../../components/search_button/SearchButton";
import SearchInput2 from "../../components/search_input_2/SearchInput2";
import { SelectDropDown } from "../../components/select_drop_down/SelectDropDown";
import RoutePlanManagementTable from "./RoutePlanManagementTable";
import "./RoutePlanManagemet.css";
import { obj, options1, options2 } from "./RoutePlanData";

const RoutePlanManagemet = () => {
  // const obj = obj;
  // const options1 = options1;
  // const options2 = options2;
  const [selectAllHub, setSelectAllHub] = useState({
    label: options1[0].label,
    value: options1[0].value,
  });

  const [selectAllSlot, setSelectAllSlot] = useState({
    value: options2[0].value,
    label: options2[0].label,
  });

  const [checked, setChecked] = useState(false);
  const [date, setDate] = useState(defaultDate);
  var curr = new Date();
  curr.setDate(curr.getDate());
  var defaultDate = curr.toISOString().substring(0, 10);

  return (
    <div
      className="route-plan-management-container"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <BreadCrumb title="Route Plan Managemet"></BreadCrumb>
      <div className="route-plan-management-container2">
        <div className="route-plan-management-header-div">
          <span className="route-plan-management-heading-text">
            Route Plan Managemet
          </span>
          <SyncButton />
        </div>

        <div className="route-plan-management-filter-div">
          <div className="route-plan-management-filter-div-left">
            <SearchInput2
              placeholderText="Search by ID, Name, Mobile no."
              style={{ width: "372px", marginRight: "20px" }}
            />

            <SelectDropDown
              select={selectAllHub}
              setSelect={setSelectAllHub}
              options={options1}
              style={{ width: "155px", marginRight: "20px" }}
              // onClick={(e)=>{e.stopPropagation()}}
            />
            <div className="route-plan-management-date-box">
              <input
                id="date-input"
                className="route-plan-management-date"
                type="date"
                defaultValue={defaultDate}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </div>
            <SelectDropDown
              select={selectAllSlot}
              setSelect={setSelectAllSlot}
              options={options2}
              style={{ width: "155px", marginRight: "20px" }}
            />

            <SearchButton text={"Search"} />
          </div>
        </div>
        <div className="route-plan-management-table">
          <RoutePlanManagementTable data={obj} rowsPerPage={8} />
        </div>
      </div>
    </div>
  );
};

export default RoutePlanManagemet;
