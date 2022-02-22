import React, { useEffect, useState } from 'react';
import "./Posts.css";
import PostService from '../../services/PostService';
import { Post } from '../../interfaces/Post';
import PostRowItem from './PostRowItem/PostRowItem';


function Posts() {

    const [posts, setPosts] = useState<Post[]>([]);
    useEffect(() => {
        PostService.getAllPosts().then(res => {
            setPosts(res)
        });
        return () => {
            setPosts([]); // This worked for me
        };
    }, [])

    const [gridLayout, setGridLayout] = useState(true);

    return (
        <>
            <div className='post-controler'>
                <h2>Posts</h2>
                <div>
                    <button onClick={() => {
                        setGridLayout(true);
                    }}>Grid</button>
                    <button onClick={() => {
                        setGridLayout(false);
                    }}>Stack</button>
                </div>
            </div>
            <div data-testid="posts-list" className={gridLayout ? 'posts-container' : ''}>
                {posts.map((post, index) => <PostRowItem key={post.id} post={post} index={index} />)}
            </div>
        </ >
    );
}



export default Posts;