import Comment from "../interfaces/Comment";

async function getAllPosts() {
    return await (await fetch("https://jsonplaceholder.typicode.com/posts")).json();
}

async function getPostById(id: string) {
    return await (await fetch("https://jsonplaceholder.typicode.com/posts/" + id)).json();
}

async function getPostsComment(id: string) {
    return await (await fetch("https://jsonplaceholder.typicode.com/posts/" + id + "/comments")).json();
}

async function addComment(comment: Comment) {
    comment.id = "1";
    return await (await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(comment),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })).json();
}

const PostService = { getAllPosts, getPostById, getPostsComment, addComment };

export default PostService;