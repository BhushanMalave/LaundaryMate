import React, { useState } from "react";
import "./DeliveryVehicle.css";
import SearchInput from "../../../components/search_input/SearchInput";
import { SelectDropDown } from "../../../components/select_drop_down/SelectDropDown";
import SearchButton from "../../../components/search_button/SearchButton";
import { useNavigate } from "react-router-dom";
import VehicleTable from "../VehicleTable";

export default function DeliveryVehicle({ deliveryVehicleData }) {
  const options = [
    {
      label: "All Status",
      value: "All Status",
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
  const navigate = useNavigate();

  return (
    <>
      {deliveryVehicleData?.length > 0 ? (
        <>
          <div className="delivery-vehicle-header-container">
            <SearchInput
              placeholderText="Search by ID, Registeration No."
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
            <SearchButton style={{ backgroundColor: "white" }} text='Search'/>
          </div>
          <VehicleTable
            tableHeader={[
              `Vehicle ID`,
              "Vehicle Registeration Number",
              "Hub ID",
              "Vehicle Type",
              "Capacity (Weight)",
              "Capacity (Volume)",
              "Vehicle Status",
              "Action",
            ]}
            data={deliveryVehicleData}
            rowsPerPage={6}
         
          />
        </>
      ) : (
        <div className="delivery-vehicle-null-container">
          <img
            src={require("../../../images/Icn_Nothing.png")}
            alt="no vehicle"
          />
          <p className="delivery-vehicle-novehicle-text">No Vehicle Added</p>
          <p className="delivery-vehicle-clickbelow-text">
            Click below to add new vehicle
          </p>
          <img
            src={require("../../../images/AddNewVehicleWithIcon.png")}
            alt="addnew vehicle"
            onClick={(e) => {
              e.stopPropagation();
              navigate("/addnewdeliveryvehicle");
            }}
          />
        </div>
      )}
    </>
  );
}
