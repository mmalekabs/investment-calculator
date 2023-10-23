import React from "react";

import styles from "./ResultsTable.module.css";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const ResultsTable = (props) => {
  return (
    <div>
      <table className={styles.result}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((yearlyData) => (
            <tr key={yearlyData.year}>
              <td>{formatter.format(yearlyData.year)}</td>
              <td>{formatter.format(yearlyData.savingsEndOfYear)}</td>
              <td>{formatter.format(yearlyData.yearlyInterest)}</td>
              <td>
                {formatter.format(
                  yearlyData.savingsEndOfYear -
                    props.initialInvestment -
                    yearlyData.calculatedYearlyContribution * yearlyData.year,
                )}
              </td>
              <td>
                {props.initialInvestment +
                  yearlyData.calculatedYearlyContribution * yearlyData.year}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultsTable;
