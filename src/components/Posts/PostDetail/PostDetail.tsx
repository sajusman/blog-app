import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import PostService from '../../../services/PostService';
import { Post } from '../../../interfaces/Post';
import PostRowItem from '../PostRowItem/PostRowItem';
import Comments from '../Comments/Comments';
import Comment from '../../../interfaces/Comment';

function PostDetail() {
    const location = useLocation();
    const postId = location.pathname.split("/")[2];

    const [post, setPost] = useState({} as Post);
    const [comments, setComments] = useState<Comment[]>([]);


    useEffect(() => {
        PostService.getPostById(postId).then(res => {
            setPost(res);
        });

        PostService.getPostsComment(postId).then(res => {
            setComments(res);
        })
    }, [postId]);


    return (
        <><PostRowItem key={postId} post={post} />
            <div className='seperator' />
            <Comments comments={comments} postId={postId} />
        </>
    );
}

export default PostDetail;