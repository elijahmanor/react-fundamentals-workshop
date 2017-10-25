import React from "react";
import classNames from "classnames";
import Button from "../Button/Button";
import logo from "../../images/overreact-logo.png";

import "./Toolbar.css";

const Toolbar = ({ className, user, onNew }) => {
  const classes = classNames("Toolbar", className);
  return (
    <ul className={classes}>
      <li className="Toolbar-item Toolbar-item--logo">
        <span class="fire">o</span>
        <span class="burn">v</span>
        <span class="burn">e</span>
        <span class="fire">r</span>
        <span class="fire">e</span>
        <span class="burn">a</span>
        <span class="burn">c</span>
        <span class="fire">t</span>
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
