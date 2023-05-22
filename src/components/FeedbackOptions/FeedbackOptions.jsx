import * as React from 'react';
import Button from '@mui/material/Button';
import css from './FeedbackOptions.module.css';

import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={css.list}>
      {options.map(option => {
        return (
          <li key={nanoid(5)}>
            <Button
              variant="contained"
              type="button"
              name={option}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </Button>
          </li>
        );
      })}
    </ul>
  );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
