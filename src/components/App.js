import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/index';

class App extends Component {
  render() {
    return (
      <div>
        <h1 class="main-title">
          <Link to='/'>
            PhotoManager
          </Link>
          <p>Lets pretend this is an actual instagram-ish app</p>
          {React.cloneElement(this.props.children, this.props)}
        </h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
