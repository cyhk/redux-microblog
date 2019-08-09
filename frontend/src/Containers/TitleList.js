import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getTitles, showSpinner } from "../actionCreators";
import "./TitleList.css";

/**
 * TitleList: renders list of titles from redux state
 */
class TitleList extends Component {
  componentDidMount() {
    if (this.props.titles.length === 0) {
      this.props.getTitles();
    }
  }

  render() {
    const { titles, loading, err } = this.props;
    if (loading) {
      return <div>Loading...</div>
    }
    if (err) {
      return <div>{err}</div>
    }
    return (
      <ul className="title-list">
        {titles.map(
          title =>
            <li key={title.id} className="title-list-post">
              <Link className="title-list-link" to={`/posts/${title.id}`}>
                {title.title}
              </Link>
              <p className="title-list-description">{title.description}</p>
            </li>
        )
        }
      </ul>
    );
  }
}

function mapStateToProps(state) {
  console.log("mapping state");
  return {
    titles: state.titles,
    loading: state.loading,
    err: state.err
  }
}

export default connect(mapStateToProps, { getTitles, showSpinner })(TitleList);