import React from 'react';
import BlogItem from './BlogItem/BlogItem';
import { selectBlogs } from "../../app/reducers/blogsReducer";
import { useAppSelector } from '../../app/hooks';
import CreateBlog from './CreateBlog/CreateBlog';
import Modal from '../../ui-components/Modal'


function Blogs() {
    const blogs = useAppSelector(selectBlogs);
    return (
        <>
            <div className='blogs-head-container'>
                <h2>Blogs</h2>
                <Modal
                    placeHolder="Create a blog"
                    children={<CreateBlog />}
                />
            </div>

            <div className='blog-list'>
                {blogs.map(blog => <BlogItem key={blog.id} blog={blog} />)}
            </div>
        </>
    );
}

export default Blogs;