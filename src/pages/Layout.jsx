import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Layout.scss";
import logo from "../Assets/Bigcity.png";
import { GrAnnounce } from "react-icons/gr";
import { RiDiscountPercentFill } from "react-icons/ri";
import { Outlet } from "react-router";
import { RiLogoutBoxLine } from "react-icons/ri";

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <div className="layout-section">
      <div className="layout-box">
        <img src={logo} alt="Logo" />
        <p className="overview">OVERVIEW</p>

          <Link
            to="/layout"
            className={`anchor camp ${
              ["/layout", "/layout/campaignform"].includes(pathname)
                ? "active"
                : ""
            }`}
          >
            <span>
              <GrAnnounce />
            </span>
            Campaigns
          </Link>

          <Link
            to="/layout/offerspage"
            className={`anchor ${
              pathname.startsWith("/layout/offerspage") ? "active" : ""
            }`}
          >
            <span>
              <RiDiscountPercentFill />
            </span>
            Offers
          </Link>

          <Link to="/" className="logout anchor">
            <span>
              <RiLogoutBoxLine />
            </span>{" "}
            Logout{" "}
          </Link>
      </div>

      <div className="campaign-section">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
