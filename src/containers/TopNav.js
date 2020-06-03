import React from "react";
import { Link } from "react-router-dom";

const TopNav = (props) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="#">
        CHANGE_APPLICATION
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <Link class="nav-item nav-link" to="/">
            Home
          </Link>
          <Link class="nav-item nav-link" to="#">
            Pricing
          </Link>
          <Link class="nav-item nav-link" to="#">
            Disabled
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default TopNav;
