import React, { Component } from "react";
import Toolbar from "../../components/Toolbar/Toolbar";
import Compose from "../../components/Compose/Compose";
import { postFuse } from "../../redux/actions/fuse-actions";
import { connect } from "react-redux";

class ToolbarContainer extends Component {
  state = {
    showDialog: false
  };
  handleNew = ({ id, user }) => {
    this.setState({ showDialog: true });
  };
  handleCompose = ({ message, user, replyingTo }) => {
    this.props.onCompose({ message, user });
    this.handleClose();
  };
  handleClose = () => {
    this.setState({ showDialog: false });
  };
  render() {
    const { className, user } = this.props;
    const { showDialog } = this.state;

    return (
      <div className={className}>
        <Toolbar user={user} onNew={this.handleNew} />
        <Compose
          isOpen={showDialog}
          fuse={""}
          user={user}
          onCompose={this.handleCompose}
          onClose={this.handleClose}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCompose({ message, user }) {
      dispatch(postFuse({ message, user }));
    }
  };
};

const mapStateToProps = state => {
  return {
    user: state.userState.user
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToolbarContainer);
