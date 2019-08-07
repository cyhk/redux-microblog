import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

/**
 * TitleList: renders list of titles from redux state
 */
class TitleList extends Component {
  render() {
    //grab posts from redux
    let posts = this.props.posts
    return (
      <ul>
        {Object.keys(posts).map(
          id => <li><Link to={`/posts/${id}`}>{posts[id].title}</Link></li>
          )}
      </ul>
    );

  }
}

function mapStateToProps(state){
  return { posts: state.posts }
}

export default connect(mapStateToProps)(TitleList);