import React, { Component } from 'react';

const Comments = React.createClass({
  fetchComment(comment, i) {
    return (
      <div key={i} class="comment">
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button onClick={this.props.removeComment.bind(null, this.props.params.postid, i)} class="remove-comment">&times;</button>
        </p>
      </div>
    );
  },

  handleSubmit(e) {
    e.preventDefault();
    const { postid } = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postid, author, comment);
    this.refs.commentForm.reset();
  },

  render() {
    return (
      <div class="comments">
        {this.props.comment.map(this.fetchComment)}
        <form  onSubmit={this.handleSubmit} ref='commentForm' class="comment-form">
          <input ref='author' type="text" placeholder="nickname"/>
          <input ref='comment' type="text" placeholder="message"/>
          <input type="submit" hidden />
        </form>
      </div>
    );
  }

});

export default Comments;
