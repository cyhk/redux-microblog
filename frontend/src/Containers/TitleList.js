import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

/**
 * TitleList: renders list of titles from redux state
 */
class TitleList extends Component {
  render() {
    const { postsById, postsAllIds } = this.props;
    return (
      <ul>
        {postsAllIds.map(
          postId =>
            <li key={postId}>
              <Link to={`/posts/${postId}`}>
                {postsById[postId].title}
              </Link>
            </li>
          )
        }
      </ul>
    );

  }
}

function mapStateToProps(state) {
  return {
    postsById: state.posts.byId,
    postsAllIds: state.posts.allIds
  }
}

export default connect(mapStateToProps)(TitleList);