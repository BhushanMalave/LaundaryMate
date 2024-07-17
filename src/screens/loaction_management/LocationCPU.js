import React, { useState } from "react";
import "../loaction_management/LocationCountry.css";
import { data } from "../../utils/Functions";
import Table from "../../components/location_management_table/Table";
import SearchInput from "../../components/search_input/SearchInput";
import { SelectDropDown } from "../../components/select_drop_down/SelectDropDown";
import SearchButton from "../../components/search_button/SearchButton";
import TableCity from "../../components/location_management_table/TableCity";

function LocationCPU({ setCrumbHeading, setModal5,name }) {
  const options = [
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
  const [select, setSelect] = useState({
    value: options[0].value,
    label: options[0].label,
  });

  return (
    <div>
      <div className="locationCountryFilter">
        <SearchInput
          style={{ width: "315px", height: "44px" }}
          placeholderText="Search by country id"
        />
        <SelectDropDown
          select={select}
          setSelect={setSelect}
          options={options}
          style={{ width: "190px", marginLeft: "20px" }}
        />
        <SelectDropDown
          select={select}
          setSelect={setSelect}
          options={options}
          style={{ width: "190px", marginLeft: "20px" }}
        />
        <SearchButton text="Search" style={{ marginLeft: "80px" }} />
      </div>
      <div className="locationCountryList">
        {data.length > 0 ? (
          <div className="locationCountryColumn">
            <TableCity
              setCrumbHeading={setCrumbHeading}
              setModal5={setModal5}
              tableHeader={[
                `CPU ID`,
                "CPU Name",
                "City",
                "No.of Hubs",
                "Shifts",
                "Status",
                "Action",
              ]}
              data={data}
              rowsPerPage={4}
              name={name}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default LocationCPU;
