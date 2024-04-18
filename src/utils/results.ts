import { ResultsProps } from '../types/results';

export function calculatePrecision({
  correctAnswers,
  questionsAmount,
}: ResultsProps) {
  const precisionAverage = Math.round((correctAnswers / questionsAmount) * 100);

  return precisionAverage;
}

export function getPrecisionCategory(precisionAverage: number) {
  if (precisionAverage === 0) {
    return 'terrible';
  }
  if (precisionAverage === 100) {
    return 'perfect';
  }
  if (precisionAverage <= 25) {
    return 'bad';
  }
  if (precisionAverage > 25 && precisionAverage <= 75) {
    return 'good';
  }

  return 'great';
}
