import React from "react";
import { render } from "@testing-library/react";
import BarChart from "../../components/BarChart";
import "jest-canvas-mock";

// just a very simple test for good practice purposes

describe("BarChart Component", () => {
  it("renders without crashing", () => {
    const { container } = render(<BarChart labels={[]} values={[]} />);
    expect(container).toBeEmptyDOMElement();
  });
});
