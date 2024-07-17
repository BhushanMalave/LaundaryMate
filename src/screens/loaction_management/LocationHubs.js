import React, { useState } from "react";
import { data } from "../../utils/Functions";
import TableCity from "../../components/location_management_table/TableCity";
import SearchInput from "../../components/search_input/SearchInput";
import { SelectDropDown } from "../../components/select_drop_down/SelectDropDown";
import SearchButton from "../../components/search_button/SearchButton";
import AddNew from "../../components/Add_New/AddNew";
import "./LocationHubs.css";
import Table3 from "../../components/location_management_table/Table3";
function LocationHubs({ setCrumbHeading, setModal7 }) {
  const options = [
    {
      label: "All CPU",
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
    <>
      {/* <div className="Location-Hub-Empty-Div">
        <AddNew text="Hub" onClick={() => console.log("ertydfgh")} />
      </div> */}
      <div>
        <div>
          <div className="locationCountryFilter">
            <SearchInput
              style={{ width: "315px", height: "44px" }}
              placeholderText="Search by hub id"
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
                <Table3
                  name={"cityHub"}
                  setCrumbHeading={setCrumbHeading}
                  setModal7={setModal7}
                  tableHeader={[
                    `Hub ID`,
                    "Hub Name",
                    "City",
                    "CPU",
                    "Slots",
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
      </div>
    </>
  );
}

export default LocationHubs;
