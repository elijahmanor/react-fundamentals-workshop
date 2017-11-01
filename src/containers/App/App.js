import React, { Component } from "react";

// Containers
import Fuses from "../../containers/Fuses/Fuses";
import Toolbar from "../../containers/Toolbar/Toolbar";

// Components
import Profile from "../../components/Profile/Profile";
import Ads from "../../components/Ads/Ads";
import Footer from "../../components/Footer/Footer";

import { fetchUser, resetUser } from "../../redux/actions/user-actions";
import { connect } from "react-redux";

import "../../index.css";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    return (
      <div className="App">
        <Toolbar className="App-toolbar" />
        <Profile className="App-profile" user={this.props.user} onReset={this.props.onReset} />
        <Fuses className="App-list" />
        <Ads className="App-ads" />
        <Footer className="App-footer" />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData() {
      dispatch(fetchUser());
    },
    onReset() {
      dispatch(resetUser());
    }
  };
};

const mapStateToProps = state => {
  return {
    user: state.userState.user
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
