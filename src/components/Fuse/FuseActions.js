import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import _ from "lodash";

import "./Fuse.css";

import Sound from "react-sound";
import soundFile from "./bomb.mp3";

const randomExplosion = WrappedComponent =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = { isExploding: false };
    }
    handleClick = e => {
      const { isActive, onClick } = this.props;
      const isExploding = !isActive && _.random(100) >= 50;
      this.setState(state => ({ isExploding }));
      onClick && onClick(e);
    };
    handleFinish = () => {
      this.setState({ isExploding: false });
    }
    render() {
      const { isExploding } = this.state;
      const classes = classNames(this.className, {
        "is-explode": isExploding
      });
      const wrapped = (
        <WrappedComponent {...this.props} className={classes} onClick={this.handleClick} />
      );
      return isExploding ? (
        <span>
          {wrapped}
          <Sound url={soundFile} playStatus={Sound.status.PLAYING} onFinishedPlaying={this.handleFinish} />
        </span>
      ) : (
        wrapped
      );
    }
  };

const Icon = ({ className, type, isActive, onClick }) => {
  const classes = classNames(className, "fa", {
    [`fa-${type}`]: true,
    "is-active": isActive
  });
  return (
    <button className="Icon" onClick={onClick}>
      <i className={classes} aria-hidden="true" />
    </button>
  );
};

const RandomExplosionIcon = randomExplosion(Icon);

const FuseActions = ({ id, user, bomb, onReply, onBomb }) => {
  onBomb = onBomb.bind(null, { id, bomb: !bomb });
  onReply = onReply.bind(null, { id, user });
  return (
    <div className="FuseActions">
      <Icon type="comment-o" className="FuseActions-action" onClick={onReply} />
      <RandomExplosionIcon
        type="bomb"
        isActive={bomb}
        className="FuseActions-action"
        onClick={onBomb}
      />
    </div>
  );
};

FuseActions.propTypes = {
  id: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired,
  bomb: PropTypes.bool.isRequired,
  onReply: PropTypes.func,
  onBomb: PropTypes.func
};

FuseActions.defaultProps = {
  onReply: () => {},
  onBomb: () => {}
};

export default FuseActions;
