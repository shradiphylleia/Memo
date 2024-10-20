import React from "react";
import Button from "./Button.jsx";
import { Outlet } from 'react-router-dom';

import "./AppLayout.css";

function AppLayout() {
  return (
    <>
    <div className="navbar">
        <div className="name">
          <Button className="memo" text="memo" link="/"></Button>
        </div>

        <div className="nav">
          <Button className="quicklinks" text="Home" link="/"></Button>
          <Button
            className="quicklinks"
            text="Features"
            link="/features"
          ></Button>
          <Button className="quicklinks" text="About" link="/about"></Button>
        </div>

        <div className="signup">
          <Button
            className="signupBtn"
            text="Get Started"
            link="/signup"
          ></Button>
        </div>
      </div>

      <Outlet />
    </>
  );
}

export default AppLayout;
