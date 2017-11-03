import React, { Component } from "react";
import classNames from "classnames";
import Sound from "react-sound";
import soundFile from "../assets/bomb.mp3";
import { random } from "lodash";

export default SimpeComponent =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = { isExploding: false };
    }
    handleClick = e => {
      const { isActive, onClick } = this.props;
      const isExploding = !isActive && random(100) >= 50;
      this.setState(state => ({ isExploding }));
      onClick && onClick(e);
    };
    handleFinish = () => {
      this.setState({ isExploding: false });
    };
    render() {
      const { isExploding } = this.state;
      const classes = classNames(this.className, {
        "is-explode": isExploding
      });
      const wrapped = (
        <SimpeComponent {...this.props} className={classes} onClick={this.handleClick} />
      );
      return isExploding ? (
        <span>
          {wrapped}
          <Sound url={soundFile} playStatus="PLAYING" onFinishedPlaying={this.handleFinish} />
        </span>
      ) : (
        wrapped
      );
    }
  };
