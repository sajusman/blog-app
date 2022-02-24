import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Posts from "./Posts";
import { Post } from "../../interfaces/Post"
import userEvent from "@testing-library/user-event";

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
        render(mockPost())
        expect(screen.getByText("Posts")).toBeInTheDocument();
    });

    it("should render grid button", () => {
        render(mockPost())
        expect(screen.getByRole("button", {
            name: "Grid"
        })).toBeInTheDocument();
    })

    it("should render Stack button", () => {
        render(mockPost())
        expect(screen.getByRole("button", {
            name: "Stack"
        })).toBeInTheDocument();
    })
});

describe("Posts Page styling", () => {
    it("should render Posts in grid style by default", () => {
        render(mockPost())
        expect(screen.getByTestId("posts-list").className).toBe("posts-container");
    });

    it("should render Posts in grid style on click grid btn", () => {
        render(mockPost());
        userEvent.click(screen.getByRole("button", {
            name: "Grid"
        }));
        expect(screen.getByTestId("posts-list").className).toBe("posts-container");
        // expect(getByTestId("posts-list")).toHaveClass("posts-container")
    });

    it("should render Posts in stack style on click stack btn", () => {
        render(mockPost());
        userEvent.click(screen.getByRole("button", {
            name: "Stack"
        }));
        expect(screen.getByTestId("posts-list").className).toBe("");
    });
});


describe("Post page data", () => {

    it("should be loading on page load", async () => {
        render(mockPost());
        expect(screen.getByTestId("posts-list-loader")).toBeInTheDocument();
    })

    it("should render empty post list as default", () => {
        render(mockPost());
        expect(screen.queryAllByTestId(/post-row-item-[0-9]+/).length).toBe(0);
    });


    it("should render post item", async () => {
        jest.spyOn(global, "fetch").mockImplementation(mockResponse);
        render(mockPost());
        expect(await screen.findByTestId("post-row-item-0")).toBeInTheDocument();
    });

    it("should render post items", async () => {
        jest.spyOn(global, "fetch").mockImplementation(mockResponse);
        render(mockPost());
        expect((await screen.findAllByTestId(/post-row-item-[0-9]+/)).length).toBe(2);
    });
});