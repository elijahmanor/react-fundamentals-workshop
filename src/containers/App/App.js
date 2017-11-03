import React, { Component } from "react";
import Toolbar from "../../components/Toolbar/Toolbar";
import Compose from "../../components/Compose/Compose";
import Profile from "../../components/Profile/Profile";
import Fuses from "../../components/Fuses/Fuses";
import Ads from "../../components/Ads/Ads";
import Footer from "../../components/Footer/Footer";
import { getUser } from "../../services/user";
import { getFuses, updateFuse, addFuse } from "../../services/fuse";
import getUserInfo from "../../helpers/getUserInfo";

import "./App.css";

const WrappedProfile = getUserInfo(Profile);

export default class App extends Component {
  state = { user: {}, fuses: [], showCompose: false };
  componentDidMount() {
    getUser().then(user => this.setState({ user }));
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
  render() {
    const { user, fuses, showCompose } = this.state;
    return (
      <div className="App">
        <Toolbar className="App-toolbar" user={user} onNew={this.handleNew} />
        <Compose
          isOpen={showCompose}
          user={user}
          onCompose={this.handleCompose}
          onClose={this.handleClose}
        />
        <Profile className="App-profile" user={user} />
        <Fuses className="App-list" fuses={fuses} onBomb={this.handleBomb} />
        <Ads className="App-ads" />
        <Footer className="App-footer" />
      </div>
    );
  }
}
