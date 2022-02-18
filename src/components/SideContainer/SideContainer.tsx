import React from 'react';
import "./SideContainer.css";
import { selectBlogs } from "../../app/reducers/blogsReducer";
import { useAppSelector } from '../../app/hooks';

function SideContainer() {

    const blogs = useAppSelector(selectBlogs);
    const authors = blogs.map(blog => blog.author);
    const categories = blogs.map(blog => blog.category);
    const tags = blogs.map(blog => blog.tags);

    return (
        <div className='side-container'>
            <h2>Side Container</h2>
            <ul>
                <li>Authors</li>
                <ul>
                    {
                        authors.map(author => <li>{author}</li>)
                    }
                </ul>
                <li>Categories</li>
                <ul>
                    {
                        categories.map(category => <li>{category}</li>)
                    }
                </ul>
                <li>Tags</li>
                <ul>
                    {
                        tags.map(tag => <li>{tag}</li>)
                    }
                </ul>
            </ul>
        </div>
    );
}

export default SideContainer;