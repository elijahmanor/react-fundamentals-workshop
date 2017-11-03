import React, { Component } from "react";
import { getUser } from "../services/user";

export default BasicComponent => {
  class UserInfo extends Component {
    state = { user: {} };
    componentDidMount() {
      getUser().then(user => {
        this.setState({ user });
        this.props.onLoad({ user });
      });
    }
    render() {
      return <BasicComponent {...this.props} {...this.state} />;
    }
  }

  UserInfo.defaultProps = {
    onLoad() {}
  };

  return UserInfo;
};
