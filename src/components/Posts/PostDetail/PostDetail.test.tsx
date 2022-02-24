import { render, waitForElementToBeRemoved, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import PostDetail from "./PostDetail";

const mockPostDetail = () => {
    return (
        <BrowserRouter>
            <PostDetail />
        </BrowserRouter>
    )
}

describe('Post Detail', () => {
    it("should be loading on load", () => {
        render(mockPostDetail());
        expect(screen.getByTestId("post-detail-loader")).toBeInTheDocument();
    });

    it("should be presenting data item once loaded", async () => {

        render(mockPostDetail());
        await waitForElementToBeRemoved(await screen.findByTestId("post-detail-loader"));
        expect(screen.queryByTestId("post-detail-loader")).not.toBeInTheDocument();
    })
})