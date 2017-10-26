import React from "react";
import classNames from "classnames";
import Button from "../Button/Button";

import "./Toolbar.css";

const Toolbar = ({ className, user, onNew }) => {
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
      <li className="Toolbar-item" onClick={onNew}>
        <Button>Fuse</Button>
      </li>
    </ul>
  );
};

Toolbar.defaultProps = {
  onNew() {}
};

export default Toolbar;
