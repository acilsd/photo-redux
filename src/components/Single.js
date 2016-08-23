import React, { Component } from 'react';
import Image from './Image';
import Comments from './Comments';

export default class Single extends Component {
  render() {
    const {postid} = this.props.params;
    const i = this.props.posts.findIndex((post) => post.code === postid);
    const post = this.props.posts[i];
    const comment = this.props.comments[postid] || [];

    return (
      <div class="single-photo">
        <Image i={i} post={post} {...this.props} />
        <Comments {...this.props} comment={comment} />
      </div>
    );
  }
}
