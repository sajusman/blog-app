import { fireEvent, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Home from "../Home/Home"
import Posts from "../Posts/Posts"
import Blogs from "../Blogs/Blogs"
import { Provider } from 'react-redux';
import { store } from '../.././app/store';

const mockNavigationBar = () => {
    return (<BrowserRouter>
        <NavigationBar />
    </BrowserRouter>)
}

describe("Navigation Bar links exist", () => {

    it("shoud contain link to Home", () => {
        const { getByText } = render(mockNavigationBar());
        expect(getByText("Home")).toBeInTheDocument();
    })

    it("shoud contain link to Blogs", () => {
        const { getByText } = render(mockNavigationBar());
        expect(getByText("Blogs")).toBeInTheDocument();
    })

    it("shoud contain link to Posts", () => {
        const { getByText } = render(mockNavigationBar());
        expect(getByText("Posts")).toBeInTheDocument();
    })
})

describe("Navigation Bar route change", () => {
    it("should render Home Page", () => {
        const { getByText } = render(mockNavigationBar());
        fireEvent.click(getByText("Home"));
        const { baseElement } = render(<Home />);
        expect(baseElement).toBeInTheDocument();
    });

    it("should render Blogs Page", () => {
        const { getByText } = render(mockNavigationBar());
        fireEvent.click(getByText("Blogs"));
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
        const { getByText } = render(mockNavigationBar());
        fireEvent.click(getByText("Posts"));
        const { baseElement } = render(<Posts />);
        expect(baseElement).toBeInTheDocument();
    });
});

