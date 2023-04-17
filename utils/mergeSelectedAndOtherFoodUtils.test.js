import { foodCategories } from "../lib/db";
import { mergeArrayAllFoodAndSelectedFood } from "./mergeSelectedAndOtherFoodUtils";

const selectedFoodCategories = [
  {
    id: "5",
    name: "Rind, Lamm o. Schwein",
    slug: "fleisch",
    recommendedConsumption: 14,
    recommendedExample: "1 Scheibe mageres Rindfleisch",
    maxRange: 28,
    maxRangeInputField: 300,
    furtherExamplaryPortions: [
      {
        quantity: 150,
        example: "1 kleines Steak",
      },
      {
        quantity: 200,
        example: "1 große Rinderhackfleich-Pfanne",
      },
      {
        quantity: 250,
        example: "1 großes Rinderfilet",
      },
    ],
    consumedQuantity: 50,
    isChecked: true,
  },
  {
    id: "6",
    name: "Geflügel",
    slug: "gefluegel",
    recommendedConsumption: 29,
    recommendedExample: "1 Scheibe Putenbrust",
    maxRange: 58,
    maxRangeInputField: 300,
    furtherExamplaryPortions: [
      {
        quantity: 60,
        example: "2 Scheiben Putenbrust",
      },
      {
        quantity: 175,
        example: "1 kleine Hähnchenbrust",
      },
      ,
      {
        quantity: 230,
        example: "1 Hähnchenschenkel",
      },
      {
        quantity: 300,
        example: "1 große Hähnchenbrust",
      },
    ],
    consumedQuantity: 100,
    isChecked: true,
  },

  {
    id: "7",
    name: "Eier",
    slug: "eier",
    recommendedConsumption: 13,
    recommendedExample: "1/2 kleines gekochtes Ei",
    maxRange: 25,
    maxRangeInputField: 100,
    furtherExamplaryPortions: [
      {
        quantity: 50,
        example: "1 mittelgroßes Ei",
      },
      {
        quantity: 100,
        example: "2 mittelgroße Eier",
      },
    ],
    consumedQuantity: 13,
    isChecked: true,
  },
];

test("returns the correct merged array if called", () => {
  const result = mergeArrayAllFoodAndSelectedFood(
    foodCategories,
    selectedFoodCategories
  );
  expect(result).toEqual([
    {
      id: "1",
      name: "Vollkorngetreide",
      slug: "vollkorngetreide",
      recommendedConsumption: 232,
      recommendedExample:
        "1 Tasse Vollkornreis und 1 Scheibe Vollkornroggenbrot",
      maxRa600nge: 464,
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
    },
    {
      id: "2",
      name: "Stärkehaltiges Gemüse",
      slug: "staerkehaltiges-gemuese",
      recommendedConsumption: 50,
      recommendedExample: "1 kleine Kartoffel oder 2 kleine Maniokwurzeln",
      maxRange: 100,
      maxRangeInputField: 400,
      furtherExamplaryPortions: [
        {
          quantity: 100,
          example: "1 mittelgroße Kartoffel",
        },
        {
          quantity: 200,
          example: "2 mittelgroße Kartoffeln",
        },
        {
          quantity: 300,
          example: "3 mittelgroße Kartoffeln",
        },
        {
          quantity: 400,
          example: "4 mittelgroße Kartoffeln",
        },
      ],
      consumedQuantity: 0,
    },
    {
      id: "3",
      name: "Gemüse",
      slug: "gemuese",
      recommendedConsumption: 300,
      recommendedExample:
        "1 mittelgroße Karotte, 1 kleine Tomate, 1 kleine Zucchini",
      maxRange: 600,
      maxRangeInputField: 600,
      furtherExamplaryPortions: [
        {
          quantity: 100,
          example: "1 halbe Paprika oder 1 kleine Gurke",
        },
        {
          quantity: 200,
          example:
            "1 Handvoll roher Karottensticks und 1 Handvoll roher Paprikasticks",
        },
        {
          quantity: 400,
          example: "1 mittelgroße Zucchini und eine mittelgroße Aubergine",
        },
        {
          quantity: 600,
          example: "1 große Möhre, 1 große Rote Beete, ein kleiner Blumenkohl",
        },
      ],
      consumedQuantity: 0,
    },
    {
      id: "4",
      name: "Obst",
      slug: "obst",
      recommendedConsumption: 200,
      recommendedExample: "1 kleiner Apfel und 1 mittelgroße Banane",
      maxRange: 300,
      maxRangeInputField: 500,
      furtherExamplaryPortions: [
        {
          quantity: "100",
          example: "1 kleiner Apfel",
        },
        {
          quantity: "300",
          example: "2 mittelgroße Orange oder 2 mittelgroße Pfirsiche",
        },
        {
          quantity: "400",
          example:
            "1 großer Apfel und 1 Tasse Beeren (z.B. Erdbeeren oder Himbeeren)",
        },
        {
          quantity: "600",
          example: "1 kleine Ananas ohne Schale",
        },
      ],
      consumedQuantity: 0,
    },
    {
      id: "5",
      name: "Rind, Lamm o. Schwein",
      slug: "fleisch",
      recommendedConsumption: 14,
      recommendedExample: "1 Scheibe mageres Rindfleisch",
      maxRange: 28,
      maxRangeInputField: 300,
      furtherExamplaryPortions: [
        {
          quantity: 150,
          example: "1 kleines Steak",
        },
        {
          quantity: 200,
          example: "1 große Rinderhackfleich-Pfanne",
        },
        {
          quantity: 250,
          example: "1 großes Rinderfilet",
        },
      ],
      consumedQuantity: 50,
      isChecked: true,
    },
    {
      id: "6",
      name: "Geflügel",
      slug: "gefluegel",
      recommendedConsumption: 29,
      recommendedExample: "1 Scheibe Putenbrust",
      maxRange: 58,
      maxRangeInputField: 300,
      furtherExamplaryPortions: [
        {
          quantity: 60,
          example: "2 Scheiben Putenbrust",
        },
        {
          quantity: 175,
          example: "1 kleine Hähnchenbrust",
        },
        ,
        {
          quantity: 230,
          example: "1 Hähnchenschenkel",
        },
        {
          quantity: 300,
          example: "1 große Hähnchenbrust",
        },
      ],
      consumedQuantity: 100,
      isChecked: true,
    },

    {
      id: "7",
      name: "Eier",
      slug: "eier",
      recommendedConsumption: 13,
      recommendedExample: "1/2 kleines gekochtes Ei",
      maxRange: 25,
      maxRangeInputField: 100,
      furtherExamplaryPortions: [
        {
          quantity: 50,
          example: "1 mittelgroßes Ei",
        },
        {
          quantity: 100,
          example: "2 mittelgroße Eier",
        },
      ],
      consumedQuantity: 13,
      isChecked: true,
    },
    {
      id: "8",
      name: "Fisch",
      slug: "fisch",
      recommendedConsumption: 28,
      recommendedExample: "1 Scheibe Lachs oder Thunfisch",
      maxRange: 100,
      maxRangeInputField: 300,
      furtherExamplaryPortions: [
        {
          quantity: 100,
          example: "1 kleine Dose Thunfisch",
        },
        {
          quantity: 150,
          example: "1 kleines gegrilltes Lachsfilet",
        },
        {
          quantity: 300,
          example: "1 großes Forellenfilet",
        },
      ],
      consumedQuantity: 0,
    },
    {
      id: "9",
      name: "Hülsenfrüchte",
      slug: "huelsenfruechte",
      recommendedConsumption: 75,
      recommendedExample: "1/2 Tasse schwarze Bohnen",
      maxRange: 100,
      maxRangeInputField: 200,
      furtherExamplaryPortions: [
        {
          quantity: 100,
          example: "1/2 Tasse gekochte rote Linsen oder Kichererbsen",
        },
        {
          quantity: 200,
          example: "1 Tasse gekochte Kidneybohnen",
        },
      ],
      consumedQuantity: 0,
    },
    {
      id: "10",
      name: "Nüsse",
      slug: "nuesse",
      recommendedConsumption: 50,
      recommendedExample: "1/2 Tasse Walnüsse",
      maxRange: 75,
      maxRangeInputField: 200,
      furtherExamplaryPortions: [
        {
          quantity: 100,
          example: "1 Tasse Haselnüsse oder 1/2 Tasse Pistazien",
        },
        {
          quantity: 200,
          example: "1 Tasse Macadamianüsse oder 1,5 Tassen Mandeln",
        },
      ],
      consumedQuantity: 0,
    },
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
          example: "1 große Portion Joghurt oder 2-3 dünne Scheiben Gouda",
        },
        {
          quantity: 600,
          example: "1 Mozzarella, 1 Tasse Sahne und 1/2 Tasse Quark",
        },
      ],
      consumedQuantity: 0,
    },
    {
      id: "12",
      name: "Ungesättigte Fette",
      slug: "ungesaettigte-fette",
      recommendedConsumption: 40,
      recommendedExample: "4 EL z.B. Oliven-, Raps- Sonnenblumen- oder Leinöl",
      maxRange: 80,
      maxRangeInputField: 120,
      furtherExamplaryPortions: [
        {
          quantity: 20,
          example:
            "2 EL z.B. Oliven-, Raps- Sonnenblumen- oder Leinöl oder 1 mittelgroße Avocado",
        },
        {
          quantity: 80,
          example: "8 EL z.B. Oliven-, Raps- Sonnenblumen- oder Leinöl",
        },
        {
          quantity: 100,
          example: "10 EL z.B. Oliven-, Raps- Sonnenblumen- oder Leinöl",
        },
        {
          quantity: 120,
          example: "12 EL z.B. Oliven-, Raps- Sonnenblumen- oder Leinöl",
        },
      ],
      consumedQuantity: 0,
    },
    {
      id: "13",
      name: "Gesättigte Fette",
      slug: "gesaettigte-fette",
      recommendedConsumption: 11.8,
      recommendedExample: "1 EL Kokosöl oder 1,5 EL Butter",
      maxRange: 11.8,
      maxRangeInputField: 60,
      furtherExamplaryPortions: [
        {
          quantity: 30,
          example: "3 EL Kokosöl oder 4 EL Butter",
        },
        {
          quantity: 60,
          example: "6 EL Kokosöl oder 8 EL Butter",
        },
      ],
      consumedQuantity: 0,
    },
    {
      id: "14",
      name: "Süßungsmittel",
      slug: "suessungsmittel",
      recommendedConsumption: 31,
      recommendedExample: "1,5 EL Honig oder 2 EL Rohrohrzucker",
      maxRange: 31,
      maxRangeInputField: 200,
      furtherExamplaryPortions: [
        {
          quantity: 100,
          example: "8 EL Rohrohrzucker oder 5 EL Honig",
        },
        {
          quantity: 150,
          example: "12 EL Rohrohrzucker oder 9 EL Honig",
        },
        {
          quantity: 200,
          example: "1 Tasse Rohrohrzucker oder 1 Tasse Ahornsirup",
        },
      ],
      consumedQuantity: 0,
    },
  ]);
});
