import React from "react";
import SearchButton from "../../../components/search_button/SearchButton";
import SearchInput from "../../../components/search_input/SearchInput";
import { useNavigate } from "react-router-dom";
import DriverDetailsTable from "../DriverDetailsTable";
export default function DriverDetails({driverDetailsdata}) {
  
  const navigate = useNavigate();
  return (
    <>
      <div className="delivery-vehicle-header-container">
        <SearchInput
          placeholderText="Search by ID, Registeration No."
          style={{
            width: "515px",
            height: "49px",
            marginRight: "20px",
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
          }}
        />
        <SearchButton style={{ backgroundColor: "white" }} text="Search" />
      </div>
      <DriverDetailsTable
        tableHeader={[
          `Driver ID`,
          "Driver Name",
          "Contact Number",
          "Driving License Number",
          "Action",
        ]}
        data={driverDetailsdata}
        rowsPerPage={6}
      />
    </>
  );
}
