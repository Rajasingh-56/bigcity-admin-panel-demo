import React, { useState, useMemo } from "react";
import { DashboardImages } from "../lib/DashboardImages";
import { GoPlus } from "react-icons/go";
import { IoFilterOutline } from "react-icons/io5";
import { useNavigate } from "react-router";
import "../styles/Offerspage.scss";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";
ModuleRegistry.registerModules([AllCommunityModule]);

const Offerspage = () => {
  const [rowData, setRowData] = useState([
    {
      Name: "Fassos",
      StartDate: "01-01-2025",
      EndDate: "31-01-2025",
      TitleDescription: "Daily",
      Amount: "₹500",
      Tags: "Food & Entertainment",
      Modify: "Edit",
      OfferStatus: "Block",
    },
    {
      Name: "Fassos",
      StartDate: "01-01-2025",
      EndDate: "31-01-2025",
      TitleDescription: "Daily",
      Amount: "₹500",
      Tags: "Food & Entertainment",
      Modify: "Edit",
      OfferStatus: "Block",
    },
    {
      Name: "Fassos",
      StartDate: "01-01-2025",
      EndDate: "31-01-2025",
      TitleDescription: "Daily",
      Amount: "₹500",
      Tags: "Food & Entertainment",
      Modify: "Edit",
      OfferStatus: "Block",
    },
    {
      Name: "Fassos",
      StartDate: "01-01-2025",
      EndDate: "31-01-2025",
      TitleDescription: "Daily",
      Amount: "₹500",
      Tags: "Food & Entertainment",
      Modify: "Edit",
      OfferStatus: "Block",
    },
    {
      Name: "Fassos",
      StartDate: "01-01-2025",
      EndDate: "31-01-2025",
      TitleDescription: "Daily",
      Amount: "₹500",
      Tags: "Food & Entertainment",
      Modify: "Edit",
      OfferStatus: "Block",
    },
    {
      Name: "Fassos",
      StartDate: "01-01-2025",
      EndDate: "31-01-2025",
      TitleDescription: "Daily",
      Amount: "₹500",
      Tags: "Food & Entertainment",
      Modify: "Edit",
      OfferStatus: "Block",
    },
    {
      Name: "Fassos",
      StartDate: "01-01-2025",
      EndDate: "31-01-2025",
      TitleDescription: "Daily",
      Amount: "₹500",
      Tags: "Food & Entertainment",
      Modify: "Edit",
      OfferStatus: "Block",
    },
    {
      Name: "Fassos",
      StartDate: "01-01-2025",
      EndDate: "31-01-2025",
      TitleDescription: "Daily",
      Amount: "₹500",
      Tags: "Food & Entertainment",
      Modify: "Edit",
      OfferStatus: "Block",
    },
    {
      Name: "Fassos",
      StartDate: "01-01-2025",
      EndDate: "31-01-2025",
      TitleDescription: "Daily",
      Amount: "₹500",
      Tags: "Food & Entertainment",
      Modify: "Edit",
      OfferStatus: "Block",
    },
    {
      Name: "Fassos",
      StartDate: "01-01-2025",
      EndDate: "31-01-2025",
      TitleDescription: "Daily",
      Amount: "₹500",
      Tags: "Food & Entertainment",
      Modify: "Edit",
      OfferStatus: "Block",
    },
  ]);

  const defaultColDefe = useMemo(() => {
    return {
      flex: 1,
      // filter:true,
    };
  });

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { field: "Name" },
    { field: "TitleDescription" },
    { field: "Amount" },
    { field: "StartDate" },
    { field: "EndDate" },
    { field: "Tags" },
    { field: "Modify" },
    { field: "OfferStatus" },
  ]);

  const navigate = useNavigate();

  const handleCreateOffers = () => {
    navigate("/layout/offerspageform");
  };
  return (
    <div className="campagin-sec">
      <div className="dashboard">
        <div className="top-section">
          <h3>Dashboard</h3>
        </div>

        <div className="code-images">
          {DashboardImages.map((item) => (
            <div key={item.id} className="card-image">
              <img src={item.image} alt={item.name} />
              <p className="code-name">{item.name}</p>
              <p className="counts">{item.countdown}</p>
            </div>
          ))}
        </div>

        <div className="table-section ag-theme-quartz-dark">
          <div className="camp-tabel">
            <div className="camp-head">
              <h3>Offers Overview</h3>
            </div>
            <div className="camp-inputs">
              <input
                className="inputs"
                type="search"
                placeholder="Search..."
                aria-label="Search campaigns"
              />
              <div className="filter-wrap">
                <input className="inputs" type="filter" />{" "}
                <span>
                  <IoFilterOutline />
                </span>
              </div>
              <div className="camp-btn-sec">
                <button className="camp-btn" onClick={handleCreateOffers}>
                  Create Offers{" "}
                  <span>
                    <GoPlus />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="table ag-theme-quartz-dark " style={{ height: 450 }}>
            <AgGridReact
              rowData={rowData}
              columnDefs={colDefs}
              defaultColDef={defaultColDefe}
            />
          </div>
        </div>
        <div className="offer-footer">
          <ul>
            <li>
              <a href="">Terms & Condition</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Help Desk</a>
            </li>
            <li>
              <a href="">FAQs</a>
            </li>
          </ul>
        </div>{" "}
      </div>
    </div>
  );
};

export default Offerspage;
