import React from 'react';
import "../Blogs.css";
import Blog from '../../../interfaces/Blog';
import {
    addBlog
} from '../../../app/reducers/blogsReducer';
import { useAppDispatch } from '../../../app/hooks';
import { useForm } from '../../../custom-hooks/useForm';

function CreateBlog({ handleModalLeave }: any) {
    const [blog, handleInput] = useForm<Blog>({ title: "", author: "", content: "", category: "", tags: "", id: "" });
    const dispatch = useAppDispatch();


    function submitBlog(e: any) {
        e.preventDefault();
        dispatch(addBlog(blog));
        handleModalLeave();
    }

    return (
        <div className='create-blog'>
            <h2>Create a Blog</h2>
            <form>
                <label>Title</label>
                <input name="title" value={blog.title} onChange={handleInput}>
                </input>

                <label>Written By</label>
                <input name="author" value={blog.author} onChange={handleInput}></input>

                <label>Content</label>
                <textarea name="content" value={blog.content} onChange={handleInput}></textarea>

                <label>Category</label>
                <input name="category" onChange={handleInput}></input>

                <label>Tags</label>
                <input name="tags" onChange={handleInput}></input>

                <button onClick={submitBlog}>Submit</button>
            </form>
        </div >
    );
}

export default CreateBlog;