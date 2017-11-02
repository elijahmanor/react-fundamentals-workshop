import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Icon.css";

const Icon = ({ className, type, isActive, onClick }) => {
  const classes = classNames(className, "fa", {
    [`fa-${type}`]: true,
    "is-active": isActive
  });
  return (
    <button className="Icon" onClick={() => onClick({ isActive: !isActive })}>
      <i className={classes} aria-hidden="true" />
    </button>
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func
};

Icon.defaultProps = {
  onClick() {}
};

export default Icon;
