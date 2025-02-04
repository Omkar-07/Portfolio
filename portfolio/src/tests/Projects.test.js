import React from 'react';
import { render, screen } from "@testing-library/react";
import Projects from "../components/Projects";

test("renders project section with correct title", () => {
    render(<Projects />);
    expect(screen.getByText(/Projects/i)).toBeInTheDocument();
});
