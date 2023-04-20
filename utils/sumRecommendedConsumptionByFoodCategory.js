export default function calculateRecommendedConsumptionByFoodCategoryBasedOnNumberQuizzes(
  dailyQuizzesResultCollection,
  foodCategories
) {
  const recommendedConsumptionByFoodCategoryBasedOnNumberQuizzes =
    foodCategories.reduce((result, foodCategory) => {
      result[foodCategory.name] =
        foodCategory.recommendedConsumption *
        dailyQuizzesResultCollection.length;
      return result;
    }, {});
  return recommendedConsumptionByFoodCategoryBasedOnNumberQuizzes;
}
