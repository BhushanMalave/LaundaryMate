import { margin } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BreadCrumb from "../../../components/breadcrumb/BreadCrumb";
import SelectLabel from "../../../components/select_label.js/SelectLabel";
import DatePickerInput from "../../../components/single_datepicker_input/DatePickerInput";
import "./AddItem.css";
const AddItem = () => {
  const navigate = useNavigate();
  const servicestatus = [
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
  ];
  const packages = [
    { value: "Multipack", label: "Multipack" },
    { value: "Single Pack", label: "Single Pack" },
    { value: "Hanger", label: "Hanger" },
  ];
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);


  const [value, setValue] = useState("");
  const callback = (value) => {
    setValue(value);
    console.log("inside callback", value);
  };

  return (
    <div className="maincontainer_caditem">
      <BreadCrumb title="AddItem" />
      <div className="container_caditem">
        <div className="headercontainer_caditem">
          <span className="headertext_caditem">Add Item</span>
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
            <div>
              <div className="details-dropdown-caditem">
                <div>
                  <SelectLabel
                    placeholder="Select Default Packaging"
                    options={packages}
                    getValue={callback}
                    styles={{
                      height: "54px",
                      width: "400px",
                      border: "none",
                      fontSize: "13px",
                    }}
                    containerStyles={{
                      height: "54px",
                      width: "198px",
                      marginTop: "0px",
                      backgroundColor: "none",
                      // margin:'0 80px'
                    }}
                  />
                </div>
                <div className="details-dropdown-value-caditem">
                  <span className="details-dropdown-text-caditem">₹ 00.00</span>
                </div>
              </div>
              {value === "Multipack" ? (
                <>
                
                  <div className={checked1?"checkbox-container-caditem":"checkbox-container-caditem-unselected"}>
                    <div className="checkbox-field-caditem">
                      <label className="checkbox-label-caditem">
                        <input
                          type={"checkbox"}
                          checked={checked1}
                          onChange={() => {
                            setChecked1(!checked1);
                          }}
                          className={
                            checked1 ? "checked-caditem" : ""
                          }
                        />
                        Single Pack
                      </label>
                    </div>
                    <div className="rupee-con-caditem">
                      <span className="rupee-caditem">₹08.00</span>
                    </div>
                  </div>

                  <div className={checked2?"checkbox-container-caditem":"checkbox-container-caditem-unselected"}>
                    <div className="checkbox-field-caditem">
                      <label className="checkbox-label-caditem">
                        <input
                          type={"checkbox"}
                          checked={checked2}
                          onChange={() => {
                            setChecked2(!checked2);
                          }}
                          className={
                            checked2 ? "checked-caditem" : ""
                          }
                        />
                        Hanger
                      </label>
                    </div>
                    <div className="rupee-con-caditem">
                      <span className="rupee-caditem">₹10.00</span>
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}

              {value === "Single Pack" ? (
                <>
                  <div className={checked1?"checkbox-container-caditem":"checkbox-container-caditem-unselected"}>
                    <div className="checkbox-field-caditem">
                      <label className="checkbox-label-caditem">
                        <input
                          type={"checkbox"}
                          checked={checked1}
                          onChange={() => {
                            setChecked1(!checked1);
                          }}
                          className={
                            checked1 ? "checked-caditem" : ""
                          }
                        />
                        Single Pack
                      </label>
                    </div>
                    <div className="rupee-con-caditem">
                      <span className="rupee-caditem">₹08.00</span>
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}

              {value === "Hanger" ? (
                <>
                  <div className={checked1?"checkbox-container-caditem":"checkbox-container-caditem-unselected"}>
                    <div className="checkbox-field-caditem">
                      <label className="checkbox-label-caditem">
                        <input
                          type={"checkbox"}
                          checked={checked1}
                          onChange={() => {
                            setChecked1(!checked1);
                          }}
                          className={
                            checked1 ? "checked-caditem" : ""
                          }
                        />
                        Hanger
                      </label>
                    </div>
                    <div className="rupee-con-caditem">
                      <span className="rupee-caditem">₹10.00</span>
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
            <div>
              <div className="checkbox-container-caditem">
                <div className="checkbox-field-caditem">
                  <label className="checkbox-label-caditem">
                    <input
                      type={"checkbox"}
                      checked={checked}
                      onChange={() => {
                        setChecked(!checked);
                      }}
                      className={checked ? "checked-caditem" : ""}
                    />
                    Starch
                  </label>
                </div>
                <div className="rupee-con-caditem">
                  <span className="rupee-caditem">₹08.00</span>
                </div>
              </div>
              <div className={checked3?"checkbox-container-caditem":"checkbox-container-caditem-unselected"}>
                <div className="checkbox-field-caditem">
                  <label className="checkbox-label-caditem">
                    <input
                      type={"checkbox"}
                      checked={checked3}
                      onChange={() => {
                        setChecked3(!checked3);
                      }}
                      className={checked3 ? "checked-caditem" : ""}
                    />
                    No Starch
                  </label>
                </div>
                <div className="rupee-con-caditem">
                  <span className="rupee-caditem">₹00.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
