import React, { useState
 } from "react";
import "../styles/Campaignform.scss";
import { FaArrowLeftLong } from "react-icons/fa6";
import UploadImage from "../Assets/upload.png";
import Attachment from "../Assets/attachment.png";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";

const FormValid = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  description: Yup.string().min(5, "Too Short!").required("Required"),
  startdate: Yup.date().required("Required"),
  enddate: Yup.date()
    .min(Yup.ref("startdate"), "The End date must be after start date")
    .required("Required"),
  frequency: Yup.string().required("Required"),
  voucher: Yup.mixed().required("Required"),
  campaignstatus: Yup.string().required("Required"),
});

const Campaignform = () => {
  const navigate = useNavigate();
  const [selectedVoucher, setSelectedVoucher] = useState("");
  const [selectedThumbnail, setSelectedThumbnail] = useState("");
  const goBack = () => {
    navigate("/layout");
  };

  return (
    <div className="campaign-form">
      <div className="back-btn" onClick={goBack}>
        <p>
          <span>
            <FaArrowLeftLong />
          </span>
          Go back
        </p>
      </div>
      <div className="campaign-form-section">
        <Formik
          key="home"
          initialValues={{
            name: "",
            description: "",
            startdate: "",
            enddate: "",
            frequency: "",
            voucher: "",
            campaignstatus: "",
          }}
          validationSchema={FormValid}
          onSubmit={(values) => {
            console.log("Form submitted", values);
            navigate("/layout");
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
                  <label htmlFor="">Description</label>
                  <input
                    type="text"
                    name="description"
                    placeholder="Example value"
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.description && touched.description && (
                    <span className="error">{errors.description}</span>
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
                <label htmlFor="">Frequency</label>
                <select
                  name="frequency"
                  placeholder="select"
                  value={values.frequency}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="">Select frequency</option>
                  <option value="daily">Daily</option>
                  <option value="weekly"> Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>{" "}
                {errors.frequency && touched.frequency && (
                  <span className="error">{errors.frequency}</span>
                )}
              </div>

              <div className="admission-form ">
                <label htmlFor="">Upload Voucher Code</label>
                <div className="voucher">
                  {/* <input type="text" placeholder=".e.g.csv" /> */}
                  <input
                    type="text"
                    placeholder={selectedVoucher || ".e.g.csv"}
                    readOnly
                  />
                  <img src={UploadImage} className="voucher-img" alt="voucher image" />
                  <input
                    className="voucher-input"
                    type="file"
                    name="voucher"
                    onChange={(e) => {
                      setSelectedVoucher(e.target.files[0]?.name || "");
                      handleChange(e);
                    }}
                    onBlur={handleBlur}
                  />
                  {errors.voucher && touched.voucher && (
                    <span className="error">{errors.voucher}</span>
                  )}
                </div>
              </div>

              <div className="admission-form">
                <label htmlFor="">Campaign Status</label>
                <select
                  name="campaignstatus"
                  id="status"
                  placeholder="slect"
                  value={values.campaignstatus}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="">Select campaign status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>{" "}
                {errors.campaignstatus && touched.campaignstatus && (
                  <span className="error">{errors.campaignstatus}</span>
                )}
              </div>

              <div className="admission-form">
                <label htmlFor="">Upload Campaign Thumbnail</label>
                <div className="admission">
                  <input
                    type="text"
                    className="name"
                    placeholder={
                      selectedThumbnail || "Add an attachment (optional)"
                    }
                    readOnly
                  />
                  <img src={Attachment} alt="" className="admission-img" />
                  <input
                    type="file"
                    className="admission-input"
                    onChange={(e) => {
                      setSelectedThumbnail(e.target.files[0]?.name || "");
                    }}
                  />
                </div>
              </div>

              <div className="btn">
                <button className="cancel-btn" type="cancel" onClick={goBack}>Cancel</button>
                <button className="camp-btn" type="submit">Create Campaign</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Campaignform;
