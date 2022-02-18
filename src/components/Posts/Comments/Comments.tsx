import React from 'react';
import PostService from '../../../services/PostService';
import { useForm } from '../../../custom-hooks/useForm';
import Comment from "../../../interfaces/Comment";


interface IProps {
    comments: Comment[];
    postId: string
}

function Comments({ comments, postId }: IProps) {

    function handleSubmit() {
        PostService.addComment(comment).then(res => {
            console.log(res)
        });
    }

    const [comment, handleInput] = useForm<Comment>({
        postId: "",
        id: postId,
        name: "",
        email: "",
        body: ""
    });

    return (
        <div className='comments'>
            <h2 className='centre-text'>Comments</h2>
            <ul>
                {comments.map(comment => {
                    return (<>
                        <span>Commented by : {comment.name}</span>
                        <li>{comment.body}</li>
                    </>)
                })}
            </ul>
            <div className='comment-box-container'>
                <label>Share you thoughts with us!</label>
                <input name="name" value={comment.name} onChange={handleInput} placeholder="Your Name"></input>
                <textarea name="body" value={comment.body} onChange={handleInput} placeholder="Comment"></textarea>

                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}

export default Comments;