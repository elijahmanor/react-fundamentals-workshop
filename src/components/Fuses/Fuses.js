import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Fuse from "../Fuse/Fuse";

import "./Fuses.css";

const Fuses = ({ className, fuses }) => {
  const classes = classNames("Fuses", className);

  return <div className={classes}>{fuses.map(fuse => <Fuse key={fuse.id} {...fuse} />)}</div>;
};

Fuses.propTypes = {
  className: PropTypes.string,
  fuses: PropTypes.array
};

Fuses.defaultProps = {};

export default Fuses;
