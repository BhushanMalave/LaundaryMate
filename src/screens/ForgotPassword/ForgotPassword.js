import React, { useState } from "react";
import AnimationImg from "../../components/Animation_images/AnimationImg";
import "./ForgotPassword.css";
import logo from "../../images/logo.png";
import SendEnable from "../../images/SendEnableImg.png";
import SendDisable from "../../images/SendDisableImg.png";
import Greentick from "../../images/GreenTick.png";
import goToLoginBtn from "../../images/GoToLoginBtn.png";
// import LoginImageDisable from "../../images/LoginImageDisable.png";
import InputField from "../../components/InputFields/InputField";
import { Formik, Field } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const loginValidationSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
});
const ForgotPassword = () => {
  const [state, setState] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="main-login">
      <div className="animation-container">
        <AnimationImg />
      </div>
      <div className="forgot-container">
        <img src={logo} style={{ marginBottom: "50px" }}></img>
        <div className="login-card">
          {!state ? (
            <>
              <h1 className="card-header-text">Forgot Password</h1>
              <span className="rememberme-text">
                We will send you a link on your registered email with
                instructions to reset your password
              </span>
              <Formik
                validationSchema={loginValidationSchema}
                initialValues={{
                  email: "",
                }}
                onSubmit={(values) => {
                  console.log(values);
                  setState(!state);
                }}
              >
                {({ values, handleSubmit, isValid }) => (
                  <>
                    <Field
                      component={InputField}
                      name="email"
                      placeholder="Enter Registered Email ID"
                      value={values.email}
                      label="Enter Registered Email ID"
                      type={"text"}
                    />

                    <div className="sendBtn-div">
                      <button type="submit" className="send-btn-img">
                        {values.email.length > 0 ? (
                          <img src={SendEnable} onClick={handleSubmit} />
                        ) : (
                          <img src={SendDisable} />
                        )}
                      </button>
                      <span
                        className="forget-text"
                        onClick={() => {
                          navigate("/resetpassword");
                        }}
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
                <p className="card-Email-text">Email Sent!</p>
              </div>

              <span className="rememberme-text">
                An email has been sent to your registered email id
                <p className="email-text">prasanna@laundrymate.in</p>
              </span>
              <span className="rememberme-text">
                Please check your email and follow the instructions to reset
                your password
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
};

export default ForgotPassword;
