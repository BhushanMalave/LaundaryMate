import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import { Link } from "@mui/material";
import "./AddNewDeliveryVehicle.css";
import SelectLabel from "../../components/select_label.js/SelectLabel";
import DatePickerInput from "../../components/single_datepicker_input/DatePickerInput";

import { useState } from "react";
import { Toggle } from "../../components/toggle_button/ToggleButton";

const vehicleStatus = [
  { value: "Active", label: "Active" },
  { value: "Inactive", label: "Inactive" },
];

export default function AddNewDeliveryVehicle() {
  const [enable, setEnable] = useState(false);
  const [existing, setExisting] = useState(true);
  const [value, setValue] = useState("");
  const callback = (value) => {
    setValue(value);
    console.log("inside callback", value);
  };
  return (
    <div>
      <BreadCrumb title="Vehicle Details">
        <Link
          underline="none"
          color="#0074BC"
          href="/VehicleandDriverManagement"
          className="bread-crumb-link"
        >
          Vehicle and Driver Management
        </Link>
      </BreadCrumb>

      <div className="addnewvehicle-content-container">
        <div className="addnewvehicle-container-main">
          <div className="main-heading-addnewvehicle">
            <div className="main-heading-container-addnewvehicle">
              <p className="details-heading-addnewvehicle">
                Add New Pickup/Delivery Vehicle
              </p>

              <div>
                <img
                  src={require("../../images/CancelButtonShort.png")}
                  alt="ExportDisabledButton"
                  className="cancel-button-addnew-vehicle"
                />
                <img
                  src={require("../../images/AddVehicleButton.png")}
                  alt="AddNewVehicleButton"
                />
              </div>
            </div>
            <div className="linking-section-addnewvehicle">
              <a href="#vehicledetails" className="vehicle-details-addnew">
                Vehicle Details
              </a>
              <a href="#vendordetails" className="vendor-details-addnew">
                Vendor Details
              </a>
            </div>
            <div
              className="addnewvehicle-vehicledetails-container"
              id="vehicledetails"
            >
              <p className="addnewvehicle-vehicle-details-container-heading">
                Vehicle Details
              </p>
              <div className="addnewvehicle-selectlabel-component-container">
                <SelectLabel
                  options={vehicleStatus}
                  placeholder="Status of the vehicle"
                  getValue={callback}
                  styles={{
                    height: "58px",
                    width: "400px",
                  }}
                  containerStyles={{
                    height: "58px",
                    width: "400px",
                    marginTop: 20,
                  }}
                />
                <SelectLabel
                  options={vehicleStatus}
                  placeholder="Vehicle Type"
                  styles={{
                    height: "58px",
                    width: "400px",
                  }}
                  containerStyles={{
                    height: "58px",
                    width: "400px",
                    marginTop: 20,
                  }}
                />{" "}
                <SelectLabel
                  options={vehicleStatus}
                  placeholder="Vehicle Registeration Number/License"
                  styles={{
                    height: "58px",
                    width: "400px",
                  }}
                  containerStyles={{
                    height: "58px",
                    width: "400px",
                    marginTop: 20,
                  }}
                />
              </div>
              <div className="addnewvehicle-selectlabel-component-container">
                <div style={{ marginTop: 58 }}>
                  <DatePickerInput label="Date of Registration" type="date" />
                </div>
                <SelectLabel
                  options={vehicleStatus}
                  placeholder="Fuel Type"
                  styles={{
                    height: "58px",
                    width: "400px",
                  }}
                  containerStyles={{
                    height: "58px",
                    width: "400px",
                    marginTop: 56.5,
                  }}
                />
                <div style={{ marginTop: 58 }}>
                  <DatePickerInput label="Capacity(Weight)" type="text" />
                </div>
              </div>
              <div className="addnewvehicle-selectlabel-component-container">
                <div style={{ marginTop: 58 }}>
                  <DatePickerInput label="Capacity(Volume)" type="text" />
                </div>
                <SelectLabel
                  options={vehicleStatus}
                  placeholder="Hub ID"
                  styles={{
                    height: "58px",
                    width: "400px",
                  }}
                  containerStyles={{
                    height: "58px",
                    width: "400px",
                    marginTop: 56.5,
                  }}
                />
                <div style={{ marginTop: 58 }}>
                  <DatePickerInput label="Insurance Number" type="text" />
                </div>
              </div>
              <div className="addnewvehicle-selectlabel-component-container">
                <div style={{ marginTop: 58 }}>
                  <DatePickerInput label="Insurance Expiry Date" type="date" />
                </div>
                <div style={{ marginTop: 58 }}>
                  <DatePickerInput label="Fitness Expiry Date" type="date" />
                </div>
                <div style={{ marginTop: 58 }}>
                  <DatePickerInput label="VIN Number" type="text" />
                </div>
              </div>
              <div className="addnewvehicle-selectlabel-component-container">
                <SelectLabel
                  options={vehicleStatus}
                  placeholder="PUC Validity"
                  styles={{
                    height: "58px",
                    width: "400px",
                  }}
                  containerStyles={{
                    height: "58px",
                    width: "400px",
                  }}
                />
              </div>
            </div>
            <div
              className="addnewvehicle-vendor-details-container"
              id="vendordetails"
            >
              <p className="addnewvehicle-vehicle-details-container-heading">
                Vendor Details
              </p>
              <p className="vendor-outsourced-vehicle-text">
                Vendor Outsourced Vehicle?
              </p>

              <div className="addnewdeliveryvehicle-header-enable-div">
                <div
                  className={
                    enable
                      ? "addnewdeliveryvehicle-header-Inactive "
                      : "addnewdeliveryvehicle-header-enableText"
                  }
                >
                  No &nbsp; &nbsp;
                </div>
                <div className="addnewdeliveryvehicle-header-toggle-switch">
                  <Toggle
                    enable={enable}
                    setEnable={setEnable}
                    onClick={enable}
                  />
                </div>

                <div
                  className={
                    enable
                      ? "addnewdeliveryvehicle-header-enableText"
                      : "addnewdeliveryvehicle-header-Inactive "
                  }
                >
                  &nbsp; &nbsp; Yes
                </div>
              </div>
              {enable && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "250px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: "-30px",
                    }}
                  >
                    {existing ? (
                      <>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                          <div className="addnewdeliveryvehicle-unselected-div">
                            <div className="addnewdeliveryvehicle-unselected-divin" />
                          </div>
                          <div className="addnewdeliveryvehicle-unselected-div-text">
                            Existing Vendor
                          </div>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            marginLeft: "100px",
                          }}
                        >
                          <div
                            className="addnewdeliveryvehicle-selected-div"
                            onClick={() => {
                              setExisting(!existing);
                            }}
                          >
                            <div className="addnewdeliveryvehicle-selected-divin" />
                          </div>
                          <div className="addnewdeliveryvehicle-selected-div-text">
                            New Vendor
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                          <div
                            className="addnewdeliveryvehicle-selected-div"
                            onClick={() => {
                              setExisting(!existing);
                            }}
                          >
                            <div className="addnewdeliveryvehicle-selected-divin" />
                          </div>
                          <div className="addnewdeliveryvehicle-selected-div-text">
                            Existing Vendor
                          </div>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            marginLeft: "100px",
                          }}
                        >
                          <div className="addnewdeliveryvehicle-unselected-div">
                            <div className="addnewdeliveryvehicle-unselected-divin" />
                          </div>
                          <div className="addnewdeliveryvehicle-unselected-div-text">
                            New Vendor
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  {existing ? (
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <SelectLabel
                        options={vehicleStatus}
                        placeholder="Vendor Name"
                        styles={{
                          height: "58px",
                          width: "400px",
                        }}
                      />
                      <div style={{ marginLeft: "20px", marginTop: 51 }}>
                        <DatePickerInput
                          label="Vendor Contact Number"
                          type="text"
                        />
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <div style={{ marginTop: 58 }}>
                        <DatePickerInput label="Vendor Name" type="text" />
                      </div>
                      <div style={{ marginLeft: "20px", marginTop: 58 }}>
                        <DatePickerInput
                          label="Vendor Contact Number"
                          type="text"
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="vendor-details-section"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
