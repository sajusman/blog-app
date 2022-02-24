import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from "./Home";

describe("Home", () => {

    it("shoud render home heading", () => {
        render(<Home />);
        expect(screen.getByText("Home")).toBeInTheDocument();
    });

    it("shoud render Welcome heading", () => {
        render(<Home />);
        expect(screen.getByText("Welcome to the Blog App")).toBeInTheDocument();
    });

    it("shoud render Welcome heading", () => {
        render(<Home />);
        const value = screen.getByTestId("lorem-ipsum").textContent;
        expect(value).toBe(value);
    });
})

