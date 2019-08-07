import React, { Component } from 'react';
import { Link } from "react-router-dom";

/**
 * TitleList: renders list of titles from redux state
 */
class TitleList extends Component {
  render() {
    //grab posts from redux
    let posts = this.props.posts
    return (
      <ul>
        {posts.map(post =>
          <li><Link href={`/posts/${post.id}`}>{post.title}</Link></li>
        )}
      </ul>
    );

  }
}

export default TitleList;