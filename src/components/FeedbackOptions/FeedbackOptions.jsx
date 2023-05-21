import * as React from 'react';
import Button from '@mui/material/Button';
import css from './FeedbackOptions.module.css';

import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
  const stateKeys = Object.keys(options);
  return (
    <ul className={css.list}>
      {stateKeys.map(state => {
        return (
          <li key={nanoid(5)}>
            <Button
              variant="contained"
              type="button"
              name={state}
              onClick={() => onLeaveFeedback(state)}
            >
              {state}
            </Button>
          </li>
        );
      })}
    </ul>
  );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
