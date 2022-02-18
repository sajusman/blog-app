import React from 'react';
import BlogItem from '../BlogItem/BlogItem';
import { useLocation } from "react-router-dom"
import { selectBlogs } from "../../../app/reducers/blogsReducer";
import { useAppSelector } from '../../../app/hooks';


function BlogDetail() {
    const location = useLocation();
    const blogId = location.pathname.split("/")[2];
    const blogs = useAppSelector(selectBlogs);
    const blog = blogs.find(blog => blog.id === blogId)!;
    return (
        <>
            <BlogItem key={blog.id} blog={blog} />
        </>
    );
}

export default BlogDetail;