export default function calculateFormatWeekDataForScoreCalculation(
  sumOfActualWeeklyConsumptionByFoodCategories,
  recommendedConsumptionByFoodCategoryBasedOnNumberQuizzes,
  maxRangeByFoodCategoryBasedOnNumberQuizzes
) {
  const weekDataForScoreCalculation = [];

  for (let foodCategory in sumOfActualWeeklyConsumptionByFoodCategories) {
    const consumedQuantity =
      sumOfActualWeeklyConsumptionByFoodCategories[foodCategory];
    const recommendedConsumption =
      recommendedConsumptionByFoodCategoryBasedOnNumberQuizzes[foodCategory];
    const maxRange = maxRangeByFoodCategoryBasedOnNumberQuizzes[foodCategory];

    weekDataForScoreCalculation.push({
      name: foodCategory,
      consumedQuantity: consumedQuantity,
      recommendedConsumption: recommendedConsumption,
      maxRange: maxRange,
    });
  }
  return weekDataForScoreCalculation;
}
