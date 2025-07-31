// Implements monetization logic from report
export const calculatePayout = (amount) => {
  const commission = amount * 0.10;
  const tutorPayout = amount - commission;
  return { commission, tutorPayout };
};
// Example test case
console.log(calculatePayout(500)); // { commission: 50, tutorPayout: 450 }
