import React, { useRef, useState } from "react";
import "./ResetPassword.css";
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
import { useNavigate } from "react-router-dom";

const passwordValidationSchema = yup.object().shape({
  password: yup.string().required("Password is required"),
  confirmpassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
export default function ResetPassword() {
  const navigate = useNavigate();
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
  // console.log("isvalid-----", valid);
  return (
    <div className="main-login">
      <div className="animation-container">
        <AnimationImg />
      </div>
      <div className="reset-container">
        <img src={logo} style={{ marginBottom: "50px" }}></img>
        <div className="login-card-reset">
          {!reset ? (
            <>
              <h1 className="card-header-text">Reset New Password</h1>
              <span className="rememberme-text">
                Your password must be different from previously used password
              </span>
              <Formik
                validationSchema={passwordValidationSchema}
                initialValues={{
                  password: "",
                  confirmpassword: "",
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
                      <span
                        onClick={() => {
                          navigate("/");
                        }}
                        className="forget-text"
                      >
                        Return to Login
                      </span>
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
                  navigate("/");
                }}
                type="submit"
              >
                <img src={goToLoginBtn} />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
