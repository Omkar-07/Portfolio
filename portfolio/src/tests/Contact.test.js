import React from 'react';
import { render, fireEvent, screen } from "@testing-library/react";
import Contact from "../components/Contact";

test("allows users to type into the contact form", () => {
    render(<Contact />);
    const nameInput = screen.getByPlaceholderText("Name");
    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    expect(nameInput.value).toBe("John Doe");
});
