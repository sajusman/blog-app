import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Home from "./Home";

describe("Home", () => {

    it("shoud render home heading", () => {
        const { getByText } = render(<Home />);
        expect(getByText("Home")).toBeInTheDocument();
    });

    it("shoud render Welcome heading", () => {
        const { getByText } = render(<Home />);
        expect(getByText("Welcome to the Blog App")).toBeInTheDocument();
    });

    it("shoud render Welcome heading", () => {
        const { getByTestId } = render(<Home />);
        const value = getByTestId("lorem-ipsum").textContent;
        expect(value).toBe(value);
    });
})

