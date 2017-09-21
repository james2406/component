import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Toggle from './Toggle';

class Mask extends Component {
    render() {
        const { toggles, changeToggle } = this.props;
        const { score, questions } = toggles;

        // true when questions correctly answered 
        const complete = score === questions.length;

        // creating a toggle for each question in the ToggleReducer
        const Toggles = toggles.questions.map(toggle => (
            <Toggle key={toggle.id} {...toggle} toggleClicked={changeToggle} />
        ));

        // level-${score} is used by the css to set the correct gradient
        return (
            <div className={`mask level-${score}`}>
                <h2>Ideal conditions for the bacterial growth</h2>
                <ul className="toggles">
                    {Toggles}
                </ul>
                <p className="feedback-text">{complete ? 'The answer is correct.' : 'The answer is incorrect.'}</p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    score: state.score,
    toggles: state.toggles,
});

const mapDispatchToProps = dispatch => ({
    changeToggle: (toggleId, currentlyCorrect) =>
        dispatch(actions.changeToggle(toggleId, currentlyCorrect)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Mask);
