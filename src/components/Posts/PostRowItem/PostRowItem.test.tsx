import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Post } from '../../../interfaces/Post';
import PostRowItem from "./PostRowItem";


const mockPostDI: Post = {
    userId: 1,
    id: "1",
    title: "Post Row Item Title",
    body: "Post Row Item Title Body"
}

const mockPostItem = () => {
    return (
        <BrowserRouter>
            <PostRowItem post={mockPostDI} />
        </BrowserRouter>
    )
};


describe("Post Row Item", () => {
    it("should render post item's heading", () => {
        render(mockPostItem());
        expect(screen.getByText(`${mockPostDI.id}) ${mockPostDI.title}`)).toBeInTheDocument();
    });

    it("should render post item's body", () => {
        render(mockPostItem());
        expect(screen.getByText(mockPostDI.body)).toBeInTheDocument();
    })
})