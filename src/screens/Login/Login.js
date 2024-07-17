import React, { useState } from "react";
import "./Login.css";
import logo from "../../images/logo.png";
import AnimationImg from "../../components/Animation_images/AnimationImg";
import LoginImage from "../../images/LoginImage.png";
import LoginImageDisable from "../../images/LoginImageDisable.png";
import InputField from "../../components/InputFields/InputField";
import { Formik, Field } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const loginValidationSchema = yup.object().shape({
  username: yup.string().required("User Name  is required"),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
    .matches(/\d/, "Password must have a number")
    .min(6, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});
function Login() {
  const navigate = useNavigate();
  return (
    <div className="main-login">
      <div>
        <AnimationImg />
      </div>

      <div className="login-container">
        <img src={logo} style={{ marginBottom: "50px" }}></img>
        <div className="login-card">
          <h1 className="card-header-text">Welcome!</h1>
          <span className="Rememberme-text">
            Please enter your crendentials login
          </span>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{
              username: "",
              password: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ values, handleSubmit, isValid }) => (
              <>
                <Field
                  component={InputField}
                  name="username"
                  placeholder="User Name"
                  value={values.username}
                  label="User Name"
                  type={"text"}
                />
                <Field
                  component={InputField}
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  label="Password"
                  type={"password"}
                />

                <div className="forgotpass-div">
                  <div className="forgotpass-innerDiv">
                    <input type="checkbox" className="checkbox" />
                    <span className="rememberme-text">Remember me</span>
                  </div>

                  <span
                    className="forget-text"
                    onClick={() => {
                      navigate("forgotpassowrd");
                    }}
                  >
                    Forgot password
                  </span>
                </div>

                <button type="submit" className="login-btn-img">
                  {values.password.length && values.username.length > 0 ? (
                    <img src={LoginImage} onClick={handleSubmit} />
                  ) : (
                    <img src={LoginImageDisable} />
                  )}
                </button>
              </>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Login;
