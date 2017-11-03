import React, { Component } from "react";
import PropTypes from "prop-types";
import { getUser } from "../../services/user";

class UserInfo extends Component {
  state = { user: {} };
  componentDidMount() {
    getUser().then(user => this.setState({ user }));
  }
  render() {
    return this.props.children(this.state.user);
  }
}

UserInfo.propTypes = {
  children: PropTypes.func.isRequired
};

export default UserInfo;
