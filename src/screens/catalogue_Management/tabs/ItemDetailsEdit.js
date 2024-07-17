import { margin } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BreadCrumb from "../../../components/breadcrumb/BreadCrumb";
import SelectLabel from "../../../components/select_label.js/SelectLabel";
import DatePickerInput from "../../../components/single_datepicker_input/DatePickerInput";
import "./ItemDetailsEdit";
 export const ItemDetailsEdit= () => {
  const navigate=useNavigate()
  const servicestatus = [
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
  ];
  const [checked, setChecked] = useState(false);

  return (
    <div className="maincontainer_caditem">
      <BreadCrumb title="EditItem" />
      <div className="container_caditem">
        <div className="headercontainer_caditem">
          <span className="headertext_caditem">Edit Item</span>
          <div>
            <img src={require("../../../images/cancelOutline.png")}
            onClick={()=>{navigate('/ItemDetails')}}></img>
            <img
              src={require("../../../images/Update.png")}
              style={{ marginLeft: "30px" }}
              onClick={()=>{navigate('/ItemDetails')}}
            ></img>
          </div>
        </div>
        <div className="linking-section-caditem">
          <a className="details-caditem" href="#section1">
            Details
          </a>
          <a className="price-caditem" href="#section2">
            Price Details
          </a>
          <a className="add-caditem" href="#section3">
            Add-Ones
          </a>
        </div>

        <div className="details-container-caditem" id="section1">
          <span className="detailstext-caditem">Details</span>
          <div className="details-content-caditem">
            <div className="details-content-caditem1">
              <DatePickerInput type="text" label="Item Name" />
              <SelectLabel
                placeholder="Service"
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
              <SelectLabel
                placeholder="Category"
                options={servicestatus}
                styles={{
                  height: "58px",
                  width: "400px",
                }}
                containerStyles={{
                  height: "58px",
                  width: "400px",
                  marginTop: "-1px",
                  // marginRight:'100px'
                }}
              />
            </div>
            <div className="details-content-caditem2">
              <DatePickerInput type="text" label="Item Code" />
              <DatePickerInput type="text" label="HSN Name" />
            </div>
          </div>
        </div>

        <div className="details-container-caditem" id="section2">
          <span className="detailstext-caditem">Price Details</span>
          <div className="details-content-caditem">
            <div className="details-content-caditem1">
              <DatePickerInput type="text" label="Item Price(INR)" />
              <DatePickerInput type="text" label="Item Weight(kg's)" />
              <DatePickerInput
                type="text"
                label="Water Consumption per wash (Litres)e"
              />
            </div>
            <div className="details-content-caditem3">
              <span className="imagetext-caditem">Image item or icon</span>
              <DatePickerInput type="text" label="" />
            </div>
          </div>
        </div>

        <div className="details-container-caditem1" id="section3">
          <span className="detailstext-caditem">Add-On</span>

          <div className="details-content-caditem2">
            <SelectLabel
              placeholder="Service"
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

            <div className="checkbox-container-caditem">
              <div className="checkbox-field-caditem">
                <label className="employee-management-checkbox-label">
                  <input
                    type={"checkbox"}
                    checked={checked}
                    onChange={() => {
                      setChecked(!checked);
                    }}
                    className={checked ? "employee-management-checked" : ""}
                  />
                  Starch
                </label>
              </div>
              <div className="rupee-con-caditem">
                <span className="rupee-caditem">₹08.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


