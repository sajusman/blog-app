import React from 'react';
import { Post } from '../../../interfaces/Post';
import { useNavigate } from "react-router-dom"

interface IProps {
    post: Post
}


function PostRowItem({ post }: IProps) {
    const navigate = useNavigate();
    return (
        <div className='post-row-item'>
            <h3 className='pointer' onClick={() => {
                navigate('/posts/'.concat(post.id))
            }}>{post.id + ') ' + post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
}

export default PostRowItem;