import React, { useState } from "react";
import "../../../src/screens/manager_orders/ManageOrders.css";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import SearchButton from "../../components/search_button/SearchButton";
import SearchInput from "../../components/search_input/SearchInput";
import { SelectDropDown } from "../../components/select_drop_down/SelectDropDown";
import ManageTable from "../../../src/screens/manager_orders/ManageTable.js";
import CalenderDropDown from "../../components/manageOrderCalender/CalenderDropDown";
import MultipleDatePicker from "../../components/multiple_date_picker/MultipleDatePicker";

const ManageOrders = () => {
  const manage = [
    {
      m_orderid: "BW34567",
      m_customerid: "CUSID001000",
      m_hubid: "CUSID001000",
      m_noofitems: "16",
      m_orderdate: "06-05-2022",
      m_pickup: "06-05-2022",
      m_pickupslot: "Slot 1",
      m_delivery: "07-05-2022",
      m_delivery_slot: "Slot 1",
      m_ordertotal: "₹ 1070.00",
      m_orderstatus: "Inprogress",
    },
    {
      m_orderid: "BW34567",
      m_customerid: "CUSID001000",
      m_hubid: "CUSID001000",
      m_noofitems: "16",
      m_orderdate: "06-05-2022",
      m_pickup: "06-05-2022",
      m_pickupslot: "Slot 1",
      m_delivery: "07-05-2022",
      m_delivery_slot: "Slot 1",
      m_ordertotal: "₹ 1070.00",
      m_orderstatus: "Hold",
    },
    {
      m_orderid: "BW34567",
      m_customerid: "CUSID001000",
      m_hubid: "CUSID001000",
      m_noofitems: "16",
      m_orderdate: "06-05-2022",
      m_pickup: "06-05-2022",
      m_pickupslot: "Slot 1",
      m_delivery: "07-05-2022",
      m_delivery_slot: "Slot 1",
      m_ordertotal: "₹ 1070.00",
      m_orderstatus: "Inprogress",
    },
    {
      m_orderid: "BW34567",
      m_customerid: "CUSID001000",
      m_hubid: "CUSID001000",
      m_noofitems: "16",
      m_orderdate: "06-05-2022",
      m_pickup: "06-05-2022",
      m_pickupslot: "Slot 1",
      m_delivery: "07-05-2022",
      m_delivery_slot: "Slot 1",
      m_ordertotal: "₹ 1070.00",
      m_orderstatus: "Cancelled",
    },
    {
      m_orderid: "BW34567",
      m_customerid: "CUSID001000",
      m_hubid: "CUSID001000",
      m_noofitems: "16",
      m_orderdate: "06-05-2022",
      m_pickup: "06-05-2022",
      m_pickupslot: "Slot 1",
      m_delivery: "07-05-2022",
      m_delivery_slot: "Slot 1",
      m_ordertotal: "₹ 1070.00",
      m_orderstatus: "Completed",
    },
    {
      m_orderid: "BW34567",
      m_customerid: "CUSID001000",
      m_hubid: "CUSID001000",
      m_noofitems: "16",
      m_orderdate: "06-05-2022",
      m_pickup: "06-05-2022",
      m_pickupslot: "Slot 1",
      m_delivery: "07-05-2022",
      m_delivery_slot: "Slot 1",
      m_ordertotal: "₹ 1070.00",
      m_orderstatus: "Completed",
    },
    {
      m_orderid: "BW34567",
      m_customerid: "CUSID001000",
      m_hubid: "CUSID001000",
      m_noofitems: "16",
      m_orderdate: "06-05-2022",
      m_pickup: "06-05-2022",
      m_pickupslot: "Slot 1",
      m_delivery: "07-05-2022",
      m_delivery_slot: "Slot 1",
      m_ordertotal: "₹ 1070.00",
      m_orderstatus: "Cancelled",
    },
    {
      m_orderid: "BW34567",
      m_customerid: "CUSID001000",
      m_hubid: "CUSID001000",
      m_noofitems: "16",
      m_orderdate: "06-05-2022",
      m_pickup: "06-05-2022",
      m_pickupslot: "Slot 1",
      m_delivery: "07-05-2022",
      m_delivery_slot: "Slot 1",
      m_ordertotal: "₹ 1070.00",
      m_orderstatus: "Completed",
    },
    {
      m_orderid: "BW34567",
      m_customerid: "CUSID001000",
      m_hubid: "CUSID001000",
      m_noofitems: "16",
      m_orderdate: "06-05-2022",
      m_pickup: "06-05-2022",
      m_pickupslot: "Slot 1",
      m_delivery: "07-05-2022",
      m_delivery_slot: "Slot 1",
      m_ordertotal: "₹ 1070.00",
      m_orderstatus: "Completed",
    },
  ];
  const hubs = [
    {
      label: "All Hub",
      value: "all hub",
    },
    {
      label: "Pickup Slot 1",
      value: "pickup slot 1",
    },
    {
      label: "Pickup Slot 2",
      value: "pickup slot 2",
    },
    {
      label: "Delivery Slot 1",
      value: "delivery slot 1",
    },
    {
      label: "Delivery Slot 2",
      value: "delivery slot 2",
    },
  ];
  const [hub, setHub] = useState({
    value: hubs[0].value,
    label: hubs[0].label,
  });
  const slots = [
    {
      label: "All Slot",
      value: "all slot",
    },
    {
      label: "Pickup Slot 1",
      value: "pickup slot 1",
    },
    {
      label: "Pickup Slot 2",
      value: "pickup slot 2",
    },
    {
      label: "Delivery Slot 1",
      value: "delivery slot 1",
    },
    {
      label: "Delivery Slot 2",
      value: "delivery slot 2",
    },
  ];
  const [slot, setSlot] = useState({
    value: slots[0].value,
    label: slots[0].label,
  });
  const AllStatus = [
    {
      label: "All Status",
      value: "all status",
    },
    {
      label: "Pickup Slot 1",
      value: "pickup slot 1",
    },
    {
      label: "Pickup Slot 2",
      value: "pickup slot 2",
    },
    {
      label: "Delivery Slot 1",
      value: "delivery slot 1",
    },
    {
      label: "Delivery Slot 2",
      value: "delivery slot 2",
    },
  ];
  const [status, setStatus] = useState({
    value: AllStatus[0].value,
    label: AllStatus[0].label,
  });
  const orderDate = [
    {
      label: "Order Date",
      value: "order date",
    },
    {
      label: "Pickup date",
      value: "pickup date",
    },
    {
      label: "Delivery Date",
      value: "delivery date",
    },
   
  ];
  const [date, setDatetStatus] = useState({
    value: orderDate[0].value,
    label: orderDate[0].label,
  });

  return (
    <div className="manage-order-container">
      <BreadCrumb title="Manage Orders"></BreadCrumb>
      <div className="manage-order-main-content">
        <div className="manage-order-header-container">
          <p className="manage-order-heading">Manage Orders</p>
          <div className="manage-order-export-sync-container">
            <img src={require("../../images/export.png")} alt="export_button" />
          </div>
        </div>
        <div className="manage-order-search-dropdown-container">
          <SearchInput
            placeholderText="Search by ID, Name, Mobile no."
            style={{ width: "315px", marginRight: "10px" }}
          />
          <CalenderDropDown
            select={date}
            setSelect={setDatetStatus}
            options={orderDate}
            style={{ width: "145px" }}
            style1={{borderTopRightRadius:"0px",borderTopLeftRadius:"8px",borderBottomLeftRadius:"8px",borderBottomRightRadius:"0px"}}
          />
          <SelectDropDown
            select={slot}
            setSelect={setSlot}
            options={slots}
            style={{ width: "145px", marginRight: "10px" }}
          />
        

          <SelectDropDown
            select={hub}
            setSelect={setHub}
            options={hubs}
            style={{ width: "145px", marginRight: "10px" }}
          />
          <SelectDropDown
            select={status}
            setSelect={setStatus}
            options={AllStatus}
            style={{ width: "145px", marginRight: "10px" }}
          />

          <SearchButton text="Search" />
        </div>
        <div className="manage-order-custo-table-content">
          <ManageTable
            data={manage}
            rowsPerPage={6}
            tableHeader={[
              `Order ID`,
              "Customer Id",
              "Hub Id",
              "No. of items",
              "Order Date",
              "Pickup",
              "Pickup Slot ",
              "Delivery",
              "Delivery Slot",
              "Order Total",
              "Order Status",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default ManageOrders;
