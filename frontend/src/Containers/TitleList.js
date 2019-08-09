import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getTitles, showSpinner, makeVote } from "../actionCreators";
import "./TitleList.css";

/**
 * TitleList: renders list of titles from redux state
 */
class TitleList extends Component {
  constructor(props) {
    super(props);

    this.handleUpvote = this.handleUpvote.bind(this);
    this.handleDownvote = this.handleDownvote.bind(this);
  }

  componentDidMount() {
    if (this.props.titles.length === 0) {
      this.props.getTitles();
    }
  }

  handleUpvote(evt) {
    const id = evt.target.name;
    this.props.makeVote(id, "up", "title");
  }

  handleDownvote(evt) {
    const id = evt.target.name;
    this.props.makeVote(id, "down", "title");
  }

  render() {
    const { titles, loading, err } = this.props;
    if (loading) {
      return <div>Loading...</div>
    }
    if (err) {
      return <div>{err}</div>
    }
    let titlesCopy = [...titles]
    titlesCopy.sort((title1, title2) => title2.votes - title1.votes);

    console.log(titlesCopy)
    return (
      <ul className="title-list">
        {titlesCopy.map(
          title =>
            <li key={title.id} className="title-list-post">
              <div className="title-vote-container">
                <button className="title-vote-button vote-button" name={title.id} onClick={this.handleUpvote}>▲</button>
                <p className="vote-count">{title.votes}</p>
                <button className="title-vote-button vote-button" name={title.id} onClick={this.handleDownvote}>▼</button>
              </div>
              <div className="title-list-text-container">
                <Link className="title-list-link" to={`/posts/${title.id}`}>
                  {title.title}
                </Link>
                <p className="title-list-description">{title.description}</p>
              </div>
            </li>
        )
        }
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    titles: state.titles,
    loading: state.loading,
    err: state.err
  }
}

export default connect(mapStateToProps, { getTitles, showSpinner, makeVote })(TitleList);