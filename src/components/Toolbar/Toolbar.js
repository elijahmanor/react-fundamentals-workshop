import React from "react";
import classNames from "classnames";
import Button from "../Button/Button";
import logo from "../../images/overreact-logo.png";

import "./Toolbar.css";

const Toolbar = ({ className, user, onNew }) => {
  const classes = classNames("Toolbar", className);
  return (
    <ul className={classes}>
      <li className="Toolbar-item">
        <img className="Toolbar-logo" src={logo} />
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
