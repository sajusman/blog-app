import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import "./NavigationBar.css";

export default function NavigationBar() {

    const navigate = useNavigate();
    return (
        <div className='nav-bar'>
            <h2 onClick={() => {
                navigate('/')
            }}>The Blog App</h2>
            <nav>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/blogs">Blogs</Link>
                    <Link to="/posts">Posts</Link>
                </ul>
            </nav>
        </div>
    )
}
