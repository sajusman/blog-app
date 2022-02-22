import React from 'react';
import { Post } from '../../../interfaces/Post';
import { useNavigate } from "react-router-dom"

interface IProps {
    post: Post;
    index?: number;
}


function PostRowItem({ post, index }: IProps) {
    const navigate = useNavigate();
    return (
        <div data-testid={`post-row-item-${index}`} className='post-row-item'>
            <h3 className='pointer' onClick={() => {
                navigate('/posts/'.concat(post.id))
            }}>{post.id + ') ' + post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
}

export default PostRowItem;