import DayScore from "./DayScore";
import { render, screen } from "@testing-library/react";
import { foodCategories } from "../../lib/db";

test("renders a score that is based on selectedFoodCategories from the array and the users range input on consumed amount of food", () => {
  render(
    <DayScore
      foodCategories={foodCategories}
      selectedFoodCategories={[
        {
          id: "1",
          name: "Vollkorngetreide",
          recommendedConsumption: 232,
          recommendedExample:
            "2 Tassen Vollkornreis und 1,5 Scheiben Vollkornroggenbrot",
          maxRange: 464,
          maxRangeInputField: 600,
          consumedQuantity: 0,
        },
        {
          id: "2",
          name: "Gemüse",
          slug: "gemuese",
          recommendedConsumption: 300,
          recommendedExample:
            "1 mittelgroße Karotte, 1 kleine Tomate, 1 kleine Zucchini",
          maxRange: 600,
          maxRangeInputField: 600,
          consumedQuantity: 0,
        },
      ]}
    />
  );
  const recommendationText = screen.getByText(/Empfehlungen/);
  expect(recommendationText).toBeInTheDocument();
  const score = screen.queryAllByText(/0/);
  expect(score.length).toBeGreaterThan(0);
  expect(score[0]).toBeInTheDocument();
});
