import React, { Component } from "react";

class Post extends Component {
  async componentDidMount() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data =  await res.json();
    console.log(data)
  }
  render() {
    return (
      <div>
        <h1>Posts</h1>
      </div>
    );
  }
}

export default Post;
