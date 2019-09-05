
import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { makeVoteFromAPI } from "../actionCreators";

const Title = React.memo(({title, makeVoteFromAPI}) => {


  const handleUpvote = (evt) => {
    const id = evt.target.name;
    makeVoteFromAPI(id, "up");
  }

  const handleDownvote = (evt) => {
    const id = evt.target.name;
    makeVoteFromAPI(id, "down");
  }

  return (
    <li key={title.id} className="title-list-post">
      <div className="title-vote-container">
        <button className="title-vote-button vote-button" name={title.id} onClick={handleUpvote}>▲</button>
        <p className="vote-count">{title.votes}</p>
        <button className="title-vote-button vote-button" name={title.id} onClick={handleDownvote}>▼</button>
      </div>
      <div className="title-list-text-container">
        <Link className="title-list-link" to={`/posts/${title.id}`}>
          {title.title}
        </Link>
        <p className="title-list-description">{title.description}</p>
      </div>
    </li>)
})



export default connect(null, { makeVoteFromAPI })(Title);
