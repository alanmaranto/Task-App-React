import React, { Component } from "react";

const initialState = {
    posts: []
}
class Post extends Component {
    constructor(props){
        super(props)
        this.state = initialState;
    }
    
  async componentDidMount() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data =  await res.json();
    this.setState({
        posts: data
    })
}
  render() {
      const { posts } = this.state;
      console.log(posts)
    return (
      <div>
        <h1>Posts</h1>
        {posts.map(post => {
            return <div key={post.id}>
                <h1>{post.title}</h1>
                <span>{post.body}</span>
            </div>
        })}
      </div>
    );
  }
}

export default Post;
