import Score from "./Score";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("renders a score thats is based on a selected foodCategory from the array and on the users range input on consumed amount of food", () => {
  render(
    <Score
      foodCategory={{
        id: "1",
        name: "Vollkorngetreide",
        recommendedConsumption: 232,
        recommendedExample:
          "2 Tassen Vollkornreis und 1,5 Scheiben Vollkornroggenbrot",
        maxRange: 464,
        maxRangeInputField: 600,
      }}
      quantity={132}
    />
  );
  const selectedFoodCategory = screen.getByText(/Vollkorngetreide/);
  expect(selectedFoodCategory).toBeInTheDocument();
  const consumedAmount = screen.getByText(/232/);
  expect(consumedAmount).toBeInTheDocument();
});
