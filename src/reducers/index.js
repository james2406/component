import { combineReducers } from 'redux';

import TogglesReducer from './TogglesReducer';

export default combineReducers({
    toggles: TogglesReducer,
});
