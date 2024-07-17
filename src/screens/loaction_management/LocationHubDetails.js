import React, { useState } from "react";
import "../loaction_management/LocationCountryDetails.css";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import back from "../../images/back.png";
import Table1 from "../../components/location_management_table/Table1";
import { data1, data2 } from "../../utils/Functions";
import Table3 from "../../components/location_management_table/Table3";
import { Link } from "@mui/material";
import SelectLabel from "../../components/select_label.js/SelectLabel";
import DatePickerInput from "../../components/single_datepicker_input/DatePickerInput";
import { AiFillEdit } from "react-icons/ai";
import { AddButton } from "../../components/buttons/Button";

function LocationHubDetails({ crumbHeading, setModal7 }) {
  const [link1, setLink1] = useState(true);
  const [link2, setLink2] = useState(false);
  const [link3, setLink3] = useState(false);
  const [link4, setLink4] = useState(false);
  const [edit, setEdit] = useState(false);
  const [edit2, setEdit2] = useState(false);
  const [edit3, setEdit3] = useState(false);
  const [edit4, setEdit4] = useState(false);
  const [edit5, setEdit5] = useState(false);
  const options = [
    {
      label: "Status",
      value: "status",
    },
    {
      label: "Active",
      value: "active",
    },
    {
      label: "Disabled",
      value: "disabled",
    },
  ];
  const [select, setSelect] = useState({
    value: options[0].value,
    label: options[0].label,
  });
  return (
    <div className="locationCountyCon">
      <BreadCrumb title={`${crumbHeading}`}>
        <Link
          underline="none"
          color="#0074BC"
          href="/LocationManagement"
          className="bread-crumb-link"
        >
          Location Management
        </Link>
      </BreadCrumb>
      <div className="locationCountyHeader">
        <img
          onClick={() => {
            setModal7(false);
            console.log("hello");
          }}
          className="locationCountyHeadImg"
          src={back}
          alt="backBtn"
        />
        <p className="locationCountyHeadText">{crumbHeading}</p>
      </div>
      <div className="locationCountyLink">
        <ul className="locationCountyLinkContent">
          <li className="locationCountyLinkEle">
            <a
              onClick={() => {
                setLink1(true);
                setLink2(false);
                setLink3(false);
                setLink4(false);
              }}
              style={{
                color: link1 ? "#0074BC" : "black",
                borderBottom: link1 ? "3px solid #0074BC" : "none",
              }}
              className="locationCountyAnchor"
              href="#con1"
            >
              Hub Details
            </a>
          </li>
          <li className="locationCountyLinkEle">
            <a
              onClick={() => {
                setLink1(false);
                setLink2(true);
                setLink3(false);
                setLink4(false);
              }}
              style={{
                color: link2 ? "#0074BC" : "black",
                borderBottom: link2 ? "3px solid #0074BC" : "none",
              }}
              className="locationCountyAnchor"
              href="#con2"
            >
              Map to CPU
            </a>
          </li>
          <li className="locationCountyLinkEle">
            <a
              onClick={() => {
                setLink1(false);
                setLink2(false);
                setLink3(true);
                setLink4(false);
              }}
              style={{
                color: link3 ? "#0074BC" : "black",
                borderBottom: link3 ? "3px solid #0074BC" : "none",
              }}
              className="locationCountyAnchor"
              href="#con3"
            >
              Location Details
            </a>
          </li>
          <li className="locationCountyLinkEle">
            <a
              onClick={() => {
                setLink1(false);
                setLink2(false);
                setLink3(false);
                setLink4(true);
              }}
              style={{
                color: link4 ? "#0074BC" : "black",
                borderBottom: link4 ? "3px solid #0074BC" : "none",
              }}
              className="locationCountyAnchor"
              href="#con4"
            >
              Slot Details
            </a>
          </li>
        </ul>
      </div>
      <div className="locationCountyContent">
        <div id="con1" className="locationCountyStateContent1">
          <div className="locationCountyCountryHeadDiv">
            <p className="locationCountyCountryContentHead">Hub Details</p>
          </div>
          {!edit && !edit2 && !edit3 && !edit4 && !edit5 && (
            <img
              onClick={() => setEdit(!edit)}
              src={require("../../images/edit.png")}
              className="edit-image"
            />
          )}
          {(edit2 || edit3 || edit4 || edit5) && (
            <AiFillEdit
              color="#7C7B7B"
              style={{
                position: "absolute",
                right: "20px",
                top: "20px",
                height: "30px",
                width: "30px",
                opacity: 0.3,
              }}
            />
          )}

          <div className="locationCpuContentValue">
            <div className="locationCpuContent1">
              {!edit ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "20px",
                    marginTop: "40px",
                    width: "40%",
                  }}
                >
                  <p className="countyText1">Hub ID</p>
                  <p className="countyText2">CPU0001</p>
                </div>
              ) : (
                <div
                  style={{
                    marginLeft: "20px",
                    width: "400px",
                    marginTop: "20px",
                  }}
                >
                  <DatePickerInput
                    disabled={"disabled"}
                    type="text"
                    label="Hub ID"
                    style={{ backgroundColor: "#F8F8F8" }}
                  />
                </div>
              )}
              {!edit ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "40px",
                  }}
                >
                  <p className="countyText1">Status</p>
                  <p style={{ color: "#4DA63E" }} className="countyText2">
                    Active
                  </p>
                </div>
              ) : (
                <div
                  style={{
                    marginLeft: "20px",
                    width: "400px",
                    marginTop: "-33px",
                  }}
                >
                  <SelectLabel
                    placeholder="Status"
                    options={options}
                    styles={{ height: "60px", backgroundColor: "#F8F8F8" }}
                    styles1={{ backgroundColor: "#F8F8F8" }}
                  />
                </div>
              )}
            </div>
            <div className="locationCpuContent1">
              {!edit ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "20px",
                    width: "40%",
                    marginTop: "40px",
                  }}
                >
                  <p className="countyText1">Hub Name</p>
                  <p className="countyText2">Daballapura</p>
                </div>
              ) : (
                <div
                  style={{
                    marginLeft: "20px",
                    width: "400px",
                    marginTop: "20px",
                  }}
                >
                  <DatePickerInput
                    type="text"
                    label="Enter Hub Name"
                    style={{ backgroundColor: "#F8F8F8" }}
                  />
                </div>
              )}
              {!edit ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "40px",
                  }}
                >
                  <p className="countyText1">Hub Short Name</p>
                  <p className="countyText2">CPUDBP</p>
                </div>
              ) : (
                <div
                  style={{
                    marginLeft: "20px",
                    width: "400px",
                    marginTop: "20px",
                  }}
                >
                  <DatePickerInput
                    type="text"
                    label="Enter Hub Short Name"
                    style={{ backgroundColor: "#F8F8F8" }}
                  />
                </div>
              )}
            </div>

            <div className="locationCpuContent1">
              {!edit ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "20px",
                    width: "40%",
                    marginTop: "40px",
                  }}
                >
                  <p className="countyText1">Hub Address</p>
                  <p className="countyText2">
                    No 623,NO 4,Old622,10th C Main Rd
                  </p>
                </div>
              ) : (
                <div
                  style={{
                    marginLeft: "20px",
                    width: "400px",
                    marginTop: "20px",
                  }}
                >
                  <DatePickerInput
                    type="text"
                    label="Enter Hub Address Line 1"
                    style={{ backgroundColor: "#F8F8F8" }}
                  />
                </div>
              )}
              {!edit ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "40px",
                    width: "40%",
                  }}
                >
                  <p className="countyText1">Hub Location</p>
                  <p className="countyText2">CTR0001</p>
                </div>
              ) : (
                <div
                  style={{
                    marginLeft: "20px",
                    width: "400px",
                    marginTop: "20px",
                  }}
                >
                  <DatePickerInput
                    type="text"
                    label="Enter Hub Location"
                    style={{ backgroundColor: "#F8F8F8" }}
                  />
                </div>
              )}
              {!edit ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "40px",
                  }}
                >
                  <p className="countyText1">Hub Pincode</p>
                  <p className="countyText2">CTR0001</p>
                </div>
              ) : (
                <div
                  style={{
                    marginLeft: "20px",
                    width: "400px",
                    marginTop: "20px",
                  }}
                >
                  <DatePickerInput
                    type="text"
                    label="Enter Hub PinCode"
                    style={{ backgroundColor: "#F8F8F8" }}
                  />
                </div>
              )}
            </div>
            {!edit ? (
              <div className="locationCpuContent1">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "20px",
                    width: "40%",
                    marginTop: "40px",
                  }}
                >
                  <p className="countyText1">Created By</p>
                  <p className="countyText2">CTR0001</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "40px",
                  }}
                >
                  <p className="countyText1">Created On</p>
                  <p className="countyText2">CTR0001</p>
                </div>
              </div>
            ) : (
              <div className="edit-location-button-container">
                <p
                  onClick={() => setEdit(false)}
                  className="edit-location-cancel-text"
                >
                  Cancel
                </p>
                <AddButton
                  text={"Update Hub Details"}
                  style={{ margin: "30px 50px 0px 30px" }}
                />
              </div>
            )}
          </div>
        </div>
        {/*  */}

        <div id="con1" className="locationCountyGstContent">
          {!edit && !edit2 && !edit3 && !edit4 && !edit5 && (
            <img
              onClick={() => setEdit2(!edit2)}
              src={require("../../images/edit.png")}
              className="edit-image"
            />
          )}
          {(edit || edit3 || edit4 || edit5) && (
            <AiFillEdit
              color="#7C7B7B"
              style={{
                position: "absolute",
                right: "20px",
                top: "20px",
                height: "30px",
                width: "30px",
                opacity: 0.3,
              }}
            />
          )}
          <div className="locationCountyCountryHeadDiv">
            <p className="locationCountyCountryContentHead">Map to CPU</p>
          </div>
          {!edit2 ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "20px",
                marginTop: "40px",
                width: "40%",
              }}
            >
              <p className="countyText1">Processing Center</p>
              <p className="countyText2">CTR0001</p>
            </div>
          ) : (
            <div
              style={{
                marginLeft: "20px",
                width: "400px",
                marginTop: "20px",
              }}
            >
              <DatePickerInput
                type="text"
                label="Enter Processing Center"
                style={{ backgroundColor: "#F8F8F8" }}
              />
            </div>
          )}

          <div className="locationCountyGstContentValue1">
            {!edit2 ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "20px",
                  marginTop: "40px",
                  width: "40%",
                }}
              >
                <p className="countyText1">Country</p>
                <p className="countyText2">CTR0001</p>
              </div>
            ) : (
              <div
                style={{
                  marginLeft: "20px",
                  width: "400px",
                  marginTop: "20px",
                }}
              >
                <DatePickerInput
                  disabled={"disabled"}
                  type="text"
                  label="Country"
                  style={{ backgroundColor: "#F8F8F8" }}
                />
              </div>
            )}
            {!edit2 ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "20px",
                  marginTop: "40px",
                  width: "40%",
                }}
              >
                <p className="countyText1">State</p>
                <p className="countyText2">CTR0001</p>
              </div>
            ) : (
              <div
                style={{
                  marginLeft: "20px",
                  width: "400px",
                  marginTop: "20px",
                }}
              >
                <DatePickerInput
                  disabled={"disabled"}
                  type="text"
                  label="State"
                  style={{ backgroundColor: "#F8F8F8" }}
                />
              </div>
            )}
            {!edit2 ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "20px",
                  marginTop: "40px",
                  width: "40%",
                }}
              >
                <p className="countyText1">City</p>
                <p className="countyText2">CTR0001</p>
              </div>
            ) : (
              <div
                style={{
                  marginLeft: "20px",
                  width: "400px",
                  marginTop: "20px",
                }}
              >
                <DatePickerInput
                  disabled={"disabled"}
                  type="text"
                  label="City"
                  style={{ backgroundColor: "#F8F8F8" }}
                />
              </div>
            )}
          </div>
          {edit2 ? (
            <div className="edit-location-button-container">
              <p
                onClick={() => setEdit2(false)}
                className="edit-location-cancel-text"
              >
                Cancel
              </p>
              <AddButton
                text={"Update Map to CPU"}
                style={{ margin: "30px 50px 0px 30px" }}
              />
            </div>
          ) : null}
        </div>
        <div id="con2" className="locationCountyGstContent">
          {!edit && !edit2 && !edit3 && !edit4 && !edit5 && (
            <img
              onClick={() => setEdit3(!edit3)}
              src={require("../../images/edit.png")}
              className="edit-image"
            />
          )}
          {(edit || edit2 || edit4 || edit5) && (
            <AiFillEdit
              color="#7C7B7B"
              style={{
                position: "absolute",
                right: "20px",
                top: "20px",
                height: "30px",
                width: "30px",
                opacity: 0.3,
              }}
            />
          )}
          <div className="locationCountyCountryHeadDiv">
            <p className="locationCountyCountryContentHead">Set Location</p>
          </div>
          <div className="locationCountyGstContentValue1">
            {!edit3 ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "20px",
                  marginTop: "40px",
                  width: "40%",
                }}
              >
                <p className="countyText1">Latitude</p>
                <p className="countyText2">CTR0001</p>
              </div>
            ) : (
              <div
                style={{
                  marginLeft: "20px",
                  width: "400px",
                  marginTop: "20px",
                }}
              >
                <DatePickerInput
                  type="text"
                  label="Latitude"
                  style={{ backgroundColor: "#F8F8F8" }}
                />
              </div>
            )}
            {!edit3 ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "20px",
                  marginTop: "40px",
                  width: "40%",
                }}
              >
                <p className="countyText1">Longitide</p>
                <p className="countyText2">CTR0001</p>
              </div>
            ) : (
              <div
                style={{
                  marginLeft: "20px",
                  width: "400px",
                  marginTop: "20px",
                }}
              >
                <DatePickerInput
                  type="text"
                  label="Longitide"
                  style={{ backgroundColor: "#F8F8F8" }}
                />
              </div>
            )}
          </div>
          {edit3 ? (
            <div className="edit-location-button-container">
              <p
                onClick={() => setEdit3(false)}
                className="edit-location-cancel-text"
              >
                Cancel
              </p>
              <AddButton
                text={"Update Set Location"}
                style={{ margin: "30px 50px 0px 30px" }}
              />
            </div>
          ) : null}
        </div>

        <div id="con3" className="locationCountyStateContent">
          <div className="locationCountyCountryHeadDiv1">
            <p className="locationCountyCountryContentHead">Slot Details</p>
          </div>
          <p className="locationCountyStateLength">2 Slot</p>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Table1
              tableHeader={[`Slot Name`, "Slot Duration", "Availability"]}
              data={data1}
              rowsPerPage={3}
            />
          </div>
        </div>
        <div id="con4" className="locationCountyGstContent">
          {!edit && !edit2 && !edit3 && !edit4 && !edit5 && (
            <img
              onClick={() => setEdit5(!edit5)}
              src={require("../../images/edit.png")}
              className="edit-image"
            />
          )}
          {(edit || edit2 || edit4 || edit3) && (
            <AiFillEdit
              color="#7C7B7B"
              style={{
                position: "absolute",
                right: "20px",
                top: "20px",
                height: "30px",
                width: "30px",
                opacity: 0.3,
              }}
            />
          )}
          <div className="locationCountyCountryHeadDiv">
            <p className="locationCountyCountryContentHead">
              Interhub Vehicle Details
            </p>
          </div>
          <div className="locationCountyGstContentValue1">
            {!edit5 ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "20px",
                  marginTop: "40px",
                  width: "40%",
                }}
              >
                <p className="countyText1">Vehcicle Number</p>
                <p className="countyText2">CTR0001</p>
              </div>
            ) : (
              <div
                style={{
                  marginLeft: "20px",
                  width: "400px",
                  marginTop: "20px",
                }}
              >
                <DatePickerInput
                  type="text"
                  label="Enter Vehcicle Number"
                  style={{ backgroundColor: "#F8F8F8" }}
                />
              </div>
            )}
          </div>
          {edit5 ? (
            <div className="edit-location-button-container">
              <p
                onClick={() => setEdit5(false)}
                className="edit-location-cancel-text"
              >
                Cancel
              </p>
              <AddButton
                text={"Update Interhub Vehicle Details"}
                style={{ margin: "30px 50px 0px 30px" }}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default LocationHubDetails;
