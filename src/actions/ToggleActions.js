import { CHANGE_TOGGLE } from './types';

export const changeToggle = (toggleId, currentlyCorrect) => ({
    type: CHANGE_TOGGLE,
    payload: { toggleId, currentlyCorrect },
});