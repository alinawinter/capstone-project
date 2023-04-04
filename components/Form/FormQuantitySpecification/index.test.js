import FormQuantitySpecification from ".";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("renders the results text, when the user presses the submit-Button", async () => {
  const user = userEvent.setup();
  render(
    <FormQuantitySpecification
      foodCategory={{
        id: "1",
        name: "Vollkorngetreide",
        recommendedConsumption: 232,
        recommendedExample:
          "2 Tassen Vollkornreis und 1,5 Scheiben Vollkornroggenbrot",
        maxRange: 464,
        maxRangeInputField: 600,
      }}
    />
  );

  const submitButton = screen.getByRole("button", {
    name: "Auswertung",
  });
  await user.click(submitButton);
  const resultText = await screen.getByText(/232/);
  expect(resultText).toBeInTheDocument();
});
