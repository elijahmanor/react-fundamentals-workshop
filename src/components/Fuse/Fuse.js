import React from "react";
import md5 from "md5";
import { format, formatDistanceStrict } from "date-fns";
import PropTypes from "prop-types";
import FuseActions from "./FuseActions";

import "./Fuse.css";

const Fuse = ({
  id,
  date,
  userName,
  fullName,
  avatar,
  email,
  message,
  replyingTo,
  bomb,
  onBomb,
  onReply
}) => {
  const url = avatar || `https://www.gravatar.com/avatar/${md5(email)}`;
  const user = { userName, fullName };

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
        {replyingTo && <div className="Fuse-replyingTo">Replying to @{replyingTo.userName}</div>}
        <div className="Fuse-message">{message}</div>
        <FuseActions id={id} user={user} bomb={bomb} onBomb={onBomb} onReply={onReply} />
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
  bomb: PropTypes.bool.isRequired,
  onBomb: PropTypes.func,
  onReply: PropTypes.func
};

React.defaultProps = {
  onBomb: () => {}
};

export default Fuse;
