import FormQuantitySpecification from ".";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("FormQuantitySpecification", () => {
  test("renders the information from the selected food category from the array, namely name and maxRangeInputField", () => {
    useRouter.mockImplementation(() => ({
      push: jest.fn(),
    }));
    render(
      <FormQuantitySpecification
        selectedFoodCategories={{
          id: "1",
          name: "Vollkorngetreide",
          slug: "vollkorngetreide",
          recommendedConsumption: 232,
          recommendedExample:
            "1 Tasse Vollkornreis und 1 Scheibe Vollkornroggenbrot",
          maxRange: 464,
          maxRangeInputField: 400,
          furtherExamplaryPortions: [
            {
              quantity: 20,
              example: "1 Scheibe Vollkornroggenbrot",
            },
            {
              quantity: 50,
              example: "1 Schüssel Haferflocken",
            },
            {
              quantity: 150,
              example: "1 Tasse Quinoa oder 1 Tasse Buchweizen",
            },
            {
              quantity: 350,
              example: "3 Tassen Dinkelvollkornnudeln",
            },
          ],
          consumedQuantity: 0,
          isChecked: true,
        }}
        selectedFoodCategory={{
          id: "1",
          name: "Vollkorngetreide",
          slug: "vollkorngetreide",
          recommendedConsumption: 232,
          recommendedExample:
            "1 Tasse Vollkornreis und 1 Scheibe Vollkornroggenbrot",
          maxRange: 464,
          maxRangeInputField: 400,
          furtherExamplaryPortions: [
            {
              quantity: 20,
              example: "1 Scheibe Vollkornroggenbrot",
            },
            {
              quantity: 50,
              example: "1 Schüssel Haferflocken",
            },
            {
              quantity: 150,
              example: "1 Tasse Quinoa oder 1 Tasse Buchweizen",
            },
            {
              quantity: 350,
              example: "3 Tassen Dinkelvollkornnudeln",
            },
          ],
          consumedQuantity: 0,
          isChecked: true,
        }}
      />
    );
    const selectedFoodCategory = screen.getByText(/Bitte wähle aus, wieviel/);
    expect(selectedFoodCategory).toHaveTextContent("Vollkorngetreide");

    const maxRangeInputField = screen.getByRole("maxRangeInputField");
    expect(maxRangeInputField).toHaveTextContent("400");
  });
});

describe("FormQuantitySpecification", () => {
  test("renders the correct output, when the user moves the range slider", async () => {
    useRouter.mockImplementation(() => ({
      push: jest.fn(),
    }));
    const user = userEvent.setup();
    render(
      <FormQuantitySpecification
        selectedFoodCategories={{
          id: "1",
          name: "Vollkorngetreide",
          slug: "vollkorngetreide",
          recommendedConsumption: 232,
          recommendedExample:
            "1 Tasse Vollkornreis und 1 Scheibe Vollkornroggenbrot",
          maxRange: 464,
          maxRangeInputField: 400,
          furtherExamplaryPortions: [
            {
              quantity: 20,
              example: "1 Scheibe Vollkornroggenbrot",
            },
            {
              quantity: 50,
              example: "1 Schüssel Haferflocken",
            },
            {
              quantity: 150,
              example: "1 Tasse Quinoa oder 1 Tasse Buchweizen",
            },
            {
              quantity: 350,
              example: "3 Tassen Dinkelvollkornnudeln",
            },
          ],
          consumedQuantity: 0,
          isChecked: true,
        }}
        selectedFoodCategory={{
          id: "1",
          name: "Vollkorngetreide",
          slug: "vollkorngetreide",
          recommendedConsumption: 232,
          recommendedExample:
            "1 Tasse Vollkornreis und 1 Scheibe Vollkornroggenbrot",
          maxRange: 464,
          maxRangeInputField: 400,
          furtherExamplaryPortions: [
            {
              quantity: 20,
              example: "1 Scheibe Vollkornroggenbrot",
            },
            {
              quantity: 50,
              example: "1 Schüssel Haferflocken",
            },
            {
              quantity: 150,
              example: "1 Tasse Quinoa oder 1 Tasse Buchweizen",
            },
            {
              quantity: 350,
              example: "3 Tassen Dinkelvollkornnudeln",
            },
          ],
          consumedQuantity: 0,
          isChecked: true,
        }}
      />
    );
    const rangeInput = screen.getByRole("slider");
    await fireEvent.change(rangeInput, { target: { value: "200" } });

    const outputElement = screen.getByRole("output");
    expect(outputElement).toHaveTextContent("200 g");
  });
});
