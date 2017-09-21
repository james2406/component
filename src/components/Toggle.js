import React, { Component } from 'react';

export default class Toggle extends Component {
    render() {
        const { id, answer, answers, toggleClicked } = this.props;
        // passed the the css, to let it know whether toggle-selection should be to the left or right
        const selection = answer === 0 ? 'left' : 'right';

        // will be passed to the reducer
        const currentlyCorrect = answers[answer].correct;

        return (
            <li className={'toggle ' + selection}>
                <input id={`cb-${id}-left`} type="checkbox" />
                <label
                    htmlFor={`cb-${id}-left`}
                    className="cb-left"
                    onClick={toggleClicked.bind(this, id, currentlyCorrect)}
                >
                    {answers[0].text}
                </label>

                <input id={`cb-${id}-right`} type="checkbox" />
                <label
                    htmlFor={`cb-${id}-right`}
                    className="cb-right"
                    onClick={toggleClicked.bind(this, id, currentlyCorrect)}
                >
                    {answers[1].text}
                </label>

                <span className="toggle-selection"></span>
            </li>
        );
    }
}
