import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends React.Component {
  compoentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    return <div>Post List component</div>;
  }
}

export default connect(
  null,
  { fetchPosts: fetchPosts }
)(PostList);
