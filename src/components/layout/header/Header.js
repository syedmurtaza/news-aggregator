import React from "react";
import Navbar from "./Navbar";
import { useLogout } from "../../../hooks/useLogout";
import { useSelector } from "react-redux";
import EventHandler from "../../common/EventHandler";

import "./Header.css";

export default function Header(props) {
  const currentUser = useSelector((state) => state.auth.user);
  const logOut = useLogout();  
  return (
    <div className="header">
      <Navbar currentUser={currentUser} logOut={logOut} />
      <h1 className="p-4 NewsHeading">{props.title}</h1>
      <EventHandler event="logout" handler={logOut} />
    </div>
  );
}
