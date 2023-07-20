import { useEffect } from "react";
import "./home.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="area">
        <nav class="main-menu">
          <ul>
            <li>
              <i class="fa fa-home fa-2x"></i>
              <span class="nav-text">Home</span>
            </li>
            <li class="has-subnav">
              <Link to="/profile">
                <i class="fa fa-globe fa-2x"></i>
                <span class="nav-text">Profile</span>
              </Link>
            </li>
            <li class="has-subnav">
              <a href="#">
                <i class="fa fa-comments fa-2x"></i>
                <span class="nav-text">dashboard</span>
              </a>
            </li>
            <li class="has-subnav">
              <a href="#">
                <i class="fa fa-camera-retro fa-2x"></i>
                <span class="nav-text">sales</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-book fa-2x"></i>
                <span class="nav-text">purchases</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-cogs fa-2x"></i>
                <span class="nav-text">Inventory</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-map-marker fa-2x"></i>
                <span class="nav-text">Payroll management</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-info fa-2x"></i>
                <span class="nav-text">tax preparation</span>
              </a>
            </li>
          </ul>

          <ul class="logout">
            <li>
              <a href="#">
                <i class="fa fa-power-off fa-2x"></i>
                <span class="nav-text">Logout</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Home;
