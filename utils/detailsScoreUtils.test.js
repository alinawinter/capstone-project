import {
  calculateDetailsScoreDeviation,
  calculateDetailsScoreAccordance,
} from "./detailsScoreUtils";

test("returns '50' if called calculateDetailsScoreDeviation(116, 232, 464)", () => {
  const result = calculateDetailsScoreDeviation(116, 232, 464);
  expect(result).toBe(50);
});

test("returns '50' if called calculateDetailsScoreDeviation(348, 232, 464)", () => {
  const result = calculateDetailsScoreDeviation(348, 232, 464);
  expect(result).toBe(50);
});

test("returns '100' if called calculateDetailsScoreDeviation(0, 232, 464)", () => {
  const result = calculateDetailsScoreDeviation(0, 232, 464);
  expect(result).toBe(100);
});

test("returns '0' if called calculateDetailsScoreDeviation(232, 232, 464)", () => {
  const result = calculateDetailsScoreDeviation(232, 232, 464);
  expect(result).toBe(0);
});

test("returns '50' if called calculateDetailsScoreAccordance(DetailsScoreCalculationDeviation, 161, 232, 464)", () => {
  const result = calculateDetailsScoreAccordance(
    calculateDetailsScoreDeviation,
    116,
    232,
    464
  );
  expect(result).toBe(50);
});

test("returns '50' if called calculateDetailsScoreAccordance(DetailsScoreCalculationDeviation, 348, 232, 464)", () => {
  const result = calculateDetailsScoreAccordance(
    calculateDetailsScoreDeviation,
    348,
    232,
    464
  );
  expect(result).toBe(50);
});

test("returns '0' if called calculateDetailsScoreAccordance(DetailsScoreCalculationDeviation, 0, 232, 464)", () => {
  const result = calculateDetailsScoreAccordance(
    calculateDetailsScoreDeviation,
    0,
    232,
    464
  );
  expect(result).toBe(0);
});

test("returns '100' if called calculateDetailsScoreAccordance(DetailsScoreCalculationDeviation, 232, 232, 464)", () => {
  const result = calculateDetailsScoreAccordance(
    calculateDetailsScoreDeviation,
    232,
    232,
    464
  );
  expect(result).toBe(100);
});
