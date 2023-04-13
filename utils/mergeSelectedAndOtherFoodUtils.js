export function mergeArrayAllFoodAndSelectedFood(
  foodCategories,
  selectedFoodCategories
) {
  const mergedArrayAllFoodAndSelectedFood = [
    ...selectedFoodCategories,
    ...foodCategories.filter(
      (foodCategory) =>
        !selectedFoodCategories.find(
          (selectedFoodCategory) => selectedFoodCategory.id === foodCategory.id
        )
    ),
  ].map((category) => {
    if (!category.hasOwnProperty("consumedQuantity")) {
      return { ...category, consumedQuantity: 0 };
    }
    return category;
  });
  const mergedArrayAllFoodAndSelectedFoodSorted =
    mergedArrayAllFoodAndSelectedFood.sort((a, b) => a.id - b.id);
  return mergedArrayAllFoodAndSelectedFoodSorted;
}
