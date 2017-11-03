import React, { Component } from "react";
import Toolbar from "../../components/Toolbar/Toolbar";
import Compose from "../../components/Compose/Compose";
import Profile from "../../components/Profile/Profile";
import Fuses from "../../components/Fuses/Fuses";
import Ads from "../../components/Ads/Ads";
import Footer from "../../components/Footer/Footer";
import UserInfo from "../../components/UserInfo/UserInfo";
import { getFuses, updateFuse, addFuse } from "../../services/fuse";

import "./App.css";

export default class App extends Component {
  state = { user: {}, fuses: [], showCompose: false };
  componentDidMount() {
    this.fetchFuses();
  }
  fetchFuses = () => {
    getFuses().then(fuses => this.setState({ fuses }));
  };
  handleBomb = ({ id, bomb }, e) => {
    updateFuse({ id, bomb }).then(this.fetchFuses);
  };
  handleNew = () => {
    this.setState({ showCompose: true });
  };
  handleClose = () => {
    this.setState({ showCompose: false });
  };
  handleCompose = ({ message, user }) => {
    addFuse({ message, user }).then(this.fetchFuses);
    this.handleClose();
  };
  handleLoad = ({ user }) => {
    this.setState({ user });
  };
  render() {
    const { user, fuses, showCompose } = this.state;
    return (
      <div className="App">
        <Toolbar className="App-toolbar" onNew={this.handleNew} />
        <UserInfo>
          {user => {
            return [
              <Profile key="profile" className="App-profile" user={user} />,
              <Compose
                key="compose"
                isOpen={showCompose}
                user={user}
                onCompose={this.handleCompose}
                onClose={this.handleClose}
              />
            ];
          }}
        </UserInfo>
        <Fuses className="App-list" fuses={fuses} onBomb={this.handleBomb} />
        <Ads className="App-ads" />
        <Footer className="App-footer" />
      </div>
    );
  }
}
