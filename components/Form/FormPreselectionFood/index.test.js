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
        selectedFoodCategories={{
          id: "3",
          name: "Milchprodukte",
          recommendedConsumption: 250,
          recommendedExample: "1 Tasse Milch",
          maxRange: 500,
          maxRangeInputField: 600,
        }}
      />
    );
    const option = screen.getByLabelText(/Milchprodukte/);
    expect(option).toBeInTheDocument();
  });
});
