import React, { Component } from 'react';
import Image from './Image';

export default class PhotoGrid extends Component {
  render() {
    return (
      <div class="photo-grid">
        {
          this.props.posts.map( (post, i) =>
            <Image {...this.props} key={i} i={i} post={post} /> )
        }
      </div>
    );
  }
}
