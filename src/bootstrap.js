import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import App from './components/app';
import reducers from './reducers';
import Blog from "./components/blog"
import BlogIndex from "./components/blog_index";
import ViewBlog from "./components/viewBlog";
const createStoreWithMiddleware = applyMiddleware()(createStore);

import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';


function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <div className="bt">
          <div className="NavBar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/blog_index">Index of Blogs</NavLink>

          </div>
          <div>
            <Route exect path='/' component={App} />
            <Route path='/blog' component={Blog} />
            <Route path='/blog_index' component={BlogIndex} />
            <Route path='/view-blog/:id' component={ViewBlog} />

          </div>
        </div>
      </BrowserRouter>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);