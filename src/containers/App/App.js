import React, { Component } from "react";
import Toolbar from "../../components/Toolbar/Toolbar";
import Profile from "../../components/Profile/Profile";
import Fuses from "../../components/Fuses/Fuses";
import Ads from "../../components/Ads/Ads";
import Footer from "../../components/Footer/Footer";
import Compose from "../../components/Compose/Compose";
import Reply from "../../components/Reply/Reply";
import { getUser } from "../../services/user";
import { getFuses, updateFuse, addFuse } from "../../services/fuse";

import "../../index.css";
import "./App.css";

const getUserInfo = WrappedComponent => {
  return class GetUserInfo extends Component {
    state = { user: {} };
    componentDidMount() {
      getUser().then(user => this.setState({ user }));
    }
    render() {
      return <WrappedComponent {...this.props} {...this.state} />;
    }
  };
};

class UserInfo extends Component {
  state = { user: {} };
  componentDidMount() {
    getUser().then(user => this.setState({ user }));
  }
  render() {
    return this.props.children(this.state.user);
  }
}

const WrappedProfile = getUserInfo(Profile);

export default class App extends Component {
  state = {
    user: {},
    fuses: [],
    showCompose: false,
    showReply: false
  };
  componentDidMount() {
    this.fetchFuses();
  }
  fetchFuses = () => {
    getFuses().then(fuses => this.setState({ fuses }));
  };
  handleBomb = ({ id, bomb }, e) => {
    updateFuse({ id, bomb }).then(this.fetchFuses);
  };
  handleReply = ({ id, user }) => {
    const replyingTo = { id, ...user };
    this.setState({ replyingTo, showReply: true });
  };
  handleNew = () => {
    this.setState({ showCompose: true });
  };
  handleCompose = ({ message, user, replyingTo }) => {
    addFuse({ message, user, replyingTo }).then(this.fetchFuses);
    this.handleClose();
  };
  handleClose = () => {
    this.setState({ showCompose: false, showReply: false });
  };
  render() {
    const { user, fuses, showCompose, showReply, replyingTo } = this.state;

    return (
      <div className="App">
        <Toolbar className="App-toolbar" user={user} onNew={this.handleNew} />
        <UserInfo>
          {user => [
            <Profile key="profile" className="App-profile" user={user} />,
            <Compose
              key="compose"
              isOpen={showCompose}
              fuse={""}
              user={user}
              onCompose={this.handleCompose}
              onClose={this.handleClose}
            />,
            <Reply
              key="reply"
              isOpen={showReply}
              fuse={""}
              user={user}
              replyingTo={replyingTo}
              onCompose={this.handleCompose}
              onClose={this.handleClose}
            />
          ]}
        </UserInfo>
        <Fuses
          className="App-list"
          fuses={fuses}
          onBomb={this.handleBomb}
          onReply={this.handleReply}
        />
        <Ads className="App-ads" />
        <Footer className="App-footer" />
      </div>
    );
  }
}
