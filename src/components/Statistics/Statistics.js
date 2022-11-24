import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import Notification from 'components/Notification';

export default function Statistics({ good, neutral, bad }) {
  const total = good + neutral + bad;
  const positiveFeedbackPercentage = Math.ceil((good * 100) / total);
  const positivePercentage = good ? positiveFeedbackPercentage : 0;

  if (total === 0) {
    return <Notification message="There is no feedback" />;
  }

  return (
    <div className={css.statistics}>
      <ul className={css.statistics__list}>
        <li className={css.statistics__item}>Good: {good}</li>
        <li className={css.statistics__item}>Neutural: {neutral}</li>
        <li className={css.statistics__item}>Bad: {bad}</li>
        <li className={css.statistics__item}>Total: {total}</li>
        <li className={css.statistics__item}>
          Positive feedback: {positivePercentage}%
        </li>
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
