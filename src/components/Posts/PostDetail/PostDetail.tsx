import React, { useCallback, useEffect, useState } from 'react';
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

    const fetchData = useCallback(() => {
        return Promise.all(
            [
                PostService.getPostById(postId),
                PostService.getPostsComment(postId)
            ]);
    }
        , [postId]);

    useEffect(() => {
        fetchData().then(values => {
            setPost(values[0]);
            setComments(values[1]);
            setLoading(false);
        });


        return () => {
            setPost({} as Post);
            setComments([]);
        }
    }, [postId, fetchData]);




    return (
        <>
            {loading ? <Loader loading={loading} testId="post-detail-loader" /> : <PostRowItem key={postId} post={post} />}
            <div className='seperator' />
            <Comments comments={comments} postId={postId} />
        </>
    );
}

export default PostDetail;