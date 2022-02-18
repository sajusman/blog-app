import React from 'react';
import Blog from '../../../interfaces/Blog';
import { useNavigate } from "react-router-dom"


interface IProp {
    blog: Blog
}

function BlogItem(props: IProp) {
    const navigate = useNavigate();
    return (
        <div>
            <h3 className='blog-title' onClick={() => {
                navigate('/blogs/'.concat(props.blog.id));
            }}> {props.blog.title} </h3>
            <p> {props.blog.content}</p>
            <p>{props.blog.author}</p>
            <b>Category : </b> {props.blog.category} <b> Tags: </b>{props.blog.tags};
        </div>
    );
}

export default BlogItem;