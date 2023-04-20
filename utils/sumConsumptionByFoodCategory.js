export default function calculateSumOfActualWeeklyConsumptionByFoodCategories(
  dailyQuizzesResultCollection
) {
  const sumOfActualWeeklyConsumptionByFoodCategories = {};
  dailyQuizzesResultCollection.forEach((dailyQuiz) => {
    dailyQuiz.data.forEach((foodCategory) => {
      const { name, consumedQuantity } = foodCategory;

      if (sumOfActualWeeklyConsumptionByFoodCategories[name]) {
        sumOfActualWeeklyConsumptionByFoodCategories[name] += consumedQuantity;
      } else {
        sumOfActualWeeklyConsumptionByFoodCategories[name] = consumedQuantity;
      }
    });
  });
  return sumOfActualWeeklyConsumptionByFoodCategories;
}
