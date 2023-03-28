import FormPreselection from "./index";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("When the user selects 'Vollkorngetreide' the correct result text is rendered with information from the database", async () => {
  const user = userEvent.setup();
  render(<FormPreselection />);

  // Finding an option and simulate click to select
  const selectedOption1 = screen.getByLabelText("Vollkorngetreide");
  await user.click(selectedOption1);

  // Finding the Submit-Button and simulate clicking it
  const submitButton1 = screen.getByRole("button", {
    name: "Info zum Tagesbedarf",
  });

  await act(async () => {
    await user.click(submitButton1);
  });

  // Verifying that the correct result text is displayed
  const resultText1 = screen.getByText(
    /Der empfohlene Tagesbedarf für Vollkorngetreide liegt bei 232/
  );
  expect(resultText1).toBeInTheDocument();
});
