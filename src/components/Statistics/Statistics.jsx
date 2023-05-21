import React from 'react';
import css from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <ul>
      <li className={css.item}>Neutral: {neutral}</li>
      <li className={css.item}>Good: {good}</li>
      <li className={css.item}>Bad: {bad}</li>
      <li className={css.item}>Total: {total}</li>
      <li className={css.item}>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
}
