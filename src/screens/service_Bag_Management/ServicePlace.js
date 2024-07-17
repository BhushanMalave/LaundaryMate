import React, { useState } from "react";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import SearchButton from "../../components/search_button/SearchButton";
import SearchInput from "../../components/search_input/SearchInput";
import "../service_Bag_Management/ServiceTable";
import Example from "./ServiceTable";
import "./ServicePlace.css";
import ServiceTable from "../service_Bag_Management/ServiceTable";
import { SelectDropDown } from "../../components/select_drop_down/SelectDropDown";
import { Link, useNavigate } from "react-router-dom";
import ServiceTablePlace from "../service_Bag_Management/ServiceTablePlace";
import { DialogModal } from "./dialogModal/DialogModal";

const ServicePlace = () => {
  const navigate = useNavigate();
  const [click,setClicked]=useState(false)
 
  const obj = [
    {
      Service:'Wash + Fold',
      Bags: "100",
     

    },
    {
      Service:'Wash + Iron',
      Bags: "100",
    
   
    },
    {
      Service:'SteamIron',
      Bags: "100",
    
    
    },
    {
      Service:'DryClean + Iron',
      Bags: "100",
  
    
    },
   
  ];
  const options = [
    {
      label: "All Services",
      value: "all selects",
    },
    {
      label: "Wash + Fold",
      value: "wash+fold",
    },
    {
      label: "Wash + Iron",
      value: "wash+iron",
    },
    {
      label: "Steam Iron",
      value: "steamIron",
    },
    {
      label: "DryClean + Iron",
      value: "dryclean+iron",
    },
  ];
  const [select, setSelect] = useState({
    value: options[0].value,
    label: options[0].label,
  });
  const [selectView, setSelectView] = useState(false);

  
  return (
    <div className="mainContainer_serplace"
    onClick={(e) => {
      e.stopPropagation();
      setSelectView(false);
    }}
    >
      <BreadCrumb title="Service Place">
        <Link
          underline="none"
          to="/ServiceBagManagement"
          color="#0074BC"
          // href="/ServiceBagManagement"
          className="bread-crumb-link"
        >
          Service Bag Management
        </Link>
      </BreadCrumb>
      <div className="Container_serplace">
        <div className="innerheader_serplace">
          <div style={{width:'20%'}}>

          <img
            src={require("../../images/backArrow.png")}
            onClick={() => {
              navigate("/ServiceBagManagement");
            }}
          ></img>
          <span className="headerText_serplace">HB001-Jayanagar</span>
          </div>
          <img src={require('../../images/upload.png')} onClick={()=>{setClicked(true)}}></img>
        </div>
        <div className="searchComponents_serplace">
          <SelectDropDown
            select={select}
            setSelect={setSelect}
            options={options}
            view={selectView}
              setView={setSelectView}
            style={{ width: "140px" }}
          />
          <SearchButton text='Search'/>
        </div>
        <DialogModal click={click} setClicked={setClicked} />
        <ServiceTablePlace data={obj} rowsPerPage={4}/>
      </div>
    </div>
  );
};

export default ServicePlace;
