import React, { Component } from 'react';

export default class UpdateBlog extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: 0,
            title: "",
            author: "",
            body: "",
            formHidden: true
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
        this.editInfo = this.editInfo.bind(this)
    }


    editInfo() {
       this.props.ourProp.map((x) => {
            this.setState({id: x[0]})
            this.setState({title: x[1]})
            this.setState({author: x[2]})
            this.setState({body: x[3]})
            this.setState({formHidden: !this.state.formHidden})
       })
    }


    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        let title = this.state.title;
        let author = this.state.author;
        let body = this.state.body;
        fetch(`http://localhost:5000/update_blog/${this.state.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({title:title, author:author, body:body})
        }).then(res => res.json())
        .then(responseData => {return responseData;})
        .catch((err) => console.log(err))

    }

  render() {
    return (
      <div className='blog'>
        <h1 onClick= {this.editInfo}>Press here to Edit!!!!!!!!!</h1>

        <form onSubmit={this.handleSubmit} style = {{visibility: this.state.formHidden ? "hidden" : "visible"}}>
            <label>Title</label>
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
            <label>Author</label>
            <input type="text" name="author"value={this.state.author} onChange={this.handleChange}/>
            <label>Main Blog</label>
            <input type="text" name="body" value={this.state.body} onChange={this.handleChange}/>
            <input type="submit" value="submit"/>
	    </form>
        {console.log(this.props.ourProp[0])}
      </div>
    );
  }
}