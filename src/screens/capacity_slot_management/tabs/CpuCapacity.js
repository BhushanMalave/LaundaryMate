import React, { useState } from "react";
import "./CpuCapacity.css";
import SearchInput from "../../../components/search_input/SearchInput";
import { SelectDropDown } from "../../../components/select_drop_down/SelectDropDown";
import SearchButton from "../../../components/search_button/SearchButton";
import CpuCapacityTable from "./CpuCapacityTable";
export default function CpuCapacity({ cpuCapacityData }) {
  const options = [
    {
      label: "All City",
      value: "All City",
    },
    {
      label: "Banglore",
      value: "Banglore",
    },
    {
      label: "Udupi",
      value: "Udupi",
    },
  ];
  const [select, setSelect] = useState({
    value: options[0].value,
    label: options[0].label,
  });
    const [selectview, setSelectview] = useState(false);

  return (
    <>
      <div
        className="delivery-vehicle-header-container"
        onClick={(e) => {
          e.stopPropagation();
          setSelectview(false);
        }}
      >
        <SearchInput
          placeholderText="Search by CPU ID, Name"
          style={{
            width: "315px",
            height: "49px",
            marginRight: "20px",
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
          }}
        />
        <SelectDropDown
          select={select}
          view={selectview}
          setView={setSelectview}
          setSelect={setSelect}
          options={options}
          style={{
            width: "190px",
            marginRight: "20px",
            fontFamily: "Regular",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "18px",
            color: "#808080",
          }}
        />
        <SearchButton text={"Search"} style={{ backgroundColor: "white" }} />
      </div>
      <CpuCapacityTable
        tableHeader={[
          `CPU ID`,
          "CPU Name",
          "City",
          "No.ofHubs",
          "Shift",
          "Status",
        ]}
        data={cpuCapacityData}
        rowsPerPage={3}
      />
    </>
  );
}
