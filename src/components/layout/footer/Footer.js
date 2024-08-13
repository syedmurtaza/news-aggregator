import React from "react";
import "./Footer.css";

export default function Footer(props) {
  return (
    <div className="Footer text-white p-3">
      <small>{props.copyrights}</small>
    </div>
  );
}
