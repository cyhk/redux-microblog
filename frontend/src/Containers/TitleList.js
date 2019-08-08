import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getTitles } from "../actionCreators";

/**
 * TitleList: renders list of titles from redux state
 */
class TitleList extends Component {
  componentDidMount() {
    this.props.getTitles();
  }
  render() {
    const { titles, err } = this.props;
    if (!titles){
      return <div>Loading...</div>
    }
    if (err){
      return <div>{err}</div>
    }
    return (
      <ul>
        {titles.map(
          title =>
            <li key={title.id}>
              <Link to={`/posts/${title.id}`}>
                {title.title}
              </Link>
              <p>{title.description}</p>
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
    err: state.err
  }
}

export default connect(mapStateToProps, { getTitles })(TitleList);