import Heading from ".";
import { render, screen } from "@testing-library/react";

test("test", () => {
  render(<Heading>FuturePlate</Heading>);
  const element = screen.getByText("FuturePlate");
  expect(element).toBeInTheDocument();
});
