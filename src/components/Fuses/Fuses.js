import React from "react";
import classNames from "classnames";
import Fuse from "../Fuse/Fuse";

import "./Fuses.css";

const Fuses = ({ className, fuses }) => {
  const classes = classNames("Fuses", className);

  return <div className={classes}>{fuses.map(fuse => <Fuse key={fuse.id} {...fuse} />)}</div>;
};

export default Fuses;
