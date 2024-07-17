import "./MainScreen.css";
import React from "react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import ResetPassword from "../ResetPassword/ResetPassword";
import AnimationImg from "../../components/Animation_images/AnimationImg";
import logo from "../../images/logo.png";
import ResetDisable from "../../images/ResetDisable.png";
import ResetEnable from "../../images/ResetEnable.png";
import Greentick from "../../images/GreenTick.png";
import i_green from "../../images/i_green.png";
import i_grey from "../../images/i_grey.png";
import i_red from "../../images/i_red.png";
import cross_red from "../../images/cross_red.png";
import cross_grey from "../../images/cross_grey.png";
import goToLoginBtn from "../../images/GoToLoginBtn.png";
// import LoginImageDisable from "../../images/LoginImageDisable.png";
import InputField from "../../components/InputFields/InputField";
import { Formik, Field } from "formik";
import * as yup from "yup";

const passwordValidationSchema = yup.object().shape({
  password: yup.string().required("Password is required"),
  confirmpassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

function MainScreen() {
  const [dropdownstate, setDropdownstate] = useState(false);
  const [dropdownhubstate, setDropdownhubstate] = useState(false);
  const [resetPasswordState, setResetPasswordState] = useState(false);
  const [text, setText] = useState("");
  const [reset, setReset] = useState(false);
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(false);
  const [style, setStyle] = useState({});
  const [styleImg, setImg] = useState(cross_grey);
  const [styleImg1, setImg1] = useState(i_grey);
  const [styleImg2, setImg2] = useState(i_grey);
  const [styleImg3, setImg3] = useState(i_grey);
  const [styleImg4, setImg4] = useState(i_grey);
  const [styleImg5, setImg5] = useState(i_grey);
  const [number, setNumber] = useState({});
  const [low, setLow] = useState({});
  const [high, setHigh] = useState({});
  const [special, setSpecial] = useState({});

  const handlePasswordChange = (text) => {
    const newPassword = text;
    setPassword(newPassword);
    const hasValidLength = newPassword.length >= 8;
    const hasNumber = /\d/.test(newPassword);
    const hasSpecialChar = /[!@#$%^&*]/.test(newPassword);
    const hasUpperCase = /[A-Z]/.test(newPassword);
    const hasLowerCase = /[a-z]/.test(newPassword);
    setValid(
      hasValidLength &&
        hasNumber &&
        hasSpecialChar &&
        hasUpperCase &&
        hasLowerCase
    );
    setImg(
      hasValidLength &&
        hasNumber &&
        hasSpecialChar &&
        hasUpperCase &&
        hasLowerCase
        ? Greentick
        : text !== ""
        ? cross_red
        : cross_grey
    );
    setStyle({
      color: hasValidLength ? "green" : text !== "" ? "red" : "grey",
    });
    setImg1(hasValidLength ? i_green : text !== "" ? i_red : i_grey);
    setNumber({
      color: hasNumber ? "green" : text !== "" ? "red" : "grey",
    });
    setImg2(hasNumber ? i_green : text !== "" ? i_red : i_grey);
    setHigh({
      color: hasUpperCase ? "green" : text !== "" ? "red" : "grey",
    });
    setImg3(hasUpperCase ? i_green : text !== "" ? i_red : i_grey);
    setLow({
      color: hasLowerCase ? "green" : text !== "" ? "red" : "grey",
    });
    setImg4(hasLowerCase ? i_green : text !== "" ? i_red : i_grey);
    setSpecial({
      color: hasSpecialChar ? "green" : text !== "" ? "red" : "grey",
    });
    setImg5(hasSpecialChar ? i_green : text !== "" ? i_red : i_grey);
  };

  const inputStyle = {
    color: valid ? "green" : password ? "red" : "black",
    margin: "10px 0px",
    fontFamily: "regular",
  };
  return (
    <div
      className="mainscreen_container"
      onClick={(e) => {
        if (dropdownstate) {
          e.stopPropagation();
          setDropdownstate(false);
          setDropdownhubstate(false);
        }
      }}
    >
      <div className="mainscreen_sidebar">
        <div className="mainscreen_sidebarlogo">
          <img src={require("../../images/Union.png")} alt="logo" />
        </div>
        <div className="mainscreen_sidebarnav">
          <NavLink
            className="mainscreen_sidemenu_div"
            style={({ isActive }) => {
              return {
                backgroundColor: isActive && "#ffcc04",
              };
            }}
            to="/"
          >
            <img
              src={require("../../images/sidemenu_icn_1.png")}
              alt="logo"
              className="mainscreen_sidemenu_icon"
            />
            <div className="mainscreen_sidemenu_text">Dashboard</div>
          </NavLink>
          <NavLink
            className="mainscreen_sidemenu_div"
            style={({ isActive }) => {
              return {
                backgroundColor: isActive && "#ffcc04",
              };
            }}
            to="/fdjshfsd"
          >
            <img
              src={require("../../images/icn_cpu.png")}
              alt="logo"
              className="mainscreen_sidemenu_icon"
            />
            <div className="mainscreen_sidemenu_text">Hub/CPU</div>
          </NavLink>
          <NavLink
            className="mainscreen_sidemenu_div"
            style={({ isActive }) => {
              return {
                backgroundColor: isActive && "#ffcc04",
              };
            }}
            to="ManageOrders"
          >
            <img
              src={require("../../images/icn_manageorders.png")}
              alt="logo"
              className="mainscreen_sidemenu_icon"
            />
            <div className="mainscreen_sidemenu_text">Manage Orders</div>
          </NavLink>
          <NavLink
            className="mainscreen_sidemenu_div"
            style={({ isActive }) => {
              return {
                backgroundColor: isActive && "#ffcc04",
              };
            }}
            to="LocationManagement"
          >
            <img
              src={require("../../images/icn_location_management.png")}
              alt="logo"
              className="mainscreen_sidemenu_icon"
            />
            <div className="mainscreen_sidemenu_text">Location Management</div>
          </NavLink>
          <NavLink
            className="mainscreen_sidemenu_div"
            style={({ isActive }) => {
              return {
                backgroundColor: isActive && "#ffcc04",
              };
            }}
            to="/VehicleandDriverManagement"
          >
            <img
              src={require("../../images/icn_vehicle_management.png")}
              alt="logo"
              className="mainscreen_sidemenu_icon"
            />
            <div className="mainscreen_sidemenu_text">
              Vehicle & Driver Management
            </div>
          </NavLink>
          <NavLink
            className="mainscreen_sidemenu_div"
            style={({ isActive }) => {
              return {
                backgroundColor: isActive && "#ffcc04",
              };
            }}
            to="EmployeeManagement"
          >
            <img
              src={require("../../images/icn_employee_management.png")}
              alt="logo"
              className="mainscreen_sidemenu_icon"
            />
            <div className="mainscreen_sidemenu_text">Employee Management</div>
          </NavLink>
          <NavLink
            className="mainscreen_sidemenu_div"
            style={({ isActive }) => {
              return {
                backgroundColor: isActive && "#ffcc04",
              };
            }}
            to="CustomerManagement"
          >
            <img
              src={require("../../images/icn_customer_management.png")}
              alt="logo"
              className="mainscreen_sidemenu_icon"
            />
            <div className="mainscreen_sidemenu_text">Customer Management</div>
          </NavLink>
          <NavLink
            className="mainscreen_sidemenu_div"
            style={({ isActive }) => {
              return {
                backgroundColor: isActive && "#ffcc04",
              };
            }}
            to="CapacitySlotManagement"
          >
            <img
              src={require("../../images/icn_slot_management.png")}
              alt="logo"
              className="mainscreen_sidemenu_icon"
            />
            <div className="mainscreen_sidemenu_text">
              Capacity & SlotManagement
            </div>
          </NavLink>
          <NavLink
            className="mainscreen_sidemenu_div"
            style={({ isActive }) => {
              return {
                backgroundColor: isActive && "#ffcc04",
              };
            }}
            to="RoutePlanManagemet"
          >
            <img
              src={require("../../images/icn_route_management.png")}
              alt="logo"
              className="mainscreen_sidemenu_icon"
            />
            <div className="mainscreen_sidemenu_text">Route Plan Managemet</div>
          </NavLink>
          <NavLink
            className="mainscreen_sidemenu_div"
            style={({ isActive }) => {
              return {
                backgroundColor: isActive && "#ffcc04",
              };
            }}
            to="ServiceBagManagement"
          >
            <img
              src={require("../../images/icn_servicebag_management.png")}
              alt="logo"
              className="mainscreen_sidemenu_icon"
            />
            <div className="mainscreen_sidemenu_text">
              Service Bag Management
            </div>
          </NavLink>
          <NavLink
            className="mainscreen_sidemenu_div"
            style={({ isActive }) => {
              return {
                backgroundColor: isActive && "#ffcc04",
              };
            }}
            to="CatalogueManagement"
          >
            <img
              src={require("../../images/icn_catalogue.png")}
              alt="logo"
              className="mainscreen_sidemenu_icon"
            />
            <div className="mainscreen_sidemenu_text">Catalogue Management</div>
          </NavLink>
          <NavLink
            className="mainscreen_sidemenu_div"
            style={({ isActive }) => {
              return {
                backgroundColor: isActive && "#ffcc04",
              };
            }}
            to="/1"
          >
            <img
              src={require("../../images/icn_reports.png")}
              alt="logo"
              className="mainscreen_sidemenu_icon"
            />
            <div className="mainscreen_sidemenu_text">Reports</div>
          </NavLink>
          <NavLink
            className="mainscreen_sidemenu_div"
            style={({ isActive }) => {
              return {
                backgroundColor: isActive && "#ffcc04",
              };
            }}
            to="/2"
          >
            <img
              src={require("../../images/icn_subscription.png")}
              alt="logo"
              className="mainscreen_sidemenu_icon"
            />
            <div className="mainscreen_sidemenu_text">
              Subscription Management
            </div>
          </NavLink>
          <NavLink
            className="mainscreen_sidemenu_div"
            style={({ isActive }) => {
              return {
                backgroundColor: isActive && "#ffcc04",
              };
            }}
            to="/3"
          >
            <img
              src={require("../../images/icn_referralmanagement.png")}
              alt="logo"
              className="mainscreen_sidemenu_icon"
            />
            <div className="mainscreen_sidemenu_text">Referral Management</div>
          </NavLink>
          <NavLink
            className="mainscreen_sidemenu_div"
            style={({ isActive }) => {
              return {
                backgroundColor: isActive && "#ffcc04",
              };
            }}
            to="/4"
          >
            <img
              src={require("../../images/icn_couponmanagement.png")}
              alt="logo"
              className="mainscreen_sidemenu_icon"
            />
            <div className="mainscreen_sidemenu_text">Coupon Management</div>
          </NavLink>
          <NavLink
            className="mainscreen_sidemenu_div"
            style={({ isActive }) => {
              return {
                backgroundColor: isActive && "#ffcc04",
              };
            }}
            to="/5"
          >
            <img
              src={require("../../images/icn_walletmanagement.png")}
              alt="logo"
              className="mainscreen_sidemenu_icon"
            />
            <div className="mainscreen_sidemenu_text">Wallet Management</div>
          </NavLink>
          <NavLink
            className="mainscreen_sidemenu_div"
            style={({ isActive }) => {
              return {
                backgroundColor: isActive && "#ffcc04",
              };
            }}
            to="/6"
          >
            <img
              src={require("../../images/icn_notification_management.png")}
              alt="logo"
              className="mainscreen_sidemenu_icon"
            />
            <div className="mainscreen_sidemenu_text">
              Notification Management
            </div>
          </NavLink>
          <NavLink
            className="mainscreen_sidemenu_div"
            style={({ isActive }) => {
              return {
                backgroundColor: isActive && "#ffcc04",
              };
            }}
            to="/7"
          >
            <img
              src={require("../../images/icn_rolesandrights.png")}
              alt="logo"
              className="mainscreen_sidemenu_icon"
            />
            <div className="mainscreen_sidemenu_text">Roles and Rights</div>
          </NavLink>
          <NavLink
            className="mainscreen_sidemenu_div"
            style={({ isActive }) => {
              return {
                backgroundColor: isActive && "#ffcc04",
              };
            }}
            to="/8"
          >
            <img
              src={require("../../images/icn_settings.png")}
              alt="logo"
              className="mainscreen_sidemenu_icon"
            />
            <div className="mainscreen_sidemenu_text">Settings</div>
          </NavLink>
        </div>
      </div>
      <div className="mainscreen_main">
        <div className="mainscreen_topbar">
          <div className="mainscreen_topbarmain">
            <div className="mainscreen_topbarmainprofile">
              <img
                src={require("../../images/profile.png")}
                alt="profile"
                className="mainscreen_topbarmain_profileimg"
              />
              {dropdownstate ? (
                <img
                  src={require("../../images/arrowdown.png")}
                  alt="arrow"
                  className="mainscreen_topbarmain_arrowimg"
                  onClick={() => {
                    setDropdownstate(!dropdownstate);
                  }}
                />
              ) : (
                <img
                  src={require("../../images/arrowup.png")}
                  alt="arrow"
                  className="mainscreen_topbarmain_arrowimg"
                  onClick={() => {
                    setDropdownstate(!dropdownstate);
                    setDropdownhubstate(false);
                  }}
                />
              )}
            </div>
            <div className="mainscreen_topbarmaininbell">
              <img src={require("../../images/bell.png")} alt="bell" />
              <div className="mainscreen_dot" />
            </div>
          </div>
        </div>

        <div
          className="mainscreen_outlet"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {dropdownstate && (
            <>
              <div className="mainscreen_dropdownmenu">
                <div className="mainscreen_dropdownmenuuser">
                  <div className="mainscreen_dropdownmenuselectusername">
                    Prasanna - LM01254
                  </div>
                </div>
                <div className="mainscreen_dropdownmenuselect">
                  <div className="mainscreen_dropdownmenuselectdestination">
                    Hub Manager
                  </div>
                  {dropdownhubstate ? (
                    <img
                      src={require("../../images/arrowdown.png")}
                      alt="arrow"
                      className="mainscreen_dropdown_arrowimg"
                      onClick={() => {
                        setDropdownhubstate(!dropdownhubstate);
                      }}
                    />
                  ) : (
                    <img
                      src={require("../../images/arrowup.png")}
                      alt="arrow"
                      className="mainscreen_dropdown_arrowimg"
                      onClick={() => {
                        setDropdownhubstate(!dropdownhubstate);
                      }}
                    />
                  )}
                </div>
                {dropdownhubstate && (
                  <>
                    <div className="mainscreen_dropdownmenuselect">
                      <div className="mainscreen_dropdownmenuselectdestinationtext">
                        Shift Manager
                      </div>
                    </div>
                    <div className="mainscreen_dropdownmenuselect">
                      <div className="mainscreen_dropdownmenuselectdestinationtext">
                        Inspector
                      </div>
                    </div>
                  </>
                )}

                <div className="mainscreen_dropdownmenuuser">
                  <div
                    className="mainscreen_dropdownmenuselecttext"
                    onClick={(e) => {
                      e.stopPropagation();
                      setResetPasswordState(true);
                      setDropdownhubstate(false);
                      setDropdownstate(false);
                    }}
                  >
                    Change Password
                  </div>
                </div>
                <div className="mainscreen_dropdownmenuuser">
                  <div className="mainscreen_dropdownmenuselecttext">
                    Logout
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="mainscreen_dropdownmenu1">
            <Outlet />
          </div>
        </div>
      </div>
      {resetPasswordState && (
        <div
          className="mainscreen_changepw
      "
          onClick={(e) => {
            e.stopPropagation();
            setResetPasswordState(false);
            setDropdownhubstate(false);
            setDropdownstate(false);
          }}
        >
          <div
            className="login-card-reset"
            onClick={(e) => {
              e.stopPropagation();
              // setResetPasswordState(false);
              // setDropdownhubstate(false);
              // setDropdownstate(false);
            }}
          >
            {!reset ? (
              <>
                {" "}
                <h1 className="card-header-text">Change Password</h1>
                <span className="rememberme-text">
                  Your password must be different from previously used password
                </span>
                <Formik
                  validationSchema={passwordValidationSchema}
                  initialValues={{
                    password: "",
                    confirmpassword: "",
                    currentpassword: "",
                  }}
                  onSubmit={(values) => {
                    console.log(values);
                    setReset(true);
                  }}
                >
                  {({ values, handleSubmit, isValid }) => (
                    <>
                      <Field
                        component={InputField}
                        name="currentpassword"
                        placeholder="Enter Current Password"
                        value={values.currentpassword}
                        label="Enter Current  Password"
                        type={"password"}
                      />
                      <Field
                        component={InputField}
                        name="password"
                        placeholder="Enter New Password"
                        value={values.password}
                        label="Enter New Password"
                        type={"password"}
                        setText={setText}
                        handlePasswordChange={handlePasswordChange}
                      />
                      <div className="Password-rule-div">
                        <img src={styleImg} className="i-image" />
                        <p style={inputStyle}>Password rule</p>
                      </div>

                      {!valid && (
                        <div
                          style={{
                            color: "grey",
                            fontFamily: "regular",
                          }}
                        >
                          <div className="validation-criteria">
                            <img src={styleImg1} className="i-image" />
                            <p style={style}>At least 8 characters</p>
                          </div>
                          <div className="validation-criteria">
                            <img src={styleImg3} className="i-image" />
                            <p style={high}>Uppercase letters</p> <br />
                          </div>
                          <div className="validation-criteria">
                            <img src={styleImg4} className="i-image" />
                            <p style={low}>Lowercase letters</p> <br />
                          </div>
                          <div className="validation-criteria">
                            <img src={styleImg2} className="i-image" />
                            <p style={number}>At least 1 number</p> <br />
                          </div>
                          <div className="validation-criteria">
                            <img src={styleImg5} className="i-image" />
                            <p style={special}>Special Character</p> <br />
                          </div>
                          <br />
                        </div>
                      )}

                      <Field
                        component={InputField}
                        name="confirmpassword"
                        placeholder="Re-Enter New Password"
                        value={values.confirmpassword}
                        label="Re-Enter New Password"
                        type={"password"}
                      />
                      <div className="sendBtn-div">
                        <button className="send-btn-img">
                          {values.confirmpassword === values.password &&
                          valid === true ? (
                            <img src={ResetEnable} onClick={handleSubmit} />
                          ) : (
                            <img src={ResetDisable} />
                          )}
                        </button>
                      </div>
                    </>
                  )}
                </Formik>
              </>
            ) : (
              <>
                <div className="emailSent-div">
                  <img src={Greentick} />
                  <h1 className="passchange-text">Password Changed!</h1>
                </div>
                <span className="rememberme-text">
                  Your password has been changed successfully
                </span>
                <button
                  className="goToLogin-btn"
                  onClick={() => {
                    // navigate("/");
                  }}
                  type="submit"
                >
                  <img src={goToLoginBtn} />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default MainScreen;
