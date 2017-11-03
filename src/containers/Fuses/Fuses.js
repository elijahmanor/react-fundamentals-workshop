import React, { Component } from "react";
import Fuses from "../../components/Fuses/Fuses";
import Reply from "../../components/Reply/Reply";
import { fetchFuses, putFuse, postFuse } from "../../redux/actions/fuse-actions";
import { connect } from "react-redux";

class FusesContainer extends Component {
  state = {
    fuses: [],
    showDialog: false
  };
  componentDidMount() {
    this.props.fetchData();
  }
  handleReply = ({ id, user }) => {
    const replyingTo = { id, ...user };
    this.setState({ replyingTo, showDialog: true });
  };
  handleCompose = ({ message, user, replyingTo }) => {
    this.props.onCompose({ message, user, replyingTo });
    this.handleClose();
  };
  handleClose = () => {
    this.setState({ showDialog: false });
  };
  render() {
    const { className, fuses, user, onBomb } = this.props;
    const { showDialog, replyingTo } = this.state;

    return (
      <div className={className}>
        <Fuses fuses={fuses} onBomb={onBomb} onReply={this.handleReply} />
        <Reply
          isOpen={showDialog}
          user={user}
          fuse={""}
          replyingTo={replyingTo}
          onCompose={this.handleCompose}
          onClose={this.handleClose}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData() {
      dispatch(fetchFuses());
    },
    onBomb({ id, bomb }, e) {
      dispatch(putFuse({ id, bomb }));
    },
    onCompose({ message, user, replyingTo }) {
      dispatch(postFuse({ message, user, replyingTo }));
    }
  };
};

const mapStateToProps = state => {
  return {
    user: state.userState.user,
    fuses: state.fuseState.fuses
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FusesContainer);
