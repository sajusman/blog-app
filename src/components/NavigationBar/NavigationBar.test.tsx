import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Home from "../Home/Home"
import Posts from "../Posts/Posts"
import Blogs from "../Blogs/Blogs"
import { Provider } from 'react-redux';
import { store } from '../.././app/store';
import userEvent from "@testing-library/user-event";

const mockNavigationBar = () => {
    return (<BrowserRouter>
        <NavigationBar />
    </BrowserRouter>)
}

describe("Navigation Bar links exist", () => {

    it("shoud contain link to Home", () => {
        render(mockNavigationBar());
        expect(screen.getByText("Home")).toBeInTheDocument();
    })

    it("shoud contain link to Blogs", () => {
        render(mockNavigationBar());
        expect(screen.getByText("Blogs")).toBeInTheDocument();
    })

    it("shoud contain link to Posts", () => {
        render(mockNavigationBar());
        expect(screen.getByText("Posts")).toBeInTheDocument();
    })
})

describe("Navigation Bar route change", () => {
    it("should render Home Page", () => {
        render(mockNavigationBar());
        userEvent.click(screen.getByText("Home"));
        const { baseElement } = render(<Home />);
        expect(baseElement).toBeInTheDocument();
    });

    it("should render Blogs Page", () => {
        render(mockNavigationBar());
        userEvent.click(screen.getByText("Blogs"));
        const { baseElement } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Blogs />
                </BrowserRouter>
            </Provider>
        );
        expect(baseElement).toBeInTheDocument();
    });

    it("should render Posts Page", () => {
        render(mockNavigationBar());
        userEvent.click(screen.getByText("Posts"));
        const { baseElement } = render(<Posts />);
        expect(baseElement).toBeInTheDocument();
    });
});

