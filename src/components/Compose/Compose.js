import React, { Component } from "react";
import ReactModal from "react-modal";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import classNames from "classnames";

import "./Compose.css";

class Compose extends Component {
  render() {
    return (
      <ReactModal
        isOpen={false}
        contentLabel="Compose"
        className="Compose-modal"
        overlayClassName="Compose-overlay"
      >
        COMPOSE
      </ReactModal>
    );
  }
}

Compose.propTypes = {};

Compose.defaultProps = {};

export default Compose;
