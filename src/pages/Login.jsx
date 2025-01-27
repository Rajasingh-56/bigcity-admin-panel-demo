import React from "react";
import "../styles/Login.scss";
import logo from "../Assets/Bigcity.png";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  rememberMe: Yup.boolean()
    .oneOf([true], "Please accept the terms")
    .required("Required"),
});

const Login = () => {
  const navigate = useNavigate();   

  return (
    <div className="container">
      <div className="login-section">
        <div className="login-page">
          <img src={logo} alt="bigcitylogo" />
          <h2>Powering Rewards, Simplifying Management!</h2>
          <p>
            Seamlessly manage cashback campaigns, tracks performance, and
            delivery excepional value to customers with BigCity Cashback Admin.
            Your go-to solution for efficient, innovative, and rewarding
            operations."
          </p>
        </div>

        <div className="login-form">
          <Formik
            key="home"
            initialValues={{
              email: "",
              password: "",
              rememberMe: false,
            }}
            validationSchema={SignupSchema} 
            onSubmit={(values) => {
              console.log("Logged in", values);
              navigate("/layout");
            }}
          >
            {({ errors, touched, values, handleBlur, handleChange }) => (
              <Form className="form-section">
                <div className="info">
                  <h1>Login</h1>
                  <p>Please enter your crendentials to login</p>
                </div>

                <div className="admission-form">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email && (
                    <span className="error">{errors.email}</span>
                  )}
                </div>

                <div className="admission-form">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password && (
                    <span className="error">{errors.password}</span>
                  )}
                </div>

                <div className="admission-form checkbox-sec">
                  <div className="check-box">
                    <input
                      className="tick"
                      type="checkbox"
                      name="rememberMe"
                      checked={values.rememberMe}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <label>Remember Me </label>

                    <a href="/">Forgot Password?</a>
                  </div>
                  {errors.rememberMe && touched.rememberMe && (
                    <span className="error">{errors.rememberMe}</span>
                  )}
                </div>

                <div className="admission-form otp-btns">
                  <button type="submit">Login</button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
