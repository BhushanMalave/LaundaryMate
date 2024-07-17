import { margin } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BreadCrumb from "../../../components/breadcrumb/BreadCrumb";
import SelectLabel from "../../../components/select_label.js/SelectLabel";
import DatePickerInput from "../../../components/single_datepicker_input/DatePickerInput";
import "./AddAddones.css";
export const AddAddones = () => {
  const navigate = useNavigate();
  const servicestatus = [
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
  ];


  return (
    <div className="maincontainer_cadadon">
      <BreadCrumb title="AddAddOns" />
      <div className="container_cadadon">
        <div className="headercontainer_cadadon">
          <span className="headertext_caditem">Add-On Details</span>
          <div>
            <img src={require("../../../images/cancelOutline.png")}></img>
            <img
              src={require("../../../images/save.png")}
              style={{ marginLeft: "30px" }}
              onClick={() => {
                navigate("/CatalogueManagement");
              }}
            ></img>
          </div>
        </div>
        <div className="linking-section-cadadon">
          <a className="details-cadadon" href="#section1">
            Details
          </a>

          <a className="add-cadadon" href="#section2">
            Add-One Info
          </a>
        </div>

        <div className="details-container-cadadon" id="section1">
          <span className="detailstext-cadadon">Details</span>
          <div className="details-content-cadadon">
            <div className="details-content-cadadon1">
              <div style={{marginBottom:'40px'}}>
                <SelectLabel
                  placeholder="Status"
                  options={servicestatus}
                  styles={{
                    height: "58px",
                    width: "400px",
                  }}
                  containerStyles={{
                    height: "58px",
                    width: "400px",
                    marginTop: "-1px",
                    // margin:'0 80px'
                  }}
                />
              </div>
              <div style={{justifyContent:'space-between',display:'flex',marginBottom:'20px'}}>
              <SelectLabel
                placeholder="Add-On Type"
                options={servicestatus}
                styles={{
                  height: "58px",
                  width: "400px",
                }}
                containerStyles={{
                  height: "58px",
                  width: "400px",
                  marginTop: "-1px",
                  // margin:'0 80px'
                }}
              />
              <DatePickerInput type="text" label="Add-On Name" />
              <DatePickerInput type="text" label="Add-On Price" />
              </div>
            </div>
            <div className="details-content-cadadon2">
                <div>
                <span className="image-header-cadadon">Add-On image / Icon</span>
              <DatePickerInput type="text" label="Item Code" />
                </div>
              <DatePickerInput type="text" label="Enter SGST%" />
              <DatePickerInput type="text" label="Enter CGST%" />
            </div>
          </div>
        </div>

        <div className="details-container-cadadon1" id="section2">
          <span className="detailstext-caditem">Add-On Info</span>

          <div className="details-content-cadadon3">
            <DatePickerInput type="text" label="Title" style={{width:'100%',borderRadius:'8px'}} />
            <DatePickerInput type="text" label="Description" style={{width:'100%',borderRadius:'8px',margin:'40px 0 50px 0'}}/>
            {/* <textarea
                type="text"
                name="reason"
                maxLength={80}
                placeholder='Description'
                onChange={(e) => {
                  // console.log(e.target.value);
                  // setreasonlength(e.target.value.length);
                }}
                style={{
                  height: "70px",
                  width: "360px",
                  marginTop: "2px",
                  marginLeft: "-20px",
                  borderWidth: 1,
                  fontFamily: "Bold",
                  fontStyle: "normal",
                  fontSize: "16px",
                  lineHeight: "25px",
                  letterSpacing: "1px",
                  color: "#181818",
                  // outline: "none",
                }}
              /> */}
             <textarea placeholder="text"></textarea>
            <div>
            <span className="video-header-cadadon">Video</span>
            <DatePickerInput type="text" label="Video" style={{width:'100%',borderRadius:'8px'}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
