import React from 'react';
import PropTypes from 'prop-types';

const GameHistory = ({ histories }) => {
  const history = histories.map((history, i) => {
    return (
      <li key={history.id || i}>
        <p>{history[0].text}: {history[0].count}</p>
        <p>{history[1].text}: {history[1].count}</p>
        <p>{history[2].text}: {history[2].count}</p>
        <p>{history[3].text}: {history[3].count}</p>
      </li>
    );
  });

  return (
    <ul>
      {history}
    </ul>
  );
};

GameHistory.propTypes = {
  histories: PropTypes.array
};

export default GameHistory;
