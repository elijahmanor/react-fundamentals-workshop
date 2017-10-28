import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { get } from "lodash";
import Icon from "../Icon/Icon";

import "./Profile.css";

const Profile = ({ className, user = {}, onReset }) => {
  const classes = classNames("Profile", className);
  const fullName = /*get(user, "name.formatted") ||*/ user.displayName;

  return (
    <div className={classes}>
      <div className="Profile-background" />
      <Icon className="Profile-reset" type="refresh" onClick={onReset} />
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

Profile.propTypes = {
  className: PropTypes.string,
  user: PropTypes.shape({
    thumbnailUrl: PropTypes.string,
    name: PropTypes.object,
    displayName: PropTypes.string,
    preferredUsername: PropTypes.string,
    aboutMe: PropTypes.string
  }),
  onReset: PropTypes.func
};

Profile.defaultProps = {
  onReset() {}
};

export default Profile;
