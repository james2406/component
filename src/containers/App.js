import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import '../styles/main.scss';

import reducers from '../reducers';
import Mask from '../components/Mask';

export default class App extends Component {
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <div className="rectangle">
                    <Mask />
                </div>
            </Provider>
        );
    }
}
