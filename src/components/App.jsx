import { useState } from "react";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
 
export default function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = evt => { 
    switch (evt.target.name) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions 
            options={{ good, neutral, bad}}
            onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
       <Section title="Statistics">
        <Statistics
           good={good}
           neutral={neutral}
           bad={bad}
        />
        </Section>
  </>);
};

