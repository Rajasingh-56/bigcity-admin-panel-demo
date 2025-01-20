import React from "react";
import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import Attachment from "../Assets/attachment.png";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import { GoPlus } from "react-icons/go";
import "../styles/Offerspageform.scss";
const OfferValid = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  description: Yup.string().min(5, "Too Short!").required("Required"),
  startdate: Yup.date().required("Required"),
  enddate: Yup.date()
    .min(Yup.ref("startdate"), "End date must be after start date")
    .required("Required"),
  amount: Yup.string().required("Required"),
  tags: Yup.string().required("Required"),
  textbox: Yup.string().required("Required"),
});

const Offerspageform = () => {
  const navigate = useNavigate();
  const [selectThumbnail, setSelectThumbnail] = useState("");

  const goBackPage = () => {
    navigate("/layout/offerspage");
  };

  return (
    <div className="offer-form">
      <div className="back-btn" onClick={goBackPage}>
        <p>
          <span>
            <FaArrowLeftLong />
          </span>
          Go back
        </p>
      </div>
      <div className="offer-form-section">
        <Formik
          key="home"
          initialValues={{
            name: "",
            title: "",
            startdate: "",
            enddate: "",
            amount: "",
            tags: "",
            textbox: "",
          }}
          //   validationSchema={OfferValid} // Temporarily comment this out
          onSubmit={(values) => {
            console.log("Form submitted", values);
            navigate("/layout/offerspage");
          }}
        >
          {({ errors, touched, values, handleBlur, handleChange }) => (
            <Form action="">
              <h3>Create New Campaign</h3>
              <div className="form-card">
                <div className="admission-form">
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter the campaign title"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.name && touched.name && (
                    <span className="error">{errors.name}</span>
                  )}
                </div>

                <div className="admission-form">
                  <label htmlFor="">Title/Description</label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Example value"
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.title && touched.title && (
                    <span className="error">{errors.title}</span>
                  )}
                </div>
              </div>

              <div className="form-card">
                <div className="admission-form">
                  <label htmlFor="">Start Date</label>
                  <input
                    type="date"
                    name="startdate"
                    placeholder="Select startdate"
                    value={values.startdate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.startdate && touched.startdate && (
                    <span className="error">{errors.startdate}</span>
                  )}
                </div>

                <div className="admission-form">
                  <label htmlFor="">End Date</label>
                  <input
                    type="date"
                    name="enddate"
                    placeholder="Enter Name"
                    value={values.enddate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.enddate && touched.enddate && (
                    <span className="error">{errors.enddate}</span>
                  )}
                </div>
              </div>

              <div className="admission-form">
                <label htmlFor="">Amount</label>
                <select
                  name="amount"
                  placeholder="select"
                  value={values.amount}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="">₹500</option>
                  <option value="daily">₹1000</option>
                  <option value="weekly"> ₹2000</option>
                  <option value="monthly">₹5000</option>
                </select>{" "}
                {errors.amount && touched.amount && (
                  <span className="error">{errors.amount}</span>
                )}
              </div>

              <div className="admission-form">
                <label htmlFor="">Tags</label>
                <select
                  name="tags"
                  id="status"
                  placeholder="slect"
                  value={values.tags}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="">Add tags to categorize your campaign</option>
                  <option value="Food">Food & Entertainment</option>
                  <option value="inactive">Inactive</option>
                </select>{" "}
                {errors.tags && touched.tags && (
                  <span className="error">{errors.tags}</span>
                )}
              </div>

              <div className="admission-form">
                <label htmlFor="">HTML Editor (Terms & Conditions)</label>
                <textarea
                  type="text"
                  name="textbox"
                  value={values.textbox}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.textbox && touched.textbox && (
                  <span className="error">{errors.textbox}</span>
                )}
              </div>

              <div className="admission-form">
                <label htmlFor="">Upload Campaign Thumbnail</label>
                <div className="admission">
                  <input
                    type="text"
                    className="name"
                    placeholder={
                      selectThumbnail || "Add an attachment (optional)"
                    }
                    readOnly
                  />
                  <img src={Attachment} alt="" className="admission-img" />
                  <input
                    type="file"
                    className="admission-input"
                    onChange={(e) => {
                      setSelectThumbnail(e.target.files[0]?.name || "");
                    }}
                  />{" "}
                </div>
              </div>

              <div className="btn-offer">
                <button className="offer-cancel-btn">Cancel</button>
                <button className="offer-create-btn">
                  Create offers{" "}
                  <span>
                    <GoPlus />
                  </span>{" "}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Offerspageform;
