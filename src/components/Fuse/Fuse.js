import React from "react";
import md5 from "md5";
import { format, formatDistanceStrict } from "date-fns";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Fuse.css";

const Fuse = ({ id, date, userName, fullName, avatar, email, message, bomb }) => {
  const url = avatar || `https://www.gravatar.com/avatar/${md5(email)}`;
  const user = { userName, fullName };
  const classes = classNames("fa fa-bomb", {
    "is-active": bomb
  });

  return (
    <div className="Fuse">
      <img className="Fuse-avatar" alt={`${fullName}'s Avatar`} src={url} />
      <article className="Fuse-body">
        <header className="Fuse-header">
          <div className="Fuse-fullName">{fullName}</div>
          <span>&nbsp;</span>
          <div className="Fuse-userName">@{userName}</div>
          <span>&nbsp;—&nbsp;</span>
          <div className="Fuse-date" title={format(date, "LLL")}>
            {formatDistanceStrict(date, new Date())}
          </div>
        </header>
        <div className="Fuse-message">{message}</div>
        <div className="Fuse-actions">
          <button className="Fuse-action">
            <i className="fa fa-comment-o" aria-hidden="true" />
          </button>
          <button className="Fuse-action">
            <i className={classes} aria-hidden="true" />
          </button>
        </div>
      </article>
    </div>
  );
};

Fuse.propTypes = {
  id: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  userName: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  email: PropTypes.string,
  message: PropTypes.string.isRequired,
  bomb: PropTypes.bool.isRequired
};

export default Fuse;
