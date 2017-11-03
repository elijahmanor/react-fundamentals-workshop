import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Button from "../Button/Button";

import "./Toolbar.css";

const Toolbar = ({ className, onNew }) => {
  const classes = classNames("Toolbar", className);
  return (
    <ul className={classes}>
      <li className="Toolbar-item Toolbar-item--logo">
        <span className="fire">o</span>
        <span className="burn">v</span>
        <span className="burn">e</span>
        <span className="fire">r</span>
        <span className="burn">r</span>
        <span className="fire">e</span>
        <span className="burn">a</span>
        <span className="burn">c</span>
        <span className="fire">t</span>
      </li>
      <li className="Toolbar-item">
        <Button onClick={onNew}>Fuse</Button>
      </li>
    </ul>
  );
};

Toolbar.propTypes = {
  onNew: PropTypes.func
};

Toolbar.defaultProps = {
  onNew() {}
};

export default Toolbar;
