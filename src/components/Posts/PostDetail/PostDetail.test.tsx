import { render, waitForElementToBeRemoved, screen } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
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
        const { getByTestId } = render(mockPostDetail());
        expect(getByTestId("post-detail-loader")).toBeInTheDocument();
    });

    it("should be presenting data item once loaded", async () => {
        render(mockPostDetail());
        await waitForElementToBeRemoved(screen.queryByTestId("post-detail-loader"));
        expect(screen.queryByTestId("post-detail-loader")).not.toBeInTheDocument();
    })
})