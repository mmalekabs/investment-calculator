import React, { useState } from "react";

import styles from "./UserInput.module.css";

const initialUserInput = {
  currentSavings: 10000,
  yearlyContribution: 1200,
  expectedReturn: 7,
  duration: 10,
};

const UserInput = (props) => {
  const [currentSavings, setCurrentSavings] = useState(
    initialUserInput.currentSavings,
  );
  const [yearlyContribution, setYearlyContribution] = useState(
    initialUserInput.yearlyContribution,
  );
  const [expectedReturn, setExpectedReturn] = useState(
    initialUserInput.expectedReturn,
  );
  const [duration, setDuration] = useState(initialUserInput.duration);

  const submitHandler = (event) => {
    event.preventDefault();
    props.onCalculate({
      currentSavings,
      yearlyContribution,
      expectedReturn,
      duration,
    });
  };

  const resetHandler = () => {
    setCurrentSavings(initialUserInput.currentSavings);
    setYearlyContribution(initialUserInput.yearlyContribution);
    setExpectedReturn(initialUserInput.expectedReturn);
    setDuration(initialUserInput.duration);
  };

  const inputChangeHandler = (input, value) => {
    if (input === "current-savings") {
      setCurrentSavings((prevInput) => {
        return +value;
      });
    } else if (input === "yearly-contribution") {
      setYearlyContribution((prevInput) => {
        return +value;
      });
    } else if (input === "expected-return") {
      setExpectedReturn((prevInput) => {
        return +value;
      });
    } else {
      setDuration((prevInput) => {
        return +value;
      });
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler} className={styles.form}>
        <div className={styles["input-group"]}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              onChange={(event) => {
                inputChangeHandler("current-savings", event.target.value);
              }}
              value={currentSavings}
              type="number"
              id="current-savings"
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              onChange={(event) => {
                inputChangeHandler("yearly-contribution", event.target.value);
              }}
              value={yearlyContribution}
              type="number"
              id="yearly-contribution"
            />
          </p>
        </div>
        <div className={styles["input-group"]}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              onChange={(event) => {
                inputChangeHandler("expected-return", event.target.value);
              }}
              value={expectedReturn}
              type="number"
              id="expected-return"
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              onChange={(event) => {
                inputChangeHandler("duration", event.target.value);
              }}
              value={duration}
              type="number"
              id="duration"
            />
          </p>
        </div>
        <p className={styles.actions}>
          <button
            onClick={resetHandler}
            type="reset"
            className={styles.buttonAlt}
          >
            Reset
          </button>
          <button type="submit" className={styles.button}>
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
};

export default UserInput;
