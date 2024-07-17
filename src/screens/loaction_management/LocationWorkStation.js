import React, { useState } from "react";
import { data } from "../../utils/Functions";
import TableCity from "../../components/location_management_table/TableCity";
import SearchInput from "../../components/search_input/SearchInput";
import { SelectDropDown } from "../../components/select_drop_down/SelectDropDown";
import SearchButton from "../../components/search_button/SearchButton";
function LocationWorkStation({ setCrumbHeading, setModal11, name }) {
  const options = [
    {
      label: "All Status",
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
          style={{ width: "315px" }}
          placeholderText="Search by work station id"
        />
        <SelectDropDown
          select={select}
          setSelect={setSelect}
          options={options}
          style={{ width: "140px", marginLeft: "20px" }}
        />
        <SelectDropDown
          select={select}
          setSelect={setSelect}
          options={options}
          style={{ width: "140px", marginLeft: "20px" }}
        />
        <SearchButton style={{ marginLeft: "80px" }} text="Search" />
      </div>
      <div className="locationCountryList">
        {data.length > 0 ? (
          <div className="locationCountryColumn">
            <TableCity
              setCrumbHeading={setCrumbHeading}
              setModal11={setModal11}
              name={name}
              tableHeader={[
                `Work Station  ID`,
                "Processing Station Name",
                "Stage",
                "Action",
              ]}
              data={data}
              rowsPerPage={3}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default LocationWorkStation;
