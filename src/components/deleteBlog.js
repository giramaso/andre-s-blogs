import React, {Component} from "react";

export default class DeleteBlog extends Component{
    constructor(props){
        super(props)

        this.DeleteBlog = this.DeleteBlog.bind(this)
    }

    deleteOurBlog(){
        const {id} = this.props.match.params
    }

    render(){
        return (
            <div>
                <button onClick = {this.deleteOurBlog}>delete</button>
            </div>
        )
    }
}