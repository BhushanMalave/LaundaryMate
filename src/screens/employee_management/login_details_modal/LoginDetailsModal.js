import React from "react";
import SearchButton from "../../../components/search_button/SearchButton";
import "./LoginDetailsModal.css";

import { loginDetailsData } from "../EmployeeManagmentData";
import DatePickerInput from "../../../components/single_datepicker_input/DatePickerInput";
const LoginDetails = ({ toggle, setToggle }) => {
  const divStyle = {
    display: toggle ? "block" : "none",
  };
  function closeModal(e) {
    e.stopPropagation();
    setToggle(false);
  }
  return (
    <div
      className="employee-login-details-modal-main-container"
      style={divStyle}
      onClick={closeModal}
    >
      <div
        className="employee-login-details-modal-content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="employee-login-detials-modal-header">
          <p className="employee-login-details-modal-header-text">
            Login Details -{" "}
            <span className="employee-login-details-modal-text-transform">
              lm01262
            </span>
          </p>
          <div
            className="employee-login-details-modal-close-button-div"
            onClick={closeModal}
          >
            <img
              className="employee-login-details-modal-close-button"
              src={require("../../../images/close.png")}
              alt=""
            />
          </div>
        </div>

        <div className="employee-login-details-modal-search-header">
          <DatePickerInput
            type={"date"}
            label={"From Date"}
            style={{ width: "145px", borderRadius:"8px" ,height:"44px" }}
          />
           <DatePickerInput
            type={"date"}
            label={"To Date"}
            style={{ width: "145px", borderRadius:"8px" ,height:"44px" }}
          />
          <SearchButton text={"Search"} />
        </div>

        <div className="employee-login-details-modal-table-content">
          <table className="employee-login-details-modal-table-container">
            <thead className="employee-login-details-modal-table-head-main">
              <tr className="employee-login-details-modal-table-row">
                <th className="employee-login-details-modal-table-head1">
                  Date
                </th>
                <th className="employee-login-details-modal-table-head2">
                  Login
                </th>
                <th className="employee-login-details-modal-table-head3">
                  Logout
                </th>
              </tr>
            </thead>
            <tbody className="employee-login-details-modal-table-body">
              {loginDetailsData ? (
                <>
                  {loginDetailsData.map((item) => (
                    <tr
                      className="employee-login-details-modal-table-content-row"
                      key={item}
                    >
                      <td className="employee-login-details-modal-table-content-date">
                        {item.date}
                      </td>
                      <td>{item.loginTime}</td>
                      <td>{item.logoutTime}</td>
                    </tr>
                  ))}
                </>
              ) : (
                <>
                  <p style={{ textAlign: "center" }}>
                    No Login Details Available
                  </p>
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LoginDetails;
