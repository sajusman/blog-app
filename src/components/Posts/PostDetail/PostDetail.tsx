import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import PostService from '../../../services/PostService';
import { Post } from '../../../interfaces/Post';
import PostRowItem from '../PostRowItem/PostRowItem';
import Comments from '../Comments/Comments';
import Comment from '../../../interfaces/Comment';
import Loader from '../../../ui-components/Loader';

function PostDetail() {
    const location = useLocation();
    const postId = location.pathname.split("/")[2];

    const [post, setPost] = useState({} as Post);
    const [comments, setComments] = useState<Comment[]>([]);

    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetchData().then(values => {
            setPost(values[0]);
            setComments(values[1]);
            setLoading(false);
        });

    }, [postId]);


    const fetchData = () => {
        return Promise.all(
            [
                PostService.getPostById(postId),
                PostService.getPostsComment(postId)
            ]);
    }

    return (
        <>
            {loading ? <Loader loading={loading} /> : <PostRowItem key={postId} post={post} />}
            <div className='seperator' />
            <Comments comments={comments} postId={postId} />
        </>
    );
}

export default PostDetail;