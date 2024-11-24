import React from 'react';
import { render } from "@testing-library/react"
import { describe, test, expect } from "vitest"

const Comp = () => <div>Hello World</div>;

describe("Comp Test", () => {
    test("Render comp", () => {
        const container = render(<Comp />);

        expect(container.getAllByText("Hello World")).toBeTruthy();
    })
})