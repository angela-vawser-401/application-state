import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { getActions, getFace } from '../selectors/moodSelector';

const Moods = ({ actions, emoji, handleSelection }) => {
  return (
    <>
      <Controls actions={actions} handleSelection={handleSelection} />
      <Face emoji={emoji} />
    </>
  );
};

const mapStateToProps = state => ({
  emoji: getFace(state),
  actions: getActions(state)
});

Moods.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.object).isRequired,
  emoji: PropTypes.string.isRequired,
  handleSelection: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  handleSelection(name) {
    dispatch({
      type: name
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Moods);
