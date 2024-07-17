import React, { useState } from "react";
import "../customer_management/CustomerManagement.css";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import SearchInput from "../../components/search_input/SearchInput";
import SearchButton from "../../components/search_button/SearchButton";
import { ExportButton } from "../../components/buttons/Button";

import CustomerTable from "./Customer_Table";
import CustomerStatusButton from "../../components/customer_status_button/CustomerStatusButton";
import { SelectDropDown } from "../../components/select_drop_down/SelectDropDown";

const CustomerManagement = () => {
  const obj = [
    {
      customerid: "CUSID001000",
      customertype: "B2C",
      name: "Scheshachala B",
      mblno: "9876543210",
      subscriptiontype: "Standard",
      customerstatus: "Active",
    },
    {
      customerid: "CUSID001001",
      customertype: "B2C",
      name: "Elzac D’souza",
      mblno: "9876543210",
      subscriptiontype: "Standard",
      customerstatus: "Inactive",
    },
    {
      customerid: "CUSID001018",
      customertype: "B2C",
      name: "Jeevan Mithun",
      mblno: "9876543210",
      subscriptiontype: "Subscription",
      customerstatus: "Active",
    },
    {
      customerid: "CUSID001023",
      customertype: "B2C",
      name: "Deepanjan Pal",
      mblno: "9876543210",
      subscriptiontype: "Subscription",
      customerstatus: "Active",
    },
    {
      customerid: "CUSID001022",
      customertype: "B2C",
      name: "Sunder Mohan Rao",
      mblno: "9876543210",
      subscriptiontype: "Subscription",
      customerstatus: "Inactive",
    },
    {
      customerid: "CUSID001021",
      customertype: "B2C",
      name: "Senthil Rajanathan",
      mblno: "9876543210",
      subscriptiontype: "Standard",
      customerstatus: "Active",
    },
    {
      customerid: "CUSID001023",
      customertype: "B2C",
      name: "Deepanjan Pal",
      mblno: "9876543210",
      subscriptiontype: "Subscription",
      customerstatus: "Active",
    },
    {
      customerid: "CUSID001022",
      customertype: "B2C",
      name: "Sunder Mohan Rao",
      mblno: "9876543210",
      subscriptiontype: "Subscription",
      customerstatus: "Inactive",
    },
    {
      customerid: "CUSID001021",
      customertype: "B2C",
      name: "Senthil Rajanathan",
      mblno: "9876543210",
      subscriptiontype: "Standard",
      customerstatus: "Active",
    },
  ];
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
    <div className="customer-management-container">
      <BreadCrumb title="Customer Management"></BreadCrumb>
      <div className="main-content">
        <div className="header-container">
          <p className="heading">Customer Management</p>
          <div className="export-sync-container">
            <img src={require("../../images/export.png")} alt="export_button" />
            <img
              src={require("../../images/sync_button.png")}
              alt="sync_button"
            />
          </div>
        </div>
        <div className="search-dropdown-container">
          <SearchInput
            placeholderText="Search by ID, Name, Mobile no."
            style={{ width: "315px", marginRight: "10px" }}
          />
          <SelectDropDown
            select={select}
            setSelect={setSelect}
            options={options}
            style={{ width: "190px", marginRight: "10px" }}
          />
          <SelectDropDown
            select={select}
            setSelect={setSelect}
            options={options}
            style={{ width: "190px", marginRight: "10px" }}
          />
          <SearchButton text="Search" />
        </div>
        <div className="custo-table-content">
          <CustomerTable
            data={obj}
            rowsPerPage={6}
            tableHeader={[
              `Customer Id`,
              "Customer Type",
              "Name",
              "Primary Mobile Number",
              "Subscription Type",
              "Customer Status",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerManagement;
