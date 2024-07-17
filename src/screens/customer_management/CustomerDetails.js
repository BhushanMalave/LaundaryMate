import { Link } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import { ContentBox } from "../../components/buttons/Button";
import CustomerStatusButton from "../../components/customer_status_button/CustomerStatusButton";
import SearchButton from "../../components/search_button/SearchButton";
import DatePickerInput from "../../components/single_datepicker_input/DatePickerInput";
import "../customer_management/CustomerDetails.css";
import {CustomerPaymentSelectionModal} from "./CustomerPaymentSelectionModal";
import { WalletStatementModal } from "./WalletStatementModal";

const CustomerDetails = () => {
  const [toggle,setToggle]= useState(false)
  const [modal,setModal]=useState(false)
  const navigate = useNavigate();
  const lastOrders = [
    {
      orderno: "BW34567",
      noitems: "16",
      orderdate: "06-05-2022",
      ordertype: "Subscription",
      ordertotal: "₹ 1070.00",
      orderstatus: "Inprogress",
    },
    {
      orderno: "BW34446",
      noitems: "10",
      orderdate: "03-05-2022",
      ordertype: "Standard",
      ordertotal: "₹ 1600.00",
      orderstatus: "Hold",
    },
    {
      orderno: "BW34567",
      noitems: "12",
      orderdate: "01-05-2022",
      ordertype: "Standard",
      ordertotal: "₹ 1400.00",
      orderstatus: "Cancelled",
    },
    {
      orderno: "BW34446",
      noitems: "10",
      orderdate: "22-04-2022",
      ordertype: "Subscription",
      ordertotal: "₹ 1200.00",
      orderstatus: "Completed",
    },
    {
      orderno: "BW34567",
      noitems: "12",
      orderdate: "20-04-2022",
      ordertype: "Standard",
      ordertotal: "₹ 1100.00",
      orderstatus: "Completed",
    },
  ];
  return (
    <>
      <BreadCrumb title="Customer Details">
        <Link
          underline="none"
          color="#0074BC"
          href="/CustomerManagement"
          className="bread-crumb-link"
        >
          Customer Management
        </Link>
      </BreadCrumb>
      <div className="customer-details-container">
        <div className="main-heading">
          <div className="customer-details-header-section">
            <img
              className="left-arrow"
              src={require("../../images/left_arrow.png")}
              alt="arrow"
              onClick={() => navigate("/CustomerManagement")}
            />
            <p className="details-heading">Customer Details</p>
          </div>
          <div className="linking-section">
            <a className="personal-details" href="#section1">
              Perosnal Details{" "}
            </a>
            <a className="sub-add-wall-order" href="#section2">
              Subscription Details
            </a>
            <a className="sub-add-wall-order" href="#section3">
              Address Details
            </a>
            <a className="sub-add-wall-order" href="#section4">
              Wallet Details
            </a>
            <a className="sub-add-wall-order" href="#section5">
              Order Details
            </a>
          </div>
          <div className="personal-details-container" id="section1">
            <p className="personal-details-container-heading">
              Personal Details
            </p>
            <div className="name-gender-dob-mblno-section">
              <ContentBox heading="Name" content="Scheshachala B" />
              <ContentBox heading="Gender" content="Male" />
              <ContentBox heading="DOB" content="10-02-1987" />
              <ContentBox heading="Primary Phone number" content="9876543210" />
            </div>
            <div className="email-box">
              <ContentBox heading="Email" content="sheshb@gmail.com" />
            </div>
          </div>
          <div className="subscription-details-container" id="section2">
            <p className="personal-details-container-heading">
              Subscription Details
            </p>
            <div className="subscription-content-section1">
              <ContentBox
                heading="Customer Status"
                content="Active"
                style={{ color: "#28B411" }}
              />
              <ContentBox heading="Customer Id" content="CUSID001000" />
              <ContentBox heading="Customer Type" content="B2C" />
              <ContentBox heading="Membership Id" content="MID0074512" />
            </div>
            <div className="subscription-content-section3">
              <ContentBox heading="City" content="Bangalore" />
              <ContentBox heading="Promo code " content="PC0764851" />
              <ContentBox heading="Subscription Type" content="Subscription" />
              <ContentBox heading="Subscription Plan" content="Club ultimate" />
            </div>
            <div className="subscription-content-section3">
              <ContentBox heading="Pickup Days" content="Mon, Tue, Thu" />
              <ContentBox heading="Pickup Slot" content="Slot 2" />
              <ContentBox
                heading="Delivery Type"
                content="24hr delivery/Delivery on next
pick-up"
              />
              <ContentBox
                heading="Subscription Plan Start Date "
                content="01-05-2022"
              />
            </div>
            <div className="subscription-content-section3">
              <ContentBox
                heading="Subscription Plan End Date"
                content="31-04-2023"
              />
              <ContentBox
                heading="Subscription Pause Start Date "
                content="05-05-2022"
              />
              <ContentBox
                heading="Subscription Pause End Date"
                content="05-05-2022"
              />
              <ContentBox
                heading="Subscription Resume Date"
                content="10-08-2022"
              />
            </div>
            <div className="subscription-content-section4">
              <ContentBox heading="No. of times Plan Paused" content="3" />
              <ContentBox heading="No. of times Plan Changed" content="2" />
            </div>
          </div>
          <div className="address-details-container" id="section3">
            <p className="personal-details-container-heading">
              Address Details
            </p>

            <div className="address-main">
              <div className="primary-address-content">
                <img
                  className="flag-icn"
                  src={require("../../images/flag.png")}
                  alt="address"
                />
                <p className="primary-add-heading">Primary Address</p>
              </div>
              <div className="home-address-content">
                <p className="home-address-heading">Home Address</p>
                <p className="home-content">
                  <p>Sunshine Apartments</p>
                  #24, 3rd main, Jayanagar 4th block, Bengaluru - 560078
                  <p>
                    <span className="hub-id-text">Hub ID :</span> Hub 001 -
                    Jayanagar
                  </p>
                </p>
              </div>
              <div className="office-address" id="section4">
                <p className="home-address-heading">Office Address</p>
                <p className="home-content">
                  <p>113 Amin Bldg RJ Road,</p>
                  Near Jj Hospital, Bengaluru - 560032
                  <p>
                    <span className="hub-id-text">Hub ID :</span> Hub 001 -
                    Jayanagar
                  </p>
                </p>
              </div>
              <div className="office-address">
                <p className="home-address-heading">Address 1</p>
                <p className="home-content">
                  <p>40 Savlaram Bhavan,</p>
                  Vidyaniketan School Rd, Manpada Road, Bengaluru - 560012
                  <p>
                    <span className="hub-id-text">Hub ID :</span> Hub 001 -
                    Jayanagar
                  </p>
                </p>
              </div>
            </div>
          </div>
          <div className="Wallet-details" id="section4">
            <p className="personal-details-container-heading">Wallet Details</p>
            <div className="balance-container">
              <ContentBox
                heading="Wallet Total Balance"
                content="₹ 2000.00"
                style={{ width: "100px" }}
              />
              <SearchButton
                text="Wallet Statement"
                style={{ width: "208px" }}
                onClick={()=> setToggle(true)}
              />
              <SearchButton
                text="Credit or Debit Wallet"
                style={{ width: "208px" }}
                onClick={()=> setModal(true)}
              />
            </div>
          </div>
          <div className="order-details" id="section5">
            <p className="personal-details-container-heading">Order Details</p>
            <div className="order-details-header">
              <input
                className="order-input-box"
                type="text"
                placeholder="Enter Order Number"
              />
              <div className="input-to-calender">
               
              <DatePickerInput type="date" label="From date" style={{width:"180px"}}/>
              </div>
              <p className="to">to</p>
              <div className="input-to-calender">
                {/* <input
                  className="order-calender-box"
                  type="text"
                  placeholder="End Date"
                />
                <img
                  className="calender-icon"
                  src={require("../../images/calender.png")}
                  alt="calender_icn"
                  onClick={() => console.log("I am end date")}
                /> */}
              <DatePickerInput type="date" label="End date" style={{width:"180px"}}/>

              </div>

              <button className="customer-search-order">Search Order</button>
            </div>
            <p className="last-5-orders">Last 5 Orders</p>
            <div className="order-details-container">
              <table className="customer-details-table-container">
                <thead className="customer-details-table-head-main">
                  <tr className="customer-details-table-head-row">
                    <th className="customer-details-table-head-data1">
                      Order Number
                    </th>
                    <th className="customer-details-table-head-data">
                      No. of items
                    </th>
                    <th className="customer-details-table-head-data">
                      Order Date
                    </th>
                    <th className="customer-details-table-head-data">
                      Order Type
                    </th>
                    <th className="customer-details-table-head-data">
                      Order Total
                    </th>
                    <th className="customer-details-table-head-data">
                      Order Status
                    </th>
                  </tr>
                </thead>
                {lastOrders.map((data) => (
                  <tr className="customer-details-table-content-row">
                    <td className="customer-details-table-content-data1"  onClick={() => navigate("/OrderDetails")}>
                      {data.orderno}
                    </td>
                    <td className="customer-details-table-content-data">
                      {data.noitems}
                    </td>
                    <td className="customer-details-table-content-data">
                      {data.orderdate}
                    </td>
                    <td className="customer-details-table-content-data">
                      {data.ordertype}
                    </td>
                    <td className="customer-details-table-content-data">
                      {data.ordertotal}
                    </td>
                    {/* <td className="customer-details-table-content-data">{data.orderstatus}</td> */}
                    <td className="customer-details-table-content-data">
                      {data.orderstatus === "Inprogress" ? (
                        <CustomerStatusButton text="Inprogress" />
                      ) : data.orderstatus === "Hold" ? (
                        <CustomerStatusButton text="Hold" />
                      ) : data.orderstatus === "Cancelled" ? (
                        <CustomerStatusButton text="Cancelled" />
                      ) : data.orderstatus === "Completed" ? (
                        <CustomerStatusButton text="Completed" />
                      ) : null}
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
      <WalletStatementModal toggle={toggle} setToggle={setToggle}/>
      <CustomerPaymentSelectionModal modal={modal} setModal={setModal}/>

    </>
  );
};

export default CustomerDetails;
