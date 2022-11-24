import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  const optionsList = Object.keys(options);
  return (
    <>
      <div className={css.feedback__options}>
        {optionsList.map(name => (
          <button
            key={name}
            name={name}
            className={css.feedback__btn}
            type="button"
            onClick={onLeaveFeedback}
          >
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </button>
        ))}
      </div>
    </>
  );
}

FeedbackOptions.propTypes = {
  option: PropTypes.objectOf(PropTypes.number),
  onLeaveFeedback: PropTypes.func.isRequired,
};
