import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import "./Profile.css";

const Profile = ({ className, user = {} }) => {
  const classes = classNames("Profile", className);
  const fullName = user.displayName;

  return (
    <div className={classes}>
      <div className="Profile-background" />
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
  })
};

Profile.defaultProps = {};

export default Profile;
