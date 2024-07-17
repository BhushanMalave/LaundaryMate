import React, { useState } from "react";
import "./RoutePlanDetails.css";

import { Link } from "@mui/material";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import { useLocation, useNavigate } from "react-router-dom";
import { ContentBox } from "../../components/buttons/Button";
import AddressBox from "../../components/address_box/AddressBox";
import EditModal from "./edit_Modal/EditModal";
const map = [
  {
    number:"01",
    type:"Delivery",
    id:"LM00121",
    name:"Paramesh Venkateswaran",
    address:"Flat 502, Adarsh Sunshine Meadows18/293 1st Main 32nd Cross, JP Nagar,Near Silk Board Junction, Bengaluru - 560004",
    status:"done",
  },
  {
    number:"02",
    type:"Pickup",
    id:"LM14452",
    name:"Puneet Vohra",
    address:"Sunshine Apartments #24, 3rd main, Jayanagar 4th block Doddabalakanahalli, Bengaluru - 560006",
    status:"done",
  },
  {
    number:"03",
    type:"Pickup",
    id:"LM00225",
    name:"Paramesh Venkateswaran",
    address:"Flat 502, Adarsh Sunshine Meadows18/293 1st Main 32nd Cross, JP Nagar,Near Silk Board Junction, Bengaluru - 560004",
    status:"pending",
  },
  {
    number:"04",
    type:"pickup",
    id:"LM00245",
    name:"deepak ratan",
    address:"Flat 502, Adarsh Sunshine Meadows18/293 1st Main 32nd Cross, JP Nagar,Near Silk Board Junction, Bengaluru - 560004",
    status:"pending",
  },
  {
    number:"05",
    type:"pickup",
    id:"LM00654",
    name:"deepak ratan",
    address:"Flat 502, Adarsh Sunshine Meadows18/293 1st Main 32nd Cross, JP Nagar,Near Silk Board Junction, Bengaluru - 560004",
    status:"pending ",
  },
]

const RoutePlanDetails = () => {
  const { state } = useLocation();
  const routeName = state?.routeName;
  const navigate = useNavigate();
  const [edit, setEdit] = useState(false);
  return (
    // <div className="route-plan-details-main-container">
    <>
      <BreadCrumb title={"Route Plan Details"}>
        <Link
          underline="none"
          color="#0074BC"
          href="/RoutePlanManagemet"
          className="bread-crumb-link"
        >
          Route Plan Management
        </Link>
      </BreadCrumb>
      {/* <div className="route-plan-details-container">
        <div className="main-heading">
          <div className="route-plan-details-back-div">
            <img
              src={require("../../images/back.png")}
              alt={"back"}
              className={"route-plan-details-back-icon"}
              onClick={() => {
                navigate("/RoutePlanManagemet");
              }}
            />
            <p className="route-plan-details-back-employee-id">
              {state.routeName}
            </p>
          </div>
          <a href="#hello" target={"_self"}>1</a>
          <a href="#about">2</a>
          <div id="hello">hello</div>
          <div>/</div>
          <div>/</div>
          <div>/</div>
          <div>/</div>
          <div>/</div>
          <div>/</div>
          <div>/</div>
          <div>/</div>
          <div>/</div>
          <div>/</div>
          <div>/</div>
          <div>/</div>
          <div>/</div>
          <div>/</div>
          <div>/</div>
          <div>/</div>
          <div>/</div>
          <div>/</div>
          <div>/</div>
          <div>/</div>
          <div>/</div>
          <div>/</div>
          <div>/</div>
          <div>/</div>
          <div id="about">about</div>
        </div>
      </div> */}
      <div className="customer-details-container">
        <div className="route-plan-details-main-heading">
          <div className="route-plan-details-back-div">
            <img
              src={require("../../images/back.png")}
              alt={"back"}
              className={"route-plan-details-back-icon"}
              onClick={() => {
                navigate("/RoutePlanManagemet");
              }}
            />
            <div className="route-plan-details-back-employee-id">
              RT0001
            </div>
          </div>
          <div className="route-plan-details-linking-section">
            <a className="personal-details" href="#section1">
              Route Details{" "}
            </a>
            <a className="sub-add-wall-order" href="#section2">
              Map
            </a>
            <a className="sub-add-wall-order" href="#section3">
              Vehicle and Driver info
            </a>
          </div>
          <div className="route-plan-details-section-div" id="section1">
            <p className="route-plan-details-Heading-Text">Route Details</p>

            <div className="route-plan-details-content-div route-plan-details-content-first-div-margin-top">
              <ContentBox heading="Hub ID" content="Hub0001" />
              <ContentBox heading="Hub Name" content="Jayanagar" />
              <ContentBox heading="Delivery Date" content="02-05-2022" />
              <ContentBox heading="Delivery Slot " content="Slot 1" />
            </div>
          </div>
          <div
            className="route-plan-details-section-div route-plan-details-section-div-margintop"
            id="section2"
          >
            <p className="route-plan-details-Heading-Text">Map</p>

            <div className="route-plan-details-map-content-div">
              {map.map((item)=>(
                <AddressBox 
              number={item.number}
              type={item.type}
              id={item.id}
              name={item.name}
              address={item.address}
                />
              ))}
            </div>
          </div>
          <div
            className="route-plan-details-section-div route-plan-details-section-div-margintop"
            id="section3"
          >
            <div className="route-plan-details-Section-Employee-Role">
              <p className="route-plan-details-Heading-Text">Vehicle and Driver info</p>
              <img
                src={require("../../images/edit_pen.png")}
                className="route-plan-details_edit"
                onClick={()=>{setEdit(true)}}
              />
            </div>

            <div className="route-plan-details-content-div route-plan-details-content-first-div-margin-top ">
              <ContentBox heading="Vehicle Number" content="KA01-AD556" />
              <ContentBox heading="Driver Name" content="Mahesh Kumar" />
              <ContentBox heading="Driver Number" content="+919532 425 560" />
              <ContentBox />
            </div>
          </div>
        </div>
        <EditModal toggle={edit} setToggle={setEdit}/>
      </div>
      {/* </div> */}
    </>
  );
};

export default RoutePlanDetails;
