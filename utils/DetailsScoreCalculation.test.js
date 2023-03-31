import {
  DetailsScoreCalculationDeviation,
  DetailsScoreCalculationAccordance,
} from "./DetailsScoreCalculation";

test("returns '50' if called DetailsScoreCalculationDeviation(116, 232, 464)", () => {
  const result = DetailsScoreCalculationDeviation(116, 232, 464);
  expect(result).toBe(50);
});

test("returns '50' if called DetailsScoreCalculationDeviation(348, 232, 464)", () => {
  const result = DetailsScoreCalculationDeviation(348, 232, 464);
  expect(result).toBe(50);
});

test("returns '100' if called DetailsScoreCalculationDeviation(0, 232, 464)", () => {
  const result = DetailsScoreCalculationDeviation(0, 232, 464);
  expect(result).toBe(100);
});

test("returns '0' if called DetailsScoreCalculationDeviation(232, 232, 464)", () => {
  const result = DetailsScoreCalculationDeviation(232, 232, 464);
  expect(result).toBe(0);
});

test("returns '50' if called DetailsScoreCalculationAccordance(DetailsScoreCalculationDeviation, 161, 232, 464)", () => {
  const result = DetailsScoreCalculationAccordance(
    DetailsScoreCalculationDeviation,
    116,
    232,
    464
  );
  expect(result).toBe(50);
});

test("returns '50' if called DetailsScoreCalculationAccordance(DetailsScoreCalculationDeviation, 348, 232, 464)", () => {
  const result = DetailsScoreCalculationAccordance(
    DetailsScoreCalculationDeviation,
    348,
    232,
    464
  );
  expect(result).toBe(50);
});

test("returns '0' if called DetailsScoreCalculationAccordance(DetailsScoreCalculationDeviation, 0, 232, 464)", () => {
  const result = DetailsScoreCalculationAccordance(
    DetailsScoreCalculationDeviation,
    0,
    232,
    464
  );
  expect(result).toBe(0);
});

test("returns '100' if called DetailsScoreCalculationAccordance(DetailsScoreCalculationDeviation, 232, 232, 464)", () => {
  const result = DetailsScoreCalculationAccordance(
    DetailsScoreCalculationDeviation,
    232,
    232,
    464
  );
  expect(result).toBe(100);
});
