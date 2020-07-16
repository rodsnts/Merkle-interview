const balance = (openingSum, interestRate, taxFreeLimit, taxRate, numMonths) => {
  let accountBalance = openingSum; 
  let lengthInvestment = numMonths / 12;
  let monthlyTax = taxRate / 100; 

  let monthlyInterest = accountBalance * interestRate / 100 * 12;
  let annualInterest = (accountBalance * lengthInvestment) * (interestRate / 100 * 12);

  accountBalance += monthlyInterest * lengthInvestment + 1
 
  if (accountBalance > taxFreeLimit) {
    return  accountBalance - taxFreeLimit * monthlyTax ;
  } 

  return accountBalance;
  // The +1 it's because of the compound interest formula
  
}
