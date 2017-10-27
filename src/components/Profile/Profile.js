import React from "react";
import classNames from "classnames";
import { get } from "lodash";
import Icon from "../Icon/Icon";

import "./Profile.css";

export default ({ className, user = {}, onReset }) => {
  const classes = classNames("Profile", className);
  const fullName = get(user, "name.formatted") || user.displayName;

  return (
    <div className={classes}>
      <div className="Profile-background" />
      <Icon className="Profile-reset" type="refresh" onClick={onReset}>
        Reset
      </Icon>
      <header className="Profile-header">
        <img className="Profile-avatar" src={user.thumbnailUrl} alt={fullName} />
        <div className="Profile-name">
          <div className="Profile-fullName">{fullName}</div>{" "}
          <div className="Profile-userName">@{user.preferredUsername}</div>
        </div>
      </header>
      <div className="Profile-bio" dangerouslySetInnerHTML={{ __html: user.aboutMe }} />
    </div>
  );
};
