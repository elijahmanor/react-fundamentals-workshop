import React, { Component } from "react";
import Toolbar from "../../components/Toolbar/Toolbar";
import Profile from "../../components/Profile/Profile";
import Fuses from "../../components/Fuses/Fuses";
import Ads from "../../components/Ads/Ads";
import Footer from "../../components/Footer/Footer";
import { getUser } from "../../services/user";
import { getFuses, updateFuse } from "../../services/fuse";

import "./App.css";

export default class App extends Component {
  state = { user: {}, fuses: [] };
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
  render() {
    const { user, fuses } = this.state;
    return (
      <div className="App">
        <Toolbar className="App-toolbar" user={user} />
        <Profile className="App-profile" user={user} />
        <Fuses className="App-list" fuses={fuses} onBomb={this.handleBomb} />
        <Ads className="App-ads" />
        <Footer className="App-footer" />
      </div>
    );
  }
}
