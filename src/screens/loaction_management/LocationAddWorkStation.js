import React, { useState } from "react";
import "../loaction_management/LocationCountryDetails.css";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import "../loaction_management/LocationAddState.css";
import SearchButton from "../../components/search_button/SearchButton";
import { AddButton } from "../../components/buttons/Button";
import { SelectDropDown } from "../../components/select_drop_down/SelectDropDown";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { data } from "../../utils/Functions";
import LocationDeliveryCharges from "../../components/location_management_table/LocationDeliveryCharges";
import addDelivery from "../../images/addDelivery.png";
import "../loaction_management/LocationAddCity.css";
import questionMark from "../../images/questionMark.png";
import Table3 from "../../components/location_management_table/Table3";
import "./LocationAddWorkStation.css";
import TableCity from "../../components/location_management_table/TableCity";
import { Link } from "@mui/material";
import SelectLabel from "../../components/select_label.js/SelectLabel";

function LocationAddWorkStation({ crumbHeading, setModal11 }) {
  const [link1, setLink1] = useState(true);
  const [link2, setLink2] = useState(false);
  const [link3, setLink3] = useState(false);
  const [link4, setLink4] = useState(false);
  const [link5, setLink5] = useState(false);
  const [arrComp, setArrComp] = useState([{ id: 1, name: "tata" }]);
  const [addShift, setAddShift] = useState([]);
  const [addSlot, setAddSlot] = useState([]);

  function addComponent() {
    setArrComp((preVal) => [
      ...preVal,
      { id: Math.floor(Math.random() * 100), name: "hello" },
    ]);
  }

  function addShiftArr(val) {
    setAddShift((prevVal) => [...prevVal, val]);
  }

  function addSlotArr(val) {
    setAddSlot((prevVal) => [...prevVal, val]);
  }

  const options = [
    {
      label: "Status",
      value: "status",
    },
    {
      label: "Active",
      value: "active",
    },
    {
      label: "Disabled",
      value: "disabled",
    },
  ];

  const options1 = [
    {
      label: "6 AM",
      value: "6 AM",
    },
  ];

  const options2 = [
    {
      label: "10 AM",
      value: "10 AM",
    },
  ];

  const [select, setSelect] = useState({
    value: options[0].value,
    label: options[0].label,
  });
  const [select1, setSelect1] = useState({
    value: options[0].value,
    label: options[0].label,
  });
  const [select2, setSelect2] = useState({
    value: options[0].value,
    label: options[0].label,
  });

  const [shiftText, setShiftText] = useState("");

  return (
    <div className="locationCountyCon">
      <BreadCrumb title={`${crumbHeading}`}>
        <Link
          underline="none"
          color="#0074BC"
          href="/LocationManagement"
          className="bread-crumb-link"
        >
          Location Management
        </Link>
      </BreadCrumb>
      <div className="locationAddStateHeader">
        <p className="locationCountyHeadText1">Add Work Station</p>
        <div className="locationCountyStateButton">
          <SearchButton
            text="Cancel"
            onClick={() => {
              setModal11(false);
            }}
          />
          <AddButton
            onClick={() => {
              console.log("hello");
            }}
            text="Save Work Station"
          />
        </div>
      </div>

      <div className="locationCreateWorkStationContent">
        {/* <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        > */}
        <div className="locationWorkStationShift">
          <div
            style={{ marginLeft: "20px", width: "270px", marginTop: "-33px" }}
          >
            <SelectLabel
              placeholder="Select Processing Station"
              options={options}
              styles={{ height: "60px", backgroundColor: "#ffffff" }}
              styles1={{ backgroundColor: "#ffffff" }}
            />
          </div>

          <div
            style={{ marginLeft: "20px", width: "270px", marginTop: "-33px" }}
          >
            <SelectLabel
              placeholder="Select Type of Stage"
              options={options}
              styles={{ height: "60px", backgroundColor: "#ffffff" }}
              styles1={{ backgroundColor: "#ffffff" }}
            />
          </div>
          <SearchButton
            style={{
              marginLeft: "20px",
              marginTop: "20px",
              backgroundColor: "white",
              height: "58px",
              width: "80px",
            }}
            text="Add"
            onClick={() => {}}
          />
        </div>
        {/* </div> */}
      </div>
      <div style={{ padding: "0px 50px" }}>
        <div className="locationCountryList">
          {data.length > 0 ? (
            <div className="locationCountryColumn">
              <TableCity
                //   setCrumbHeading={setCrumbHeading}
                // setModal11={setModal11}
                name={"workStation"}
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
    </div>
  );
}

export default LocationAddWorkStation;
