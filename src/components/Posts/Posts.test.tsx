import { findAllByTestId, findByTestId, fireEvent, getByTestId, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Posts from "./Posts";
import { act } from "react-dom/test-utils";
import { Post } from "../../interfaces/Post"
import { ReactElement } from "react";

const mockPost = () => {
    return (<BrowserRouter>
        <Posts />
    </BrowserRouter>);
}

const mockPostsData: Post[] = [
    {
        userId: 1,
        id: "1",
        title: "Mock Post Data Title 1",
        body: "Mock Post Data Body 1"
    },
    {
        userId: 1,
        id: "2",
        title: "Mock Post Data Title 2",
        body: "Mock Post Data Body 2"
    }
]

const mockResponse = (input: RequestInfo): Promise<any> => {
    return Promise.resolve({
        json: () => Promise.resolve(mockPostsData)
    })
}

describe("Posts Page elements exists", () => {
    it("should render Posts heading", () => {
        const { getByText } = render(mockPost())
        expect(getByText("Posts")).toBeInTheDocument();
    });

    it("should render grid button", () => {
        const { getByRole } = render(mockPost())
        expect(getByRole("button", {
            name: "Grid"
        })).toBeInTheDocument();
    })

    it("should render Stack button", () => {
        const { getByRole } = render(mockPost())
        expect(getByRole("button", {
            name: "Stack"
        })).toBeInTheDocument();
    })
});

describe("Posts Page styling", () => {
    it("should render Posts in grid style by default", () => {
        const { getByTestId } = render(mockPost())
        expect(getByTestId("posts-list").className).toBe("posts-container");
    });

    it("should render Posts in grid style on click grid btn", () => {
        const { getByRole, getByTestId } = render(mockPost());
        fireEvent.click(getByRole("button", {
            name: "Grid"
        }));
        expect(getByTestId("posts-list").className).toBe("posts-container");
        // expect(getByTestId("posts-list")).toHaveClass("posts-container")
    });

    it("should render Posts in stack style on click stack btn", () => {
        const { getByRole, getByTestId } = render(mockPost());
        fireEvent.click(getByRole("button", {
            name: "Stack"
        }));
        expect(getByTestId("posts-list").className).toBe("");
    });
});


describe("Post page data", () => {

    it("should render empty post list as default", () => {
        const { queryAllByTestId } = render(mockPost());
        expect(queryAllByTestId(/post-row-item-[0-9]+/).length).toBe(0);
    });


    it("should render post item", async () => {
        jest.spyOn(global, "fetch").mockImplementation(mockResponse);
        const { findByTestId } = render(mockPost());
        expect(await findByTestId("post-row-item-0")).toBeInTheDocument();
    });

    it("should render post items", async () => {
        jest.spyOn(global, "fetch").mockImplementation(mockResponse);
        const { findAllByTestId } = render(mockPost());
        expect((await findAllByTestId(/post-row-item-[0-9]+/)).length).toBe(2);
    });
});