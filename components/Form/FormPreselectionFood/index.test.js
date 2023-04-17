import FormPreselection from "./index";
import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("FormPreselection", () => {
  test("renders the food categories from the array in the database as labels to input fields in the form", () => {
    useRouter.mockImplementation(() => ({
      push: jest.fn(),
    }));
    render(
      <FormPreselection
        selectedFoodCategories={[
          {
            id: "11",
            name: "Milchprodukte",
            slug: "milchprodukte",
            recommendedConsumption: 250,
            recommendedExample:
              "1 Tasse fettarme Milch oder 1 kleines Stück fettarmer Käse",
            maxRange: 500,
            maxRangeInputField: 600,
            furtherExamplaryPortions: [
              {
                quantity: 400,
                example:
                  "1 große Portion Joghurt oder 2-3 dünne Scheiben Gouda",
              },
              {
                quantity: 600,
                example: "1 Mozzarella, 1 Tasse Sahne und 1/2 Tasse Quark",
              },
            ],
          },
        ]}
      />
    );
    const option = screen.getByLabelText(/Milchprodukte/);
    expect(option).toBeInTheDocument();
  });
});
