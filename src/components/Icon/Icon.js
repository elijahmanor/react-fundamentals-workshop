import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Icon.css";

const Icon = ({ className, type, isActive, onClick }) => {
  const classes = classNames(className, "fa", {
    [`fa-${type}`]: true,
    "is-active": isActive
  });
  return (
    <button className="Icon" onClick={onClick}>
      <i className={classes} aria-hidden="true" />
    </button>
  );
};

export default Icon;
