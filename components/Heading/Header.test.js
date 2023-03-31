import Header from "./Header";
import { render, screen } from "@testing-library/react";

test("test", () => {
  render(<Header>FuturePlate</Header>);
  const element = screen.getByText("FuturePlate");
  expect(element).toBeInTheDocument();
});
