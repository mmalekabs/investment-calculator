import React, { useState } from "react";
import Header from "./components/Header/Header.component";
import Form from "./components/UserInput/UserInput.component";
import UserInput from "./components/UserInput/UserInput.component";
import ResultsTable from "./components/ResultsTable/ResultsTable.component";

const App = () => {
  const [results, setResults] = useState(null);
  const calculateHandler = ({
    currentSavings,
    yearlyContribution,
    expectedReturn,
    duration,
  }) => {
    const yearlyData = []; // per-year results

    let calculatedCurrentSavings = +currentSavings;
    const calculatedYearlyContribution = +yearlyContribution;
    const calculatedExpectedReturn = +expectedReturn / 100;
    const calculatedDuration = +duration;

    for (let i = 0; i < calculatedDuration; i++) {
      const yearlyInterest =
        calculatedCurrentSavings * calculatedExpectedReturn;
      calculatedCurrentSavings += yearlyInterest + calculatedYearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: calculatedCurrentSavings,
        yearlyContribution: calculatedYearlyContribution,
      });
    }

    setResults(yearlyData);
  };

  return (
    <div>
      <Header />
      <UserInput onCalculate={calculateHandler} />
      <ResultsTable />
    </div>
  );
};
export default App;
