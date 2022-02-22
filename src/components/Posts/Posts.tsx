import React, { useEffect, useState } from 'react';
import "./Posts.css";
import PostService from '../../services/PostService';
import { Post } from '../../interfaces/Post';
import PostRowItem from './PostRowItem/PostRowItem';
import Loader from '../../ui-components/Loader';


function Posts() {

    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [gridLayout, setGridLayout] = useState(true);

    useEffect(() => {
        PostService.getAllPosts().then(res => {
            setPosts(res);
            setLoading(false);
        });
        return () => {
            setPosts([]);
        };
    }, [])


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
                {loading ? <Loader loading={loading} testId="posts-list-loader" /> :
                    posts.map((post, index) => <PostRowItem key={post.id} post={post} index={index} />)}
            </div>
        </>
    );
}



export default Posts;