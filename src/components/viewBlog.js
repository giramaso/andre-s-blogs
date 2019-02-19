import React, { Component } from 'react';
import UpdateBlog   from "./updateBlog"
import { Link } from 'react-router-dom'


export default class ViewBlog extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            oneBlog: [],
            title: "",
            author: "",
            body: "",
        }
        this.deleteOurBlog= this.deleteOurBlog.bind(this)
    }

    deleteOurBlog() {
      const { id } = this.props.match.params

      fetch (`http://localhost:5000/delete/${id}`, {
        method: "DELETE",
        headers: {
          "accept": "application/json",
          "Content-Type": "application/json"
        },
        body:JSON.stringify({title:this.state.title, author:this.state.author, body:this.state.body})
      })
      .then(response => {return response.json();})
      .then(responseData => {return responseData;})
      .catch(err => {
        console.log("Fetch error" + err)
      })
      console.log("HA")


  }

    componentWillMount() {

        const { id } = this.props.match.params

        fetch (`http://localhost:5000/return_blog/${id}`, {
          method: "GET",
          headers: {
            "accept": "application/json",
            "Content-Type": "application/json"
          }
        })
        .then(response => {return response.json();})
        .then(responseData => {return responseData;})
        .then(data => {this.setState({oneBlog: data});})
        .catch(err => {
          console.log("Fetch error" + err)
        })
    }

  render() {
    return (
      <div className='ViewBlog'>
        {this.state.oneBlog.map((blogs) => (
            <div key={blogs[0]}>  
              <div>
                <p>Title: {blogs[1]}</p>
                <p>Author: {blogs[2]}</p>
                <p>Blog Body: {blogs[3]}</p>
              </div>
            </div>
          ))}
          <div>
              <UpdateBlog ourProp = {this.state.oneBlog} />
          </div>
          <div>
            {/* <button onClick={this.deleteOurBlog}>Delete!</button> */}
            <Link onClick={this.deleteOurBlog} to={{pathname: `/blog_index`}} >Delete!</Link>
          </div>
      </div>
    );
  }
}