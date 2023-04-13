/* The following functions calculate the average deviation and accordance
from/with the recommended consumption (by Planetary Health Diet)
ACROSS ALL CATEGORIES */

export function calculateAverageScoreDeviation(
  mergedArrayAllFoodAndSelectedFood,
  calculateDetailsScoreDeviation
) {
  const collectionOfDeviations = mergedArrayAllFoodAndSelectedFood.map(
    (category) =>
      calculateDetailsScoreDeviation(
        category.consumedQuantity,
        category.recommendedConsumption,
        category.maxRange
      )
  );
  return (
    collectionOfDeviations.reduce((acc, val) => acc + val, 0) /
    collectionOfDeviations.length
  );
}

export function calculateAverageScoreAccordance(
  mergedArrayAllFoodAndSelectedFood,
  calculateDetailsScoreDeviation,
  calculateDetailsScoreAccordance
) {
  const collectionOfAccordances = mergedArrayAllFoodAndSelectedFood.map(
    (category) =>
      calculateDetailsScoreAccordance(
        calculateDetailsScoreDeviation,
        category.consumedQuantity,
        category.recommendedConsumption,
        category.maxRange
      )
  );
  return (
    collectionOfAccordances.reduce((acc, val) => acc + val, 0) /
    collectionOfAccordances.length
  );
}
