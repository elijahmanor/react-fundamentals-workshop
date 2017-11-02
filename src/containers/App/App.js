import React, { Component } from "react";
import Toolbar from "../../components/Toolbar/Toolbar";
import Profile from "../../components/Profile/Profile";
import Ads from "../../components/Ads/Ads";
import Footer from "../../components/Footer/Footer";
import { getUser } from "../../services/user";

import "./App.css";

export default class App extends Component {
  state = { user: {} };
  componentDidMount() {
    getUser().then(user => this.setState({ user }));
  }
  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <Toolbar className="App-toolbar" user={user} />
        <Profile className="App-profile" user={user} />,
        <div className="App-list">PLACEHOLDER</div>
        <Ads className="App-ads" />
        <Footer className="App-footer" />
      </div>
    );
  }
}
