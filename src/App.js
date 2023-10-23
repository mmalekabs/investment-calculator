import React, { useState } from "react";
import Header from "./components/Header/Header.component";
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
    let calculatedCurrentSavings = +currentSavings;
    const calculatedYearlyContribution = +yearlyContribution;
    const calculatedExpectedReturn = +expectedReturn / 100;
    const calculatedDuration = +duration;

    const yearlyData = [];

    for (let i = 0; i < calculatedDuration; i++) {
      const yearlyInterest =
        calculatedCurrentSavings * calculatedExpectedReturn;
      calculatedCurrentSavings += yearlyInterest + calculatedYearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: calculatedCurrentSavings,
        calculatedYearlyContribution: calculatedYearlyContribution,
      });
    }

    setResults(yearlyData);
  };

  return (
    <div>
      <Header />
      <UserInput onCalculate={calculateHandler} />

      {!results && (
        <p style={{ textAlign: "center" }}>No Investment calculated yet.</p>
      )}
      {results && (
        <ResultsTable
          data={results}
          initialInvestment={
            results[0].savingsEndOfYear -
            results[0].yearlyInterest -
            results[0].calculatedYearlyContribution
          }
        />
      )}
    </div>
  );
};

export default App;
