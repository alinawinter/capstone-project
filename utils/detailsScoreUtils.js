/* The following functions help calculate the accordance and deviation 
of consumption of INDIVIDUAL FOOD CATEGORIES */

// The following function calculates the (percentage) deviation from the recommended consumption (by Planetary Health Diet)

export function calculateDetailsScoreDeviation(
  consumedQuantity,
  recommendedConsumption,
  maxRange
) {
  const deviation =
    ((consumedQuantity - recommendedConsumption) / recommendedConsumption) *
    100;
  if (consumedQuantity > maxRange) {
    return 100;
  }
  if (consumedQuantity <= recommendedConsumption) {
    const reversalToPositive = Math.abs(deviation);
    return reversalToPositive;
  }
  return deviation;
}

// The following function calculates the accordance (percent match) recommended consumption (by Planetary Health Diet)

export function calculateDetailsScoreAccordance(
  calculateDetailsScoreDeviation,
  consumedQuantity,
  recommendedConsumption,
  maxRange
) {
  const deviation = calculateDetailsScoreDeviation(
    consumedQuantity,
    recommendedConsumption,
    maxRange
  );
  const accordance = 100 - deviation;
  return accordance;
}
