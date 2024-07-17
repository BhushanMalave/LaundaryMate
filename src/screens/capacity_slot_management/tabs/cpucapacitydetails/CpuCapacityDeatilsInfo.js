import React, { useState } from "react";
import BreadCrumb from "../../../../components/breadcrumb/BreadCrumb";
import { Link } from "@mui/material";
import { useLocation } from "react-router-dom";
import { SelectDropDown } from "../../../../components/select_drop_down/SelectDropDown";
import { CpuCapacityDeatilsInfoTable } from "./CpuCapacityDeatilsInfoTable";
import { useNavigate } from "react-router-dom";
import SearchButton from "../../../../components/search_button/SearchButton";
import DatePickerInput from "../../../../components/single_datepicker_input/DatePickerInput";
import CapacityManagementDateInput from "../../../../components/capacity_management_date_input/CapacityManagementDateInput";

export const CpuCapacityDeatilsInfo = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const options = [
    {
      label: "2023",
      value: "2023",
    },
    {
      label: "2022",
      value: "2022",
    },
    {
      label: "2021",
      value: "2021",
    },
  ];
  const [select, setSelect] = useState({
    value: options[0].value,
    label: options[0].label,
  });

  const obj = [
    {
      date: "01 May 2022, Sun",
      shift1: "10",
      shift2: "90",
    },
    {
      date: "01 May 2022, Sun",
      shift1: "40",
      shift2: "100",
    },
    {
      date: "01 May 2022, Sun",
      shift1: "45",
      shift2: "50",
    },
    {
      date: "01 May 2022, Sun",
      shift1: "25",
      shift2: "70",
    },
    {
      date: "01 May 2022, Sun",
      shift1: "65",
      shift2: "80",
    },
  ];

  const [cpuCapacityDetailInfoData, setcpuCapacityDetailInfoData] =
    useState(obj);
  return (
    <div>
      <BreadCrumb title={state?.duration}>
        <Link
          underline="none"
          color="#0074BC"
          href="/CapacitySlotManagement"
          className="bread-crumb-link"
        >
          Capacity and Slot Management
        </Link>
        <Link
          underline="none"
          color="#0074BC"
          href="/CpuCapacityDetails"
          className="bread-crumb-link"
        >
          {state?.cpuId}
        </Link>
      </BreadCrumb>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "28px 45px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <img
            src={require("../../../../images/inc_back.png")}
            alt="back_icon"
            onClick={() => {
              navigate("/CpuCapacityDetails", {
                state: { cpuId: state?.cpuId },
              });
            }}
            height="15px"
            width="25px"
          />
          <div
            style={{
              fontFamily: "Bold",
              fontStyle: "normal",
              fontSize: "32px",
              lineHeight: " 40px",
              color: "#181818",
              marginLeft: "10px",
            }}
          >
            {state?.duration}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <img src={require("../../../../images/export.png")} alt="back_icon" />
          <img
            src={require("../../../../images/Refresh_btn.png")}
            alt="back_icon"
            style={{ marginLeft: "10px" }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <div style={{marginTop:10,marginLeft:45}}>
          <CapacityManagementDateInput label="Select Date" type="date" />
        </div>
        <SearchButton
          text={"Search"}
          style={{ marginLeft: "15px", marginTop: "10px" }}
        />
      </div>
      <div style={{ padding: "10px 45px" }}>
        <CpuCapacityDeatilsInfoTable
          tableHeader={[
            `Date`,
            "Shift 1 (6 AM - 10 AM)",
            "Shift 2 (4 PM - 8 PM)",
          ]}
          data={cpuCapacityDetailInfoData}
          rowsPerPage={10}
        />
      </div>
    </div>
  );
};
