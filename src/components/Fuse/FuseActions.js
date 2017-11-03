import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon";
import randomExplosion from "../../helpers/randomExplosion";

import "./Fuse.css";

const RandomExplosionIcon = randomExplosion(Icon);

const FuseActions = ({ id, bomb, onBomb }) => {
  const handleClick = ({ isActive }) => {
    onBomb({ id, bomb: isActive });
  };
  return (
    <div className="FuseActions">
      <Icon type="comment-o" className="FuseActions-action" />
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
  bomb: PropTypes.bool.isRequired,
  onBomb: PropTypes.func
};

FuseActions.defaultProps = {
  onBomb() {}
};

export default FuseActions;
