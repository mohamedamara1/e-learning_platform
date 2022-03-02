import React from "react";
import { useLocation } from "react-router-dom";

const DefaultHeader = () => {
  var location = useLocation().pathname;
  return location.includes("dashboard") ? null : <div> default header</div>;
};

export default DefaultHeader;
