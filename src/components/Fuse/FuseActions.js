import React from "react";
import PropTypes from "prop-types";

import Icon from "../Icon/Icon";

import "./Fuse.css";

const FuseActions = ({ id, bomb }) => {
  return (
    <div className="FuseActions">
      <Icon type="comment-o" className="FuseActions-action" />
      <Icon type="bomb" className="FuseActions-action" isActive={bomb} />
    </div>
  );
};

FuseActions.propTypes = {
  id: PropTypes.string.isRequired,
  bomb: PropTypes.bool.isRequired
};

FuseActions.defaultProps = {};

export default FuseActions;
