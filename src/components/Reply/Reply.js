import React, { Component } from "react";
import ReactModal from "react-modal";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import classNames from "classnames";

import "./Reply.css";

const MAX_FUSE_LENGTH = 256;
const WARNING_FUSE_LENGTH = 200;

class Reply extends Component {
  constructor(props) {
    super(props);
    this.state = { fuse: props.fuse };
  }
  componentDidMount() {
    this.setInputFocus();
  }
  componentDidUpdate() {
    this.setInputFocus();
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.fuse !== nextProps.fuse) {
      this.setState({
        fuse: nextProps.fuse
      });
    }
  }
  setInputFocus() {
    if (this.props.isOpen) {
      this.input.focus();
    }
  }
  handleChange = e => {
    this.setState({ fuse: e.target.value });
  };
  handleCompose = () => {
    const { user, replyingTo } = this.props;
    this.props.onCompose({ message: this.state.fuse, user, replyingTo });
  };
  render() {
    const { isOpen, onClose, replyingTo } = this.props;
    const { fuse } = this.state;
    const isOver = fuse.length > MAX_FUSE_LENGTH;
    const classes = classNames("Reply-validation", {
      "Reply-validation--warn":
        fuse.length >= WARNING_FUSE_LENGTH && fuse.length <= MAX_FUSE_LENGTH,
      "Reply-validation--over": isOver
    });

    return (
      <ReactModal
        isOpen={isOpen}
        contentLabel="Minimal Modal Example"
        className="Reply-modal"
        overlayClassName="Reply-overlay"
      >
        <header className="Reply-header">
          <h3>Reply to {replyingTo.fullName}</h3>
          <button className="Reply-close" onClick={onClose}>
            <i className="fa fa-times-circle" aria-hidden="true" />
          </button>
        </header>
        <div className="Reply-main">
          <div className="Reply-replyingTo">Replying to @{replyingTo.userName}</div>
          <textarea
            className="Reply-text"
            value={fuse}
            onChange={this.handleChange}
            ref={el => (this.input = el)}
          />
        </div>
        <div className="Reply-actions">
          <div className={classes}>{MAX_FUSE_LENGTH - fuse.length}</div>
          <Button disabled={!fuse.length || isOver} onClick={this.handleCompose}>
            Defuse
          </Button>
        </div>
      </ReactModal>
    );
  }
}

Reply.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCompose: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  replyingTo: PropTypes.object
};

Reply.defaultProps = {
  isOpen: false,
  onCompose() {},
  onClose() {},
  replyingTo: { fullName: "", userName: "" }
};

export default Reply;
