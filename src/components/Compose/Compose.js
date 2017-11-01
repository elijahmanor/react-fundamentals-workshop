import React, { Component } from "react";
import ReactModal from "react-modal";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import classNames from "classnames";

import "./Compose.css";

const MAX_FUSE_LENGTH = 256;
const WARNING_FUSE_LENGTH = 200;

class Compose extends Component {
  constructor(props) {
    super(props);
    this.handleCompose = this.handleCompose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = { fuse: props.fuse };
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
  handleChange(e) {
    this.setState({ fuse: e.target.value });
  }
  handleCompose() {
    this.props.onCompose({ message: this.state.fuse, user: this.props.user });
  }
  render() {
    const { isOpen, onClose } = this.props;
    const { fuse } = this.state;
    const isOver = fuse.length > MAX_FUSE_LENGTH;
    const classes = classNames("Compose-validation", {
      "Compose-validation--warn":
        fuse.length >= WARNING_FUSE_LENGTH && fuse.length <= MAX_FUSE_LENGTH,
      "Compose-validation--over": isOver
    });

    return (
      <ReactModal
        isOpen={isOpen}
        contentLabel="Minimal Modal Example"
        className="Compose-modal"
        overlayClassName="Compose-overlay"
      >
        <header className="Compose-header">
          <h3>Compose New Fuse</h3>
          <button className="Compose-close" onClick={onClose}>
            <i className="fa fa-times-circle" aria-hidden="true" />
          </button>
        </header>
        <div className="Compose-main">
          <textarea
            className="Compose-text"
            value={fuse}
            onChange={this.handleChange}
            ref={el => (this.input = el)}
          />
        </div>
        <div className="Compose-actions">
          <div className={classes}>{MAX_FUSE_LENGTH - fuse.length}</div>
          <Button disabled={!fuse.length || isOver} onClick={this.handleCompose}>
            Fuse
          </Button>
        </div>
      </ReactModal>
    );
  }
}

Compose.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCompose: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
};

Compose.defaultProps = {
  isOpen: false,
  onCompose() {},
  onClose() {},
  fuse: ""
};

export default Compose;
