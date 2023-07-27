import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};
const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>
        <b>{text}</b>
      </td>
      <td>
        <b>{value}</b>
      </td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad, totalFeedbacks }) => {
  const average = totalFeedbacks === 0 ? 0 : (good - bad) / totalFeedbacks;
  const percentage = totalFeedbacks === 0 ? 0 : (good / totalFeedbacks) * 100;

  if (totalFeedbacks === 0) {
    return (
      <p>
        <b>No feedback given</b>
      </p>
    );
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={totalFeedbacks} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="percentage" value={`${percentage}%`} />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const totalFeedbacks = good + neutral + bad;
  const handleGoodClick = () => {
    setGood(good + 1);
  };
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };
  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        totalFeedbacks={totalFeedbacks}
      />
    </div>
  );
};

export default App;
