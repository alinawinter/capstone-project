export default function calculateWeeklyScoreByFoodCategory(
  foodCategories,
  sumOfActualWeeklyConsumptionByFoodCategories,
  recommendedConsumptionByFoodCategoryBasedOnNumberQuizzes,
  maxRangeByFoodCategoryBasedOnNumberQuizzes,
  calculateDetailsScoreAccordance,
  calculateDetailsScoreDeviation
) {
  const weeklyScoreByFoodCategory = {};

  foodCategories.forEach((category) => {
    const weeklyScoreForOneCategory = calculateDetailsScoreAccordance(
      calculateDetailsScoreDeviation,
      sumOfActualWeeklyConsumptionByFoodCategories[category.name],
      recommendedConsumptionByFoodCategoryBasedOnNumberQuizzes[category.name],
      maxRangeByFoodCategoryBasedOnNumberQuizzes[category.name]
    );
    const weeklyScoreForOneCategoryNumber = isNaN(weeklyScoreForOneCategory)
      ? 0
      : weeklyScoreForOneCategory;

    weeklyScoreByFoodCategory[category.name] = Math.round(
      weeklyScoreForOneCategoryNumber
    );
  });

  return weeklyScoreByFoodCategory;
}
