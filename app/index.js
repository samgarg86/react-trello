import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import {browserHistory, Router} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import { createStore } from 'redux';
import rootReducer from './reducers';
import {Provider} from 'react-redux';
import routes from './routes';

const store = createStore(
    rootReducer,
    {lists: [], cards: [], filter: ''},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
const history = syncHistoryWithStore(browserHistory, store);

render(
    <AppContainer>
        <Provider store={store}>
            <Router history={history} routes={routes} />
        </Provider>
    </AppContainer>,
    document.getElementById('root')
);
