import React, { useState } from "react";
import { data } from "../../utils/Functions";
import Table from "../../components/location_management_table/Table";
import SearchInput from "../../components/search_input/SearchInput";
import { SelectDropDown } from "../../components/select_drop_down/SelectDropDown";
import SearchButton from "../../components/search_button/SearchButton";
import Table_state from "../../components/location_management_table/Table_state";
function LocationState({ setCrumbHeading, setModal2,name }) {
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
          placeholderText="Search by state id"
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
            <Table_state
              setCrumbHeading={setCrumbHeading}
              setModal2={setModal2}
              name={name}
              tableHeader={[
                `State ID`,
                "State Name",
                "Country",
                "No.of City",
                "No.of CPU",
                "No.of Hubs",
                "GST Info",
                "Status",
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

export default LocationState;
