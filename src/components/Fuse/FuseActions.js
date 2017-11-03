import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon";
import randomExplosion from "../../helpers/randomExplosion";

import "./Fuse.css";

const RandomExplosionIcon = randomExplosion(Icon);

const FuseActions = ({ id, user, bomb, onBomb, onReply }) => {
  const handleClick = ({ isActive }) => {
    onBomb({ id, bomb: isActive });
  };
  const handleReply = () => {
    onReply({ id, user });
  };
  return (
    <div className="FuseActions">
      <Icon type="comment-o" className="FuseActions-action" onClick={handleReply} />
      <RandomExplosionIcon
        type="bomb"
        className="FuseActions-action"
        isActive={bomb}
        onClick={handleClick}
      />
    </div>
  );
};

FuseActions.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  bomb: PropTypes.bool.isRequired,
  onBomb: PropTypes.func
};

FuseActions.defaultProps = {
  onBomb() {}
};

export default FuseActions;
