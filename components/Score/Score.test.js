import Score from "./Score";
import { render, screen } from "@testing-library/react";

test("renders a score thats is based on selectedFoodCategories from the array and on the users range input on consumed amount of food", () => {
  render(
    <Score
      selectedFoodCategories={[
        {
          id: "1",
          name: "Vollkorngetreide",
          recommendedConsumption: 232,
          recommendedExample:
            "2 Tassen Vollkornreis und 1,5 Scheiben Vollkornroggenbrot",
          maxRange: 464,
          maxRangeInputField: 600,
          consumedQuantity: 132,
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
          consumedQuantity: 300,
        },
      ]}
    />
  );
  const recommendationText = screen.getByText(/Empfehlungen/);
  expect(recommendationText).toBeInTheDocument();
  const score = screen.queryAllByText(/78/);
  expect(score.length).toBeGreaterThan(0);
  expect(score[0]).toBeInTheDocument();
});
