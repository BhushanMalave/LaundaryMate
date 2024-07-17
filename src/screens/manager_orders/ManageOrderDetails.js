import { Link } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import { ContentBox } from "../../components/buttons/Button";
import SearchButton from "../../components/search_button/SearchButton";
import CustomerTrackItem from "../customer_management/CustomerTrackItem";
import CustomerTrackOrderModal from "../customer_management/CustomerTrackOrderModal";
import "../manager_orders/ManageOrderDetails.css";
import ManageOrderDressTable from "./ManageOrderDressTable";

const ManageOrderDetails = () => {
  const navigate = useNavigate();
  const [cancleorderState, setCancleorderState] = useState(false);
  const [reasonlength, setreasonlength] = useState(0);
  const [trackModal, setTrackModal] = useState(false);
  const [trackItem, setTrackItem] = useState(false);

  return (
    <>
      <BreadCrumb title="  #BW34567">
        <Link
          underline="none"
          color="#0074BC"
          href="/ManageOrders"
          className="bread-crumb-link"
        >
          Manage Orders
        </Link>
      </BreadCrumb>
      <div className="manage-order-details-container">
        <div className="manage-order-details-heading">
          <div className="manage-order-details-header-section">
            <img
              className="manage-order-left-arrow"
              src={require("../../images/left_arrow.png")}
              alt="arrow"
              onClick={() => navigate("/ManageOrders")}
            />
            <p className="manage-order-details-heading">Order #BW34567</p>
          </div>
          <div className="manage-button-section">
            <SearchButton
              text="Cancel Order"
              style={{ width: "147px" }}
              onClick={() => {
                setCancleorderState(true);
              }}
            />
            <img
              src={require("../../images/Standart.png")}
              alt=""
              onClick={() => setTrackModal(true)}
            />
          </div>
        </div>
        <div className="manage-order-linking-section">
          <a className="manage-customer-details" href="#section1">
            Customer Details
          </a>
          <a className="manage-process-order-details" href="#section2">
            Process Details
          </a>
          <a className="manage-process-order-details" href="#section3">
            Order Details
          </a>
        </div>
        <div className="manage-order-customer-details-container" id="section1">
          <p className="manage-order-customer-details-container-heading">
            Customer Details
          </p>
          <div className="manage-custo-section1">
            <ContentBox heading="Customer Id" content="CUSID001000" />
            <ContentBox heading="Customer Name" content="Scheshachala B" />
            <ContentBox heading="No. of items" content="17" />
            <ContentBox
              heading="Order Status"
              content="Inprogress"
              style={{ color: " #0074BC" }}
            />
          </div>
          <div className="manage-custo-section2">
            <ContentBox heading="Order Date" content="05-05-2022" />
            <ContentBox
              heading="Pickup Date and Slot"
              content="06-05-2022: Slot 1"
            />
            <ContentBox
              heading="Delivery Date and Slot"
              content="07-05-2022: Slot 1"
            />
            <ContentBox heading="Order CPU Status" content="Packing" />
          </div>
          <div className="manage-custo-section2">
            <ContentBox
              heading="Address"
              content="Sunshine Apartments #24, 3rd main, Jayanagar 4th block,Bengaluru - 560078"
            />
            <ContentBox
              heading="Hub Name & ID"
              content="Hub 1 - Jayanagar HB0001"
            />
            <ContentBox
              heading="Customer Phone Number"
              content="+91 9858 988 899"
            />
            <ContentBox
              heading="Customer Email ID"
              content="sheshachal.b@gamil.com"
            />
          </div>
        </div>
        {/* tyuiop */}
        <div className="manage-order-process-details-container" id="section2">
          <p className="manage-order-process-details-container-heading">
            Process Details
          </p>
          <div className="manage-process-section1">
            <ContentBox
              heading="Order Placed Date and Time"
              content="05-05-2022: 3:00pm"
            />
            <ContentBox
              heading="Order Picked Date and Time"
              content="06-05-2022: 5:20pm"
            />
            <ContentBox
              heading="Hub Dispatch Status"
              content="Sent to Receiving Manager"
            />
            <ContentBox
              heading="Hub Dispatch Date and Time"
              content="06-05-2022: 9:20pm"
            />
          </div>
          <div className="manage-process-section2">
            <ContentBox
              heading="OProcess Center Receipt Time"
              content="10:20pm"
            />
            <ContentBox
              heading="Receiving Officer Name"
              content="Sebastian Lawrence"
            />
            <ContentBox heading="Inspector Name" content="Vipin Krishna" />
            <ContentBox heading="Inspection Time" content="11:00pm" />
          </div>
          <div className="manage-custo-section2">
            <ContentBox
              heading="Finishing Officer Name"
              content="Jayaprapash K"
            />
            <ContentBox heading="Packing Time" content="10:20pm" />
            <ContentBox heading="Hub Receipt Time" content="10:30pm" />
            <ContentBox heading="Delivery Vehicle ID" content="VID00623" />
          </div>
          <div className="manage-custo-section2">
            <ContentBox heading="Delivery Agent Name" content="Harsha Jagan " />
            <ContentBox
              heading="Delivery Date and Time"
              content="10:07-05-2022: 5:30pm"
            />
            <ContentBox heading="Invoice Id" content="115814781" />
            <ContentBox heading="Payment Type" content="Cash" />
          </div>
        </div>
        {/* dfghjkl */}
        <div className="manage-order-order-details-container" id="section3">
          <p className="manage-order-order-details-container-heading">
            Order Details
          </p>
          <div className="manage-order-section1">
            <ContentBox heading="Order Total" content="₹ 1070.00" />
            <ContentBox heading="Discount (Promocode 30%)" content="₹ 0.00" />
            <ContentBox heading="Paid from LM Wallet  " content="₹ 1,000.00" />
            <ContentBox heading="Total Paid" content="₹ 1000.00" />
            <ContentBox
              heading="Balance Amount (To be collected)"
              content="₹ 70.00"
            />
          </div>
        </div>
        <ManageOrderDressTable />
      </div>

      <CustomerTrackOrderModal
        trackModal={trackModal}
        setTrackModal={setTrackModal}
      />
      <CustomerTrackItem trackItem={trackItem} setTrackItem={setTrackItem} />
      {cancleorderState && (
        <div className="cancleorder_main">
          <div className="cancleorder_div">
            <div
              style={{
                padding: "40px 40px 20px  40px",
                fontFamily: "Regular",
                fontStyle: "normal",
                fontSize: "18px",
                lineHeight: "24px",
                color: "#5C5C5C",
              }}
            >
              Are you sure want to cancel the order{" "}
              <span
                style={{
                  fontFamily: "Regular",
                  fontStyle: "normal",
                  fontSize: "18px",
                  lineHeight: "24px",
                  color: "#181818",
                }}
              >
                #BW34567
              </span>
              ?
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "400px",
                height: "100px",
                background: "#FFFFFF",
              }}
              className="cancleorder_input"
            >
              <div
                style={{
                  fontFamily: "Bold",
                  fontStyle: "normal",
                  fontSize: "12px",
                  lineHeight: "16px",
                  color: "#808080",
                  marginLeft: "-20px",
                  marginTop: "5px",
                }}
              >
                Enter the reason
              </div>
              <textarea
                type="text"
                name="reason"
                maxLength={80}
                onChange={(e) => {
                  console.log(e.target.value);
                  setreasonlength(e.target.value.length);
                }}
                style={{
                  height: "70px",
                  width: "360px",
                  marginTop: "2px",
                  marginLeft: "-20px",
                  borderWidth: 0,
                  fontFamily: "Bold",
                  fontStyle: "normal",
                  fontSize: "16px",
                  lineHeight: "25px",
                  letterSpacing: "1px",
                  color: "#181818",
                  outline: "none",
                }}
              />
            </div>
            <div
              style={{
                padding: "0px 40px 0px  40px",
                fontFamily: "Regular",
                fontStyle: "normal",
                fontSize: "18px",
                lineHeight: "24px",
                color: "#5C5C5C",
              }}
            >
              {reasonlength}/80
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",

                padding: "10px 40px",
              }}
            >
              <img
                src={require("../../images/no_btn.png")}
                alt="no_btn"
                style={{ marginRight: "0px" }}
                onClick={() => {
                  setCancleorderState(false);
                }}
              />
              <img
                src={require("../../images/cancleorder_btn.png")}
                alt="cancleorder_btn"
                style={{ marginLeft: "30px" }}
                onClick={() => {
                  setCancleorderState(false);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ManageOrderDetails;
