/* The following functions calculate the average deviation and accordance
from/with the recommended consumption (by Planetary Health Diet)
ACROSS ALL CATEGORIES */

export function calculateAverageScoreDeviation(
  selectedFoodCategories,
  calculateDetailsScoreDeviation
) {
  const collectionOfDeviations = selectedFoodCategories.map(
    (selectedFoodCategory) =>
      calculateDetailsScoreDeviation(
        selectedFoodCategory.consumedQuantity,
        selectedFoodCategory.recommendedConsumption,
        selectedFoodCategory.maxRange
      )
  );
  return (
    collectionOfDeviations.reduce((acc, val) => acc + val, 0) /
    collectionOfDeviations.length
  );
}

export function calculateAverageScoreAccordance(
  selectedFoodCategories,
  calculateDetailsScoreDeviation,
  calculateDetailsScoreAccordance
) {
  const collectionOfAccordances = selectedFoodCategories.map(
    (selectedFoodCategory) =>
      calculateDetailsScoreAccordance(
        calculateDetailsScoreDeviation,
        selectedFoodCategory.consumedQuantity,
        selectedFoodCategory.recommendedConsumption,
        selectedFoodCategory.maxRange
      )
  );
  return (
    collectionOfAccordances.reduce((acc, val) => acc + val, 0) /
    collectionOfAccordances.length
  );
}
