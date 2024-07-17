import "../customer_management/OrderDetails.css";
import React, { useState } from "react";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import { Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchButton from "../../components/search_button/SearchButton";
import { ContentBox } from "../../components/buttons/Button";

import CustomerTrackOrderModal from "./CustomerTrackOrderModal";

import CustomerOrderDressTable from "./CustomerOrderDressTable";

const OrderDetails = () => {
  const navigate = useNavigate();
  const [cancleorderState, setCancleorderState] = useState(false);
  const [reasonlength, setreasonlength] = useState(0);
  const [trackModal, setTrackModal] = useState(false);

  return (
    <>
      <BreadCrumb title="Order Details">
        <Link
          underline="none"
          color="#0074BC"
          href="/CustomerManagement"
          className="bread-crumb-link"
        >
          Customer Management
        </Link>
        <Link
          underline="none"
          color="#0074BC"
          href="/CustomerDetails"
          className="bread-crumb-link"
        >
          Customer Details
        </Link>
      </BreadCrumb>
      <div className="order-details-container">
        <div className="order-details-heading">
          <div className="order-details-header-section">
            <img
              className="order-left-arrow"
              src={require("../../images/left_arrow.png")}
              alt="arrow"
              onClick={() => navigate("/CustomerDetails")}
            />
            <p className="order-details-heading">Order Details</p>
          </div>
          <div className="button-section">
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
        <div className="order-details-content1">
          <div className="order-details-section1">
            <ContentBox heading="No. of items" content="16" />
            <ContentBox heading="Order Date" content="05-05-2022" />
            <ContentBox heading="CPU Status" content="Packing" />
            <ContentBox
              heading="Order Status"
              content="Inprogress"
              style={{ color: "#0074BC" }}
            />
          </div>
          <div className="order-details-section2">
            <ContentBox
              heading="Address"
              content="Sunshine Apartments
#24, 3rd main, Jayanagar 4th block, 
Bengaluru - 560078"
            />
            <ContentBox heading="Pickup" content="06-05-2022: 5-9pm" />
            <ContentBox heading="Delivery" content="07-05-2022: 5-9pm" />
            <ContentBox heading="Order Total" content="₹ 1070.00" />
          </div>
          <div className="order-details-section3">
            <ContentBox heading="Discount (Promocode 30%)" content="₹ 0.00" />
            <ContentBox heading="Paid from LM Wallet" content="₹ 1,000.00" />
            <ContentBox heading="Total Paid" content="₹ 1000.00" />
            <ContentBox
              heading="Balance Amount (To be collected)"
              content="₹ 70.00"
            />
          </div>
        </div>

        <CustomerOrderDressTable />

        <CustomerTrackOrderModal
          trackModal={trackModal}
          setTrackModal={setTrackModal}
        />
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
                {/* <SearchButton text={"cancle"}/> */}
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
      </div>
    </>
  );
};

export default OrderDetails;
