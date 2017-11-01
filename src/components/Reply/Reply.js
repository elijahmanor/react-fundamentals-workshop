import React, { Component } from "react";
import ReactModal from "react-modal";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import classNames from "classnames";
import negativeWords from "datasets-liu-negative-opinion-words-en";

import "./Reply.css";

const MAX_FUSE_LENGTH = 256;
const WARNING_FUSE_LENGTH = 200;

class Reply extends Component {
  constructor(props) {
    super(props);
    this.state = { fuse: props.fuse, isShaking: false };
  }
  componentDidMount() {
    this.setInputFocus();
  }
  componentDidUpdate() {
    this.setInputFocus();
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.isOpen !== nextProps.isOpen) {
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
  hasNegativeWords(message) {
    return message.split(" ").some(word => negativeWords.includes(word));
  }
  handleCompose = () => {
    const { user, replyingTo } = this.props;
    const { fuse: message } = this.state;

    if (this.hasNegativeWords(message)) {
      this.setState({ isShaking: true });
      window.setTimeout(() => {
        this.props.onCompose({ message, user, replyingTo });
        this.setState({ isShaking: false });
      }, 1000);
    } else {
      this.props.onCompose({ message, user, replyingTo });
    }
  };
  render() {
    const { isOpen, onClose, replyingTo } = this.props;
    const { fuse, isShaking } = this.state;
    const modalClasses = classNames("Reply-modal", {
      "is-shaking": isShaking
    });
    const isOver = fuse.length > MAX_FUSE_LENGTH;
    const validationClasses = classNames("Reply-validation", {
      "Reply-validation--warn":
        fuse.length >= WARNING_FUSE_LENGTH && fuse.length <= MAX_FUSE_LENGTH,
      "Reply-validation--over": isOver
    });

    return (
      <ReactModal
        isOpen={isOpen}
        contentLabel="Minimal Modal Example"
        className={modalClasses}
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
          <div className={validationClasses}>{MAX_FUSE_LENGTH - fuse.length}</div>
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
