import React, { useMemo, useState } from "react";
import "../styles/Campaign.scss";
import { useNavigate } from "react-router";
import { DashboardImages } from "../lib/DashboardImages";
import { GoPlus } from "react-icons/go";
import { IoFilterOutline } from "react-icons/io5";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";

ModuleRegistry.registerModules([AllCommunityModule]);

const Campaign = () => {
  const [rowData, setRowData] = useState([
    {
      Name: "Fassos",
      StartDate: "01-01-2025",
      EndDate: "31-01-2025",
      Frequency: "Daily",
      Status: "Active",
      Upload: "Upload",
      Modify: "Edit",
      CampaignStatus: "Block",
    },
    {
      Name: "Fassos",
      StartDate: "01-01-2025",
      EndDate: "31-01-2025",
      Frequency: "Daily",
      Status: "Active",
      Upload: "Upload",
      Modify: "Edit",
      CampaignStatus: "Block",
    },
    {
      Name: "Fassos",
      StartDate: "01-01-2025",
      EndDate: "31-01-2025",
      Frequency: "Daily",
      Status: "Active",
      Upload: "Upload",
      Modify: "Edit",
      CampaignStatus: "Block",
    },
    {
      Name: "Fassos",
      StartDate: "01-01-2025",
      EndDate: "31-01-2025",
      Frequency: "Daily",
      Status: "Active",
      Upload: "Upload",
      Modify: "Edit",
      CampaignStatus: "Block",
    },
    {
      Name: "Fassos",
      StartDate: "01-01-2025",
      EndDate: "31-01-2025",
      Frequency: "Daily",
      Status: "Active",
      Upload: "Upload",
      Modify: "Edit",
      CampaignStatus: "Block",
    },
    {
      Name: "Fassos",
      StartDate: "01-01-2025",
      EndDate: "31-01-2025",
      Frequency: "Daily",
      Status: "Active",
      Upload: "Upload",
      Modify: "Edit",
      CampaignStatus: "Block",
    },
    {
      Name: "Fassos",
      StartDate: "01-01-2025",
      EndDate: "31-01-2025",
      Frequency: "Daily",
      Status: "Active",
      Upload: "Upload",
      Modify: "Edit",
      CampaignStatus: "Block",
    },
    {
      Name: "Fassos",
      StartDate: "01-01-2025",
      EndDate: "31-01-2025",
      Frequency: "Daily",
      Status: "Active",
      Upload: "Upload",
      Modify: "Edit",
      CampaignStatus: "Block",
    },
    {
      Name: "Fassos",
      StartDate: "01-01-2025",
      EndDate: "31-01-2025",
      Frequency: "Daily",
      Status: "Active",
      Upload: "Upload",
      Modify: "Edit",
      CampaignStatus: "Block",
    },
    {
      Name: "Fassos",
      StartDate: "01-01-2025",
      EndDate: "31-01-2025",
      Frequency: "Daily",
      Status: "Active",
      Upload: "Upload",
      Modify: "Edit",
      CampaignStatus: "Block",
    },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      // filter:true,
    };
  });

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { field: "Name"},
    { field: "StartDate" },
    { field: "EndDate" },
    { field: "Frequency" },
    { field: "Status" },
    { field: "Upload" },
    { field: "Modify" },
    { field: "CampaignStatus" },
  ]);

  const navigate = useNavigate();

  const handleCreateCampaign = () => {
    navigate("/layout/campaignform");
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

        <div className="table-section ">
          <div className="camp-tabel">
            <div className="camp-head">
              <h3>Campaign Overview</h3>
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
                <button className="camp-btn" onClick={handleCreateCampaign}>
                  Create Campaign{" "}
                  <span>
                    <GoPlus />
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="table ag-theme-quartz-dark " style={{ height: 470 }}>
            <AgGridReact
              rowData={rowData}
              columnDefs={colDefs}
              defaultColDef={defaultColDef}
            />
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};
export default Campaign;
