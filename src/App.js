import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "./User/action-userDetails";

class App extends Component {
  constructor(props) {
    super(props);
  }
  handleSubmit = () => {
    this.props.getUserDetails(
      this.props.userDetails.userId,
      this.props.userDetails.password
    );
  };
  handleUserId = e => {
    console.log("searched string", e.target.value);
    this.props.handleUserId(e.target.value);
  };
  handlePassWord = e => {
    console.log("searched string", e.target.value);
    this.props.handlePassword(e.target.value);
  };
  handleLogout = () => {
    this.props.handleLogout();
  };

  render() {
    console.log("userData", sessionStorage.getItem("token"));

    return (
      <div className="App" ref="app">
        <div className="header">
          <div className="log-out" onClick={() => this.handleLogout()}>
            Log Out
          </div>
        </div>
        {sessionStorage.getItem("token") !== "null" &&
        sessionStorage.getItem("token") !== null ? (
          <div>Dashboard Component</div>
        ) : (
          <div className="search-View">
            <div>
              <input
                type="text"
                ref="userId"
                className="text-view"
                onChange={e => this.handleUserId(e)}
              />
            </div>
            <div>
              <input
                type="text"
                ref="password"
                className="text-view"
                onChange={e => this.handlePassWord(e)}
              />
            </div>
            <button
              className="submit-button"
              onClick={() => this.handleSubmit()}
            >
              Submit
            </button>
          </div>
        )}
        <div />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userDetails: state.UserDetails
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...Actions }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
