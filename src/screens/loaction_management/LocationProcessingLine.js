import React, { useState } from "react";
import "../loaction_management/LocationCountry.css";
import { data } from "../../utils/Functions";
import TableCity from "../../components/location_management_table/TableCity";
import SearchInput from "../../components/search_input/SearchInput";
import { SelectDropDown } from "../../components/select_drop_down/SelectDropDown";
import SearchButton from "../../components/search_button/SearchButton";

function LocationProcessingLine({ setCrumbHeading, setModal4,name }) {
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
          placeholderText="Search by processing station id"
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
              name={name}
              setCrumbHeading={setCrumbHeading}
              setModal4={setModal4}
              tableHeader={[
                `Station ID`,
                "Processing Station Name",
                "CPU",
                "City",
                "Type",
                "Status",
                "Action",
              ]}
              data={data}
              rowsPerPage={4}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default LocationProcessingLine;
