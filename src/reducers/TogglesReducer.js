import { CHANGE_TOGGLE } from '../actions/types';

const INITIAL_STATE = {
    score: 0,
    questions: [{
        id: 1,
        answer: 0,
        answers: [{ text: 'Hot', correct: false }, { text: 'Cold', correct: true }],
    },
    {
        id: 2,
        answer: 0,
        answers: [{ text: 'No Water', correct: false }, { text: 'Water', correct: true }],
    },
    {
        id: 3,
        answer: 0,
        answers: [{ text: 'No Food', correct: false }, { text: 'Food', correct: true }],
    }]
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_TOGGLE:
            return {
                ...state,
                score: action.payload.currentlyCorrect ? (state.score - 1) : (state.score + 1),
                questions: state.questions.map((item) => {
                    if (item.id === action.payload.toggleId) {
                        // toggle item.answer
                        item.answer = (item.answer === 0 ? 1 : 0);
                    }
                    return item;
                }),
            };
        default: {
            return state;
        }
    }
};
