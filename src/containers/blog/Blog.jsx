import React from "react";
import './blog.css';
import Article from '../../components/articles/Article'
import {blog01, blog02, blog03, blog04, blog05} from '../blog/imports';

const blog = () => {
    return (
        <div className="gpt3__blog section__padding" id="blog">
        <div className="gpt3__blog-heading">
        <h1 className="gradient__text">Our blogs are comming soon, stay tuned!</h1>
        </div>
        <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
            <Article imgUrl={blog01} date="Coming Soon!" text="House Robber problem." />
        </div>
        <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Coming Soon!" text="Minium Steps require to do to" />
        <Article imgUrl={blog03} date="Coming Soon!" text="Sliding Window Maximum" />
        <Article imgUrl={blog04} date="Coming Soon!" text="Next Greater Element" />
        <Article imgUrl={blog05} date="Coming Soon!" text="What is Abstraction?" /> 
        </div>
        </div>
    </div>
    )
}

export default blog;  
